---
target: главная
total_score: 19
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:C:\\zorahm.com\\src\\components\\HomePage.tsx"
target_fingerprint: "sha256:01c4ed093ada542a84f972469a6ac20031ce14dcc92e0f569957f37e8b2cd13a"
target_path: "C:\\zorahm.com\\src\\components\\HomePage.tsx"
timestamp: 2026-10-08T15-12-04Z
slug: src-components-homepage-tsx
---
Method: dual-agent (A: source-only design review; B: detector). No browser was connected: nothing was rendered, layout claims are derived from CSS and strings, no overlays.

## Design Health Score: 19/32 (59%, Acceptable)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | A hovered index row is Sunken and turns Raised when the pointer leaves; "That's the last frame" shows while Next wraps to frame 1 |
| 2 | Match System / Real World | 2 | At 1200px and below a section is described only by name plus a jargon tag ("Gargantua / Schwarzschild", "Space 3D / Shader") |
| 3 | User Control and Freedom | 2 | The motion disclaimer has one button: no Escape, no "enter without motion" |
| 4 | Consistency and Standards | 2 | The disclaimer runs on the legacy night palette; "Get in touch" is the hero CTA, the frame-7 title and the contact heading |
| 5 | Error Prevention | 3 | Little to get wrong |
| 6 | Recognition Rather Than Recall | 2 | Frame tabs are bare 01..07; Saturn has no visible label; section descriptions exist only in the hover preview |
| 7 | Flexibility and Efficiency | n/a | Experience surface, no repeated task |
| 8 | Aesthetic and Minimalist Design | 3 | Restrained; noise is eyebrows restating headings and contact content shown twice in a row |
| 9 | Error Recovery | 2 | A clipboard failure is silent |
| 10 | Help and Documentation | n/a | No task needs documentation |

## Design Specificity Verdict

The materials are authored, the skeleton is not. Dot plates, the Saturn link that hands its figure to /space, the plate morph on index hover and the three-voice type belong to the author. They hang on the stock personal-landing sequence: hero with bio and two buttons, section list, seven-step carousel, contacts. The component comment says "Halftone plates stay as decoration" (src/components/HomePage.tsx:34), against a North Star where everything is assembled from one dot.

Plates are semantically loose: index previews reuse story shapes (Space = noise, Gargantua = the hero's saturn, Games = a GitHub contribution grid; src/content/home.ts:20-25), while purpose-built figures (rails, street, spirit, crossword, rules in src/components/eco/plate.ts) are excluded by the ShapeId type.

Deterministic scan: 0 findings in HomePage.tsx, HomePage.module.css and src/components/eco. 3 advisory findings in src/components/MotionDisclaimer.module.css (font-size 11px at :22, clamp(28px, 5vw, 44px) at :32, border-radius 3px at :48), all true positives and already documented as legacy in DESIGN.md. The detector does not resolve var() tokens, so it missed the disclaimer contrast issue below.

## Overall Impression

A disciplined token system on a cautious page. The biggest opportunity is to show the work instead of describing it: the first screen currently leads to contacts, not into the site.

## What's Working

- The plate as one continuous object: dots ease to the new figure, colours re-read on theme change, the loop stops off screen (src/components/eco/DotPlate.tsx).
- Saturn carries over into the scene via arriveAt(SATURN) (HomePage.tsx:91-97).
- Contrast and keyboard: Muted Ink on Paper 6.59:1, Vermilion Ink on Paper 5.47:1, one global focus ring, a correct tabs pattern with arrow keys.

## Priority Issues

**[P1] The motion disclaimer title is unreadable in light theme.**
- What: the title uses color: var(--ink) on background: var(--void) (MotionDisclaimer.module.css:16, :34). On eco pages body:has(.page) redefines --ink to #1a1611 in light theme (src/components/eco/eco.module.css:7-13) while --void stays #03050a, about 1.1:1. Derived from the cascade, not confirmed in a browser. Body text (--dim) and the button (--gold) stay legible.
- Also: shown under prefers-reduced-motion; aria-modal without a focus trap; the accept button removes its focus outline (:62-67).
- Why: it is the first screen of a site whose success is "stays and explores", and its copy advises leaving.
- Fix: at minimum move the screen to eco tokens. Stronger: drop the full-screen gate on paper pages (plates stay still until allowed) and keep a gate only for WebGL scenes.
- Suggested command: /impeccable harden

**[P1] Below 1200px the index stops describing anything; below 960px it is the only navigation.**
- What: the description line hides at 1200px (HomePage.module.css:238-240); the preview card and the header nav hide at 960px (:267-269, eco.module.css:466-468). Between 561 and 1200px nothing in the row grows: the title is a fixed 180px with flex-shrink: 0 (:95-102), so tag and arrow pack left.
- Fix: make each row two lines (name, then the line text), min-height instead of height: 80px, title flex: 1; at 960px and below show the section's own plate in the row.
- Suggested command: /impeccable adapt

**[P1] The hero is optimised for an action PRODUCT.md calls a side effect.**
- What: the only vermilion button is "Get in touch", the secondary leaves for GitHub (HomePage.tsx:74-87). The real way in, Saturn, is an unlabelled canvas with a 14px hint hidden on touch (:88). The bio (src/content/en.ts:331) is interchangeable; none of the site's real numbers appear on the home page.
- Fix: make Saturn the hero action with a visible label, demote contact to an ink link, replace the bio with a sentence stating what is on the site. Copy changes need the owner's approval.
- Suggested command: /impeccable bolder

**[P2] The "Seven frames" section is a generic carousel that duplicates the contact block.**
- What: six clicks for about 120 words; frame 7 repeats the heading and body of the section directly under it (HomePage.tsx:42-54); frame 6 is the third GitHub link. Next wraps to frame 1 while the hint says it is the last (:188-190, :289). Prev/next changes are not announced.
- Fix: end at frame 5 or 6; either a continuous scroll with one morphing plate, or tabs labelled with words; disable Next on the last frame.
- Suggested command: /impeccable distill

**[P2] Hover-dependent interactions break on touch.**
- What: onPointerEnter selects and the same tap navigates (HomePage.tsx:128), likely leaving the preview on AI on landscape tablets (unverified). In a narrow mouse window the lead still says the card opens on the right (en.ts:258) while it is hidden. On touch .headLead is hidden outright (eco.module.css:447-451), removing the only sentence saying what the index holds.
- Fix: split the lead into a description (always shown) and a hover instruction (only under hover: hover and min-width: 961px).
- Suggested command: /impeccable adapt

## Persona Red Flags

**Casey (mobile):** arrives at a black takeover advising to leave; no header nav; rows read "Гаргантюа ШВАРЦШИЛЬД" with no explanation; the language switch is a 24px-tall target (eco.module.css:304-313); nothing says Saturn is tappable.

**Sam (keyboard / screen reader):** aria-modal with a tabbable page behind; in the English UI the language nav label is Russian text (en.ts:22, src/components/eco/EcoShell.tsx:87); prev/next frame changes are silent.

**Jordan (first-timer):** cannot tell what the site is from the bio; asked to get in touch three times before seeing any work; nothing says games are playable or scenes interactive.

## Minor Observations

- No max width: at 1920px hero text and Saturn sit about 500px apart.
- Raised and Sunken differ from Paper by 1.06-1.13:1; the selected row relies on its marker.
- The Russian copy button is wider than the address it copies.
- Header nav omits Space 3D while the index lists it (EcoShell.tsx:63).
- The vermilion slash on light paper is 2.89:1.

## Questions to Consider

1. If the site is the work, why is the home page a description of it? What if the index were six live plates you enter?
2. Would the page lose anything if the seven frames were replaced by one specific thing, such as a model's 56-minute game playable in place?
3. Who is the warning for? If it is for the WebGL scenes, why does a reader of a paper page with slowly breathing dots meet it first?
