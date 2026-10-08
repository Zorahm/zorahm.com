---
name: ZorahM Laboratory
description: A cool daylight bench where the work is laid out as halftone specimens, in blue-black ink with one ultramarine accent. Dark is a choice the visitor makes.
colors:
  ground: "#eef1f2"
  panel: "#f8fafa"
  well: "#e1e6e8"
  line: "#cdd5d9"
  line-strong: "#7b878f"
  ink: "#10171c"
  ink-muted: "#56626a"
  signal: "#2b45e0"
  on-signal: "#ffffff"
  dark-ground: "#0e1317"
  dark-panel: "#151b20"
  dark-well: "#090d10"
  dark-line: "#243038"
  dark-line-strong: "#62727d"
  dark-ink: "#e6ecef"
  dark-ink-muted: "#8d9ba4"
  dark-signal: "#8ea2ff"
  dark-on-signal: "#0e1317"
  dark-signal-ink: "#9db0ff"
  scene-sky: "#000000"
typography:
  hero-title:
    fontFamily: "Geologica, system-ui, sans-serif"
    fontSize: "clamp(88px, 24vw, 400px)"
    fontWeight: 300
    lineHeight: 0.82
    letterSpacing: "-0.04em"
  display-xl:
    fontFamily: "Geologica, system-ui, sans-serif"
    fontSize: "64px"
    fontWeight: 300
    lineHeight: "64px"
    letterSpacing: "-0.03em"
  display-l:
    fontFamily: "Geologica, system-ui, sans-serif"
    fontSize: "44px"
    fontWeight: 300
    lineHeight: "48px"
    letterSpacing: "-0.025em"
  contact-name:
    fontFamily: "Geologica, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 300
    lineHeight: "36px"
    letterSpacing: "-0.03em"
  reading-title:
    fontFamily: "Geologica, system-ui, sans-serif"
    fontSize: "clamp(48px, 8.5vw, 128px)"
    fontWeight: 300
    lineHeight: 0.98
    letterSpacing: "-0.045em"
  reading-h2:
    fontFamily: "Geologica, system-ui, sans-serif"
    fontSize: "clamp(32px, 4vw, 44px)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  reading-lead:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: "34px"
  reading-text:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "30px"
  score-digits:
    fontFamily: "Geologica, system-ui, sans-serif"
    fontSize: "clamp(56px, 7vw, 88px)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.04em"
  count-value:
    fontFamily: "Geologica, system-ui, sans-serif"
    fontSize: "56px"
    fontWeight: 300
    lineHeight: "56px"
    letterSpacing: "-0.04em"
  index-title:
    fontFamily: "Geologica, system-ui, sans-serif"
    fontSize: "clamp(32px, 3.4vw, 48px)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "Geologica, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: "28px"
  mark:
    fontFamily: "Geologica, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "28px"
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "28px"
  body:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "26px"
  hint:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "22px"
  readout:
    fontFamily: "JetBrains Mono, ui-monospace, Consolas, monospace"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "16px"
    letterSpacing: "0.08em"
  code:
    fontFamily: "JetBrains Mono, ui-monospace, Consolas, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "22px"
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
  section: "72px"
  gutter: "80px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-signal}"
    rounded: "{rounded.none}"
    padding: "10px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 24px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.well}"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "44px"
  nav-link:
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.none}"
    padding: "8px 0"
  nav-link-current:
    textColor: "{colors.ink}"
  lang-switch-active:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "4px 0"
  sheet-card:
    backgroundColor: "transparent"
    rounded: "{rounded.none}"
    padding: "40px 0 0"
  chip-code:
    backgroundColor: "{colors.well}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.none}"
    padding: "0 8px"
  footer:
    padding: "16px 80px"
---

# Design System: ZorahM Laboratory

## Overview

**Creative North Star: "The Specimen Bench"**

A cool daylight laboratory where the work is laid out as specimens: one large halftone figure at a time, a great deal of air, no frames and no night. The ground is a blue-grey white (not cream), the ink is blue-black, and a single cold ultramarine marks the one thing that is current. The site's own code draws every figure as a field of dots, so the dots are the material of this world, not decoration on top of it.

Density is low and the scale is wide: a name set light at up to 400px sits against a calm plate, and lists are made of large names, not cards. Structure comes from hairlines and from tonal steps between ground and well, never from boxes, radii or shadows. Dark exists as an opt-in bench (slate with a pale periwinkle accent) that the visitor chooses; daylight is the default for everyone. The scene pages (Gargantua, Space 3D) and the 404 are always on the dark bench, using its ink #e6ecef and signal #8ea2ff, because their content is a lit scene on black.

This replaces the earlier Observatory system (dark warm night, orange signal, Commissioner, viewfinder brackets). None of its devices carry over.

**Key Characteristics:**
- Daylight by default; dark only by the visitor's stored choice.
- One accent, ultramarine, used sparingly: lead dots of a plate, the current link, primary actions, the current-item underline.
- Light-weight (300) Geologica at very large sizes; Onest for reading; mono for readouts only.
- Zero radius, hairline borders, no shadows.
- Halftone dot plates read `--ink` and `--signal` from the page, so they follow the theme.

## Colors

A blue-grey daylight with blue-black ink and a single ultramarine; the dark bench inverts the ground and lifts the accent to periwinkle. The Gargantua and Space 3D scene pages keep a black sky (`scene-sky`, #000000) behind their dark-bench interface in both themes.

### Primary
- **Ultramarine Signal** (#2b45e0): primary action fill, the current nav underline, the current index-row underline, accent dots in plates, selection, text links, focus outline. Dark bench uses **Periwinkle Signal** (#8ea2ff), with text-weight accent at #9db0ff.

### Neutral
- **Bench Ground** (#eef1f2): page background and browser theme colour. Dark: **Slate Ground** (#0e1317).
- **Specimen Panel** (#f8fafa): lifted surface where a surface must read above the ground. Dark: #151b20.
- **Well** (#e1e6e8): recessed bands (story section, hover wash, code chips). Dark: #090d10.
- **Hairline** (#cdd5d9): section and list dividers. Dark: #243038.
- **Strong Hairline** (#7b878f): borders of controls (secondary button, language switch). Dark: #62727d.
- **Blue-Black Ink** (#10171c): text and plate dots. Dark: **Pale Ink** (#e6ecef).
- **Muted Ink** (#56626a): secondary text, inactive nav and index rows, captions. Dark: #8d9ba4.

### Named Rules
**The One Current Thing Rule.** Ultramarine marks what is current or actionable (the active link, the active index name, the lead dots, the primary action). It is never a fill for decoration and never spread across a surface.

**The Token Parity Rule.** Every page reads colour through `--ground`, `--panel`, `--well`, `--line`, `--line-strong`, `--ink`, `--ink-muted`, `--signal`, `--on-signal`, `--signal-ink` set on `body` while a `.page` is mounted. Canvas drawings read the same variables; do not hard-code colours in a plate or a page.

## Typography

**Display Font:** Geologica (with system-ui, sans-serif); Latin and Cyrillic
**Body Font:** Onest (with system-ui, sans-serif); Latin and Cyrillic
**Label/Mono Font:** JetBrains Mono (with ui-monospace, Consolas); readouts only

**Character:** Geologica in its light cut holds up at hero scale in both languages and gives the name a drafted, quiet authority. Onest is a calm humanist reading face beside it. Mono appears only where something is a reading off an instrument.

### Hierarchy
- **Hero title** (300, clamp(88px, 24vw, 400px), 0.82, -0.04em): the site name on the home page only, on its own full-width row; clamp(72px, 26vw, 180px) under 960px.
- **Reading title** (300, clamp(48px, 8.5vw, 128px), 0.98, -0.045em, max 16ch, balanced): the full-width title of a long-read page such as /spirit.
- **Reading H2** (300, clamp(32px, 4vw, 44px), 1.1, -0.03em): real part headings in a reading layout; H3 is Geologica 400 at 24/30.
- **Reading lead** (400, 22px, 34px, 52ch) and **reading text** (400, 18px, 30px, 66ch; the long note 19/32): long-form copy. Score digits are Geologica 300 at clamp(56px, 7vw, 88px), tabular figures.
- **Display XL** (300, 64px, 64px, -0.03em): page titles on inner pages.
- **Display L / section heading** (300, 44px, 48px, -0.025em to -0.03em; 36px/40px under 960px): section headings, balanced wrap.
- **Index title** (300, clamp(32px, 3.4vw, 48px), 1.05, -0.03em): the large names in the specimen list.
- **Heading** (600, 22px, 28px): card and block headings.
- **Lead** (400, 18px, 28px, max 40ch): hero lead.
- **Body** (400, 16px, 26px, max 62ch): running text. Muted lines under index names are 16/24, 14/22 under 560px.
- **Hint** (400, 14px, 22px): short helper text, hidden on devices without hover.
- **Readout** (mono 600 at 12px, 16px, +0.08em, uppercase): a reading attached to a figure or control, such as the plate caption and the language toggle. The plate caption is 500 weight; the story label takes the accent ink.
- **Code** (mono 400, 14px, 22px): contact values, chips, data.

### Named Rules
**The Light At Scale Rule.** Display type is weight 300 with tight negative tracking; weight rises (600) only at 22px and below. Never bold a display line.

**The Readout Only Rule.** Mono is for values, coordinates, tags and contact strings. Headings and running text never use it.

## Layout

A 12-column grid with 24px column gap on the home hero, inside a responsive gutter: 80px, 48px under 1200px, 24px under 960px, 16px under 560px. Sections are full-bleed bands with 72px vertical padding by default (gap 32px) and no bottom border; the home index and story use roomier 96-120px. Structure inside sections is 1px hairlines (list rules, card tops, fact rows); the story band is the one recessed well.

Home composition: Saturn plate at the left in columns 1-6, bleeding off the left edge through a negative gutter margin (its scale and readout stay inside the gutter); the lead and actions stand beside the planet in columns 8-12, aligned to its bottom edge (28px up); the title runs on its own full-width row below. On narrow screens (under 960px) the order is plate, title, lead. Reading pages (/spirit) use a different layout: a full-width reading title, then a 7fr/5fr hero body with the lead beside the dot plate, then a two-column grid of a 220px sticky contents list (top 32px, top hairline, 14px muted links that underline in signal on hover; 180px under 1200px) in the left margin and one main column capped at 740px with a 96px gap. The contents list is hidden under 960px. Parts are separated by 1px hairlines with 56px padding and real H2 headings.

The specimen viewer is a three-track grid (empty, names 5fr, plate 6fr) with a sticky plate that follows the hovered or focused name. The story pins one plate at the left (560px) while texts of at least 62vh scroll on the right, capped at 1360px wide.

Responsive: under 960px the nav is hidden, the viewer and story stack with the plate first, the story plate becomes a strip pinned to the window top (max 32vh canvas) on a well background, and in a wide but short window (max-height 620px) it drops to static. Targets are at least 44px; the language toggle links extend their hit area by pseudo-element.

## Elevation & Depth

Flat. There are no shadows in the system. Depth is tonal: ground, well (recessed) and panel (lifted), separated by 1px hairlines. State is shown by background wash (well), colour change or underline, never by lift.

### Named Rules
**The No Shadow Rule.** Surfaces are not lifted with box-shadow. The only box-shadows in the shared system are inset underlines marking the current nav link (1px) and the current language (2px).

## Shapes

Square. Every control, chip, pill, panel and switch has radius 0. Borders are 1px hairlines (strong hairline for controls). The signature geometry is the dot: round marks on a regular grid, sized by value, forming figures that ease from one shape to the next. Plates have no frame or border; they bleed or sit on the ground.

## Components

### Buttons
- **Shape:** square (0 radius), 48px tall, padding 10px 24px, weight 600, gap 8px.
- **Primary:** ultramarine fill, white text. Hover inverts to ink fill with ground-coloured text.
- **Secondary:** transparent with 1px strong hairline. Hover washes to well. A 44px small variant (14px type) shares it. The 44px icon button is the exception: borderless, transparent, hover turns it signal-ink.
- **Focus:** 2px signal-ink outline, 2px offset, on every focusable element.

### Navigation
Unboxed 96px header row (64px under 560px): the Z\M mark (Geologica 400, 20px, the slash in signal) at the left; nav links (14px, muted, 32px apart) pushed right beside the tools. The current link is ink with a 1px signal inset underline; hover only darkens to ink. The language switch is a plain text toggle (mono 12px, 16px apart): the current language is ink with a 2px signal underline, the other muted. The theme button is a borderless 44px icon that turns signal-ink on hover. Nav is hidden under 960px.

### Specimen viewer (signature)
A list of large Geologica names with a muted one-line description, divided by hairlines. Rows are muted until hovered, focused or active; the active name is underlined in 2px signal with 8px offset and its arrow turns signal and nudges up-right. One sticky dot plate (40x26 cells) beside it morphs to the current row; a mono caption sits under it. Colour transitions are 160ms with ease cubic-bezier(0.22, 1, 0.36, 1).

### Dot plate (signature)
Halftone canvas of dots coloured from `--ink`, with a share (accent) taking `--signal`; built-in defaults are #10171c and #2b45e0. Dots ease to new targets, breathe slowly while on screen, and swell under a mouse pointer where `lens` is set. Grids used: hero 52x34, viewer 40x26, story 30x20. Under wide plates sits a measuring scale: a 6px strip of 21 ticks in the strong hairline with a long tick every fifth, then a mono 12px tabular readout (grid size left, live pointer x/y right, muted ink). On the hero plates of every page the `arrive` prop makes the figure assemble from random noise on first appearance. Reduced motion holds the plate still and skips the assembly. The 404 dot field uses the dark-bench pair #E6ECEF and #8EA2FF.

### Sheet card
Cards on the AI and Games pages are open hairline sheets: transparent, no panel fill, no border except a 1px top hairline, radius 0, 40px top padding, a 5fr/6fr text and cover grid with 48px gap. Status markers are 8px square signal chips, tags are 1px strong-hairline boxes in mono 12px, and facts are hairline-ruled dt/dd rows. Counts above a list are Geologica 300 at 56px with the caption under the number.

### Reading page (signature)
The /spirit layout, built for text. Titles won are stacked sheets divided by hairlines (not boxes): a mono 13px date stamp, a Geologica 300 prize heading, the muted event line, a large light score, a three-part roster as a definition list (mono values, one column under 960px), and a source link. The timeline and the facts are numbered rows: a 48px mono step number beside the text, hairline between rows, the step mark in Geologica 400 20px signal-ink. Sources are hairline-ruled link rows (min 52px) whose label underlines in 2px signal on hover.

### Contact list
Hairline-ruled rows with no boxes (min 88px), a 200px name column set large in Geologica 300 at 32px/36px and a mono value; hovering a row underlines the name in 2px signal (6px offset). Stacks to a column under 560px.

### Footer
Plain ground with a top hairline, min 88px (64px on phones), holding tools and links; no tinted strip.

## Do's and Don'ts

### Do:
- **Do** start from daylight (#eef1f2) and treat dark as the visitor's stored opt-in.
- **Do** keep every radius at 0 and every border at 1px hairline; cards are open sheets with a top rule, not boxes.
- **Do** give long reading a measure: one column of at most 740px, text at 18/30 near 66ch, and a contents list in the margin that disappears when there is no margin.
- **Do** put the dark-bench tokens on scene pages and keep the same ink and signal pair in canvas dot fields.
- **Do** read colours from the page tokens, in CSS and in canvas drawings.
- **Do** set display type at weight 300 with negative tracking, and let it be very large.
- **Do** pair every new name list or figure with a single large plate, not a grid of small ones.
- **Do** keep both languages equal: Geologica and Onest carry Cyrillic; check long Russian words with `overflow-wrap`.

### Don't:
- **Don't** use a dark room, warm cream, orange signal, Commissioner, or viewfinder brackets; these belong to the retired Observatory.
- **Don't** add shadows, glows or rounded corners.
- **Don't** box the header, language toggle, theme button, contact rows or footer; they are unboxed text on hairlines.
- **Don't** put a frame, border or card around a dot plate.
- **Don't** use a second accent colour, or ultramarine as a large fill.
- **Don't** use mono for headings or running text.
- **Don't** render a section of six small plates where one big plate can morph.
