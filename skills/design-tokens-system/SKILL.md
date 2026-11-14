---
name: design-tokens-system
description: "Extract, generate, or apply design system tokens and DESIGN.md files. Use when asked to define a design system, create or modify DESIGN.md, apply color palettes (Linear Dark, Vercel Clean, Stripe Light, Warm Editorial), or manage typography and spacing scales."
metadata:
  author: ui-ux-dashboard-skills
  version: "1.0.0"
---

# Design Tokens & DESIGN.md Specification

This skill manages design tokens and design systems using the open `DESIGN.md` standard. It allows AI agents to read, document, generate, or swap aesthetic worlds across web applications with complete consistency.

---

## 1. What is `DESIGN.md`?

`DESIGN.md` is a lightweight, human-readable markdown specification placed in a project's root or design directory. AI coding agents read `DESIGN.md` before generating any markup to ensure that every hex color, font size, margin, border radius, and shadow token matches the project's brand world.

---

## 2. Included Production Presets

When starting a new project or redesigning an existing one, agents can select from 4 pre-engineered design systems:

1. **Linear Dark:** [`presets/linear-dark.md`](presets/linear-dark.md)  
   *Deep pitch canvas (`#08090a`), translucent hairline borders, subtle inset highlights, and focused indigo accents.*
2. **Vercel Clean:** [`presets/vercel-clean.md`](presets/vercel-clean.md)  
   *High-contrast monochrome minimalism, stark blacks & whites, geometric typography, and electric blue links.*
3. **Stripe Enterprise:** [`presets/stripe-enterprise.md`](presets/stripe-enterprise.md)  
   *Clean accessible light mode (`#f8fafc`), layered soft elevations, crisp borders, and blurple accents.*
4. **Warm Editorial:** [`presets/warm-editorial.md`](presets/warm-editorial.md)  
   *Warm cream canvas (`#f7f7f4`), deep charcoal ink (`#26251e`), magazine serif headlines, and vibrant orange voltage.*

---

## 3. How to Generate or Apply a `DESIGN.md`

### Scenario A: Green-Field Project
1. Choose the preset matching the user's domain (e.g. `linear-dark.md` for dev tools, `warm-editorial.md` for blogs/creative).
2. Copy the token YAML block into a root `DESIGN.md` file in the user's project.
3. Map the tokens to Tailwind CSS variables (`tailwind.config.js`) or global CSS variables (`globals.css`).

### Scenario B: Existing Codebase (Extract Mode)
1. Inspect the existing CSS/Tailwind files to find recurring colors, font families, and border radiuses.
2. Synthesize them into a structured `DESIGN.md` file following the preset schema.
3. Replace hardcoded arbitrary hex values (e.g. `bg-[#1a1b26]`) with semantic token classes.
