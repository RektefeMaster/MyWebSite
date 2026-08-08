# DESIGN.md — Atelier Signal · Carbon Mist Petrol

Shipped visual contract for METEK Digital (portfolio / studio site). Structure from Atelier Signal; palette = Carbon · Mist · Petrol.

## Mode

**Experience** on the home surface: the work and the glass M lead; chrome UI recedes. Persuade only at FinalCta.

## Thesis

Visitor feels the machine (glass M), then sees proof in a hard void gallery, then reads thinking on paper. One system; two ground energies (void / paper).

## Palette — Carbon · Mist · Petrol

| Role | Light | Dark | Use |
|---|---|---|---|
| background (Mist) | `#e5e8eb` | `#0a0d11` | page |
| paper | `#eef1f4` | `#13181f` | editorial sections |
| foreground / ink (Carbon) | `#10141a` | `#eef1f4` | type |
| band | `#10141a` | `#06080b` | void proof bands |
| accent (Petrol) | `#0c6b66` | `#3dcdc4` | CTA, active, punch |
| accent-ink | `#085450` | `#3dcdc4` | Petrol as text on light |
| on-accent | `#f2fffe` | `#0a0d11` | text on filled Petrol |
| chrome / chrome-edge | cool steel + inset shine | same roles | nav, buttons, frames |

Mineral petrol against cool mist — not lime neon, not cyanotype sky blue, not terracotta copper. WhatsApp green stays channel-local.

## Type

- Display: Goks (`.font-display`)
- Subtitle: Vireon (`.font-subtitle`)
- UI: Space Grotesk

Brutal sections: larger display, tighter tracking (`~-0.04em`). Editorial: body ~65–75ch, quieter hierarchy. No section eyebrows.

## Materials

- **Chrome:** inset shine + 0.5px edge on nav, SpecularButton, form panels, mockup frames. Radius ~4px / `rounded-sm`, not pill clusters.
- **Glass M (R3F):** signature; geometry untouched. Env / lightformer hues aligned to Petrol + steel chrome.
- **Atmosphere:** grain + vignette; Petrol glow only on hero, low opacity; blueprint grid retired to near-invisible chrome lines.

## Page rhythm (home)

1. **Void:** Intro → Hero → Selected Work → Featured Case  
2. **Paper:** Capabilities → Manifesto → Approach → Blog → Footer  
3. **Void close:** FinalCta  

One void→paper costume change; no zebra every section.

## Secondary routes

Same world, shared shells:

- `PageHero` — paper + chrome hairline; no eyebrow label  
- `PageCta` — full void band close; no glow orbs  
- `/work` — void `Projects` grid + chrome `ProjectCard`  
- `/work/[slug]` — paper header → void gallery → paper body  
- `/approach` — paper Principles + Process chrome cards  
- `/services` — chrome accordion rows  
- `/manifesto` — paper StudioAbout → void Manifesto pin  
- `/blog` (+ article) — chrome editorial tiles; related cards match

## Motion

Orchestrated intro; WordReveal on major titles only; hover via transform/opacity (no `transition: all`). Hero atmosphere pauses when idle. Respect `prefers-reduced-motion`.

## Controls

SpecularButton tones `accent` | `ink` with chrome edge. Focus rings from `--accent`. Selection / caret / scrollbar themed from tokens.

## Do not

- Cyanotype blue (`#175e86` / `#7ec8e8`) as brand accent  
- Lime Signal (`#c6e04a` / `#d0ec5a`) as brand accent  
- Copper / terracotta (`#c45c28` / `#e07840`) as brand accent  
- Equal feature-card grids with icons as page scaffold  
- Eyebrow labels above headings  
- Hero glow everywhere / neon-on-black default  
- Flat AI cream `#f4f1e9` as paper (use cool mist)

## Finish

unreviewed and undocumented is unfinished; this file records the shipped Carbon · Mist · Petrol world.
