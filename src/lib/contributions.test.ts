import { describe, expect, it } from "vitest";
import { layoutContributions, parseContributions } from "./contributions";

// The shape GitHub serves: rows are weekdays, so dates arrive out of order
const HTML = `
  <h2 tabindex="-1" id="js-contribution-activity-description" class="f4 text-normal mb-2">
      1,455
      contributions
        in the last year
  </h2>
  <table><tbody>
    <tr>
      <td tabindex="0" data-ix="0" style="width: 11px" data-date="2025-10-26" id="a" data-level="0" role="gridcell"></td>
      <td tabindex="0" data-ix="1" style="width: 11px" data-date="2025-11-02" id="b" data-level="3" role="gridcell"></td>
    </tr>
    <tr>
      <td tabindex="0" data-ix="0" style="width: 11px" data-date="2025-10-27" id="c" data-level="1" role="gridcell"></td>
      <td tabindex="0" data-ix="1" style="width: 11px" data-date="2025-11-03" id="d" data-level="4" role="gridcell"></td>
    </tr>
  </tbody></table>`;

describe("GitHub contributions", () => {
  it("reads the total and every day in time order", () => {
    const { total, days } = parseContributions(HTML);
    expect(total).toBe(1455);
    expect(days).toEqual([
      { date: "2025-10-26", level: 0 },
      { date: "2025-10-27", level: 1 },
      { date: "2025-11-02", level: 3 },
      { date: "2025-11-03", level: 4 },
    ]);
  });

  it("gives an empty calendar for a page without one", () => {
    expect(parseContributions("<html></html>")).toEqual({ total: 0, days: [] });
  });

  it("lays weeks out as columns with Sunday on top", () => {
    const { cells, weeks } = layoutContributions(parseContributions(HTML).days);
    expect(weeks).toBe(2);
    expect(cells.map((c) => [c.col, c.row])).toEqual([
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ]);
  });
});
