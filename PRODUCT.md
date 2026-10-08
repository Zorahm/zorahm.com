# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

No primary audience is targeted. zorahm.com is ZorahM's personal ground: it is made for its author first, and the visitor is any curious person who lands on it, in English or in Russian.

Confirmed with the owner: the site is not tuned for clients, for the Telegram channel's readers, or for developers looking for tools. Those people do show up, and the site serves them, but none of them sets the priorities.

## Product Purpose

A personal site where ZorahM, who works with artificial intelligence, keeps experiments, scenes and notes in one place.

Success is a visitor who stays and explores: moves through the scenes and sections because the experience itself is worth the time. There is no target action. Contact, a GitHub visit or a plugin install are welcome side effects, never the goal a page is optimised for.

## Positioning

The site is the work, not a description of it. Every scene is drawn by the site's own code (halftone dot fields, ray-traced shaders), and the sections hold things the author actually built or cares about: tools for AI models, games produced by models as a test bench, space scenes, a fan's note.

## Operating Context

- Home (`/`, `/ru`): a hero with Saturn that leads into the Solar System, an index drawn as a specimen viewer (one large dot figure that becomes whichever section is hovered), a scrolled story running from data noise to the world, and contacts.
- AI (`/ai`): open-source plugins and skills for AI agents, each with what it is, where it runs and how to install it.
- Games (`/games`): browser games made by AI models, each card stating the model, the setup and how many prompts it took. Builds are served from `public/games/`.
- Space (`/space`): the Solar System in dots, with a readable card per body.
- Space 3D (`/space-3d`): the Solar System ray-traced in a single shader.
- Gargantua (`/gargantua`): an interactive black hole integrated along Schwarzschild geodesics.
- Spirit (`/spirit`): a fan's note about Team Spirit's titles in August and September 2026.
- A 404 page with the Waifik mascot easter egg.
- `llms.txt` and `llms-full.txt` are generated from the same content for machine readers.

Visitors arrive on desktop and on phones; the interactive scenes have touch controls.

## Capabilities and Constraints

- **Binding: English and Russian are equal.** Every page and every string exists in both languages. Text lives in the dictionaries under `src/content/` (`en.ts`, `ru.ts`), structure is language-independent, and tests enforce that both dictionaries stay aligned. New work ships in both languages at once.
- Current state, not a confirmed commitment: the site is a Next.js static export with no server, no environment variables and no backend calls, deployed as static files behind nginx. The owner did not mark this as binding.
- Motion follows the system: the figures and the WebGL scenes move unless the visitor's system asks for reduced motion (`prefers-reduced-motion`), in which case they hold still. There is no consent notice and no motion switch on the site (owner's decision, 2026-10-08, when the laboratory design replaced the observatory design).
- Current state, not a confirmed commitment: all artwork is the site's own, with no third-party logos, emblems or event photographs. This was agreed for the Spirit page specifically; the owner did not mark it as a site-wide rule.
- Scenes depend on WebGL; pages show an error message when it is unavailable.

## Brand Commitments

- Name: ZorahM. Sign: `Z\M`.
- Mascot: Waifik, the cat of the whole ecosystem.
- Voice, as the existing copy shows it: first person, plain and direct, dry rather than promotional, honest about limits (the Gargantua note says which part of the physics is real and which is noise; the Space 3D note says the scale is artistic).
- Licence: the code may be read and reused; the texts and the visual identity may not.

## Evidence on Hand

- AI projects: ZoWork (`github.com/Zorahm/zowork`) and Crossword Skill (`github.com/Zorahm/crossword-skill`), described in `src/content/ai.ts`.
- Games: Rail Rush and City Street, with model, setup, prompt count and build time recorded in `src/content/games.ts` and the dictionaries.
- Spirit: match results with linked sources in `src/content/spirit.ts`.
- Planet and Sun facts in the body dictionaries.
- Contacts: Telegram `t.me/zorahm`, GitHub `github.com/zorahm`, email `me@zorahm.com`.
- Absent, and not to be invented: clients, testimonials, case studies, employers, metrics, press, pricing.

## Product Principles

1. The experience is the point. A page earns its place by being worth exploring, not by moving a visitor toward an action.
2. Both languages or neither. Nothing ships in one language only.
3. Show the real thing. Sections hold working artefacts and true numbers, and the copy says where something is approximate.
4. It is a personal site. The author's interests decide what goes on it; no audience has to be served.
