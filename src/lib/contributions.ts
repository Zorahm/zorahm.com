/**
 * The GitHub contribution calendar of the site's owner, for the dotted graph
 * in the GitHub card.
 *
 * The public calendar page needs no token: every day is a <td> with its date
 * and a level from 0 to 4, and the yearly total sits in the heading. The site
 * is a static export, so this runs once per build and the graph is as fresh
 * as the last deploy.
 */

export const CONTRIBUTIONS_URL = "https://github.com/users/zorahm/contributions";
/** Where the build puts the parsed calendar for the page to read */
export const CONTRIBUTIONS_PATH = "/github-contributions.json";

export type ContributionDay = { date: string; level: number };
export type Contributions = { total: number; days: ContributionDay[] };

export const NO_CONTRIBUTIONS: Contributions = { total: 0, days: [] };

/** Pulls the days and the yearly total out of the calendar's HTML */
export function parseContributions(html: string): Contributions {
  const days: ContributionDay[] = [];
  for (const [cell] of html.matchAll(/<td\b[^>]*\bdata-date="[^"]+"[^>]*>/g)) {
    const date = /\bdata-date="(\d{4}-\d{2}-\d{2})"/.exec(cell)?.[1];
    const level = Number(/\bdata-level="(\d)"/.exec(cell)?.[1]);
    if (!date || !Number.isInteger(level)) continue;
    days.push({ date, level: Math.min(Math.max(level, 0), 4) });
  }
  // The table runs row by row (one weekday across all weeks); the graph wants time order
  days.sort((a, b) => a.date.localeCompare(b.date));

  const heading = /id="js-contribution-activity-description"[^>]*>\s*([\d,]+)\s+contribution/.exec(html);
  const total = heading ? Number(heading[1].replace(/,/g, "")) : 0;

  return { total, days };
}

/** Fetches and parses the calendar; an empty one if GitHub cannot be reached */
export async function fetchContributions(): Promise<Contributions> {
  try {
    const response = await fetch(CONTRIBUTIONS_URL, {
      headers: { "user-agent": "zorahm.com build" },
    });
    if (!response.ok) return NO_CONTRIBUTIONS;
    return parseContributions(await response.text());
  } catch {
    return NO_CONTRIBUTIONS;
  }
}

export type ContributionCell = { col: number; row: number; level: number; date: string };

/**
 * Lays the days out the way GitHub does: one column per week, Sunday on top.
 * Dates are calendar days, so they are read in UTC to keep weekdays stable.
 */
export function layoutContributions(days: ContributionDay[]) {
  if (days.length === 0) return { cells: [] as ContributionCell[], weeks: 0, months: [] };

  const DAY = 86_400_000;
  const first = Date.parse(`${days[0].date}T00:00:00Z`);
  const offset = new Date(first).getUTCDay();

  const cells: ContributionCell[] = days.map((day) => {
    const index = Math.round((Date.parse(`${day.date}T00:00:00Z`) - first) / DAY) + offset;
    return { col: Math.floor(index / 7), row: index % 7, level: day.level, date: day.date };
  });
  const weeks = cells[cells.length - 1].col + 1;

  // A month label goes over the first full week that starts in that month
  const months: { col: number; month: number; year: number }[] = [];
  for (const cell of cells) {
    if (cell.row !== 0) continue;
    const date = new Date(`${cell.date}T00:00:00Z`);
    const month = date.getUTCMonth();
    const previous = months[months.length - 1];
    if (!previous || previous.month !== month) {
      months.push({ col: cell.col, month, year: date.getUTCFullYear() });
    }
  }
  // The first label is dropped if the next one follows too closely to fit
  if (months.length > 1 && months[1].col - months[0].col < 3) months.shift();

  return { cells, weeks, months };
}
