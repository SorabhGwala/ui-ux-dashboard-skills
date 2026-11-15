# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.2.0] - 2026-11-15

### Added
- **`unslop` Skill (`skills/unslop/`):**
  - Integrated Damir Sokolovsky's (`@heydamir`) industry-standard Unslopping system for AI coding agents.
  - Implements the strict 9-pass redline workflow: Spacing (4px scale) → Color (1 neutral ramp, quiet chrome) → Icons (unified stroke, zero emoji labels) → Copy (no hype words, specific baselines) → Type (sentence case, 400/500 weights) → Layout (app proportions, scene heroes) → Details (nested radius rule) → Visuals (1 bright element, real materials) → Motion (restrained curves).
  - Included complete reference guides: `signs.md` (audit checklist of AI slop tells), `tokens.md` (neutral ramps & scales), `visuals.md` (hero compositions & prompt formulas), `effects.md` (glyph drawing & code effects), `rtl.md` (Arabic/Hebrew/Persian rules), and `refs.md`.
- Updated `AGENTS.md`, `README.md`, and `ARCHITECTURE.md` to establish the 7 core skills suite.

---

## [1.1.0] - 2026-11-15

### Added
- **`apple-design` Skill (`skills/apple-design/`):**
  - Integrated Emil Kowalski's Apple Design skill distilled from WWDC design talks (*Designing Fluid Interfaces*).
  - Enforces fluid physical motion, spring physics, velocity handoff, direct 1:1 manipulation, rubber-banding, and interruptible transitions.
  - Covers translucent materials, depth hierarchy, optical sizing, tracking, and Apple typography scales.
- Updated `AGENTS.md` intent routing matrix to route Apple design and gesture prompts to `skills/apple-design/`.
- Updated `README.md` and `ARCHITECTURE.md` with the 6th core skill.

---

## [1.0.0] - 2026-11-14

### Added
- **Master Routing System:**
  - `AGENTS.md`: Universal router supporting 4 surface modes (*Persuade*, *Operate*, *Read*, *Experience*) and the 7 non-negotiable golden rules.
  - `README.md`: Comprehensive human-facing documentation with quick-start guides and badge indicators.
  - `ARCHITECTURE.md`: Technical system design and multi-agent projection layer documentation.

- **5 Modular Agent Skills (`skills/`):**
  - `ui-design-taste`: Executive art direction, anti-slop rules, bento layouts, typography ratios, and 2px hover physics.
  - `dashboard-design`: Stephen Few / Edward Tufte chart encoding ladder, wordless data rules, honest deltas, and 5 operational states.
  - `web-interface-guidelines`: Vercel-grade WCAG AA/AAA checklist, focus rings, keyboard modal traps, and form ergonomics.
  - `design-tokens-system`: `DESIGN.md` specification parser and 4 brand presets (*Linear Dark*, *Vercel Clean*, *Stripe Enterprise*, *Warm Editorial*).
  - `ui-audit-critique`: Structured critique rubric ranked by operational harm (P0 to P5) and multi-resolution pre-ship verification checklist.

- **Production Component Snippets (`snippets/`):**
  - `kpi-card.tsx`: Honest metric tile with dynamic SVG sparkline, comparison baseline, and small-base handling.
  - `bullet-graph.tsx`: High-density performance-vs-target visual bar.
  - `date-range-filter.tsx`: Segmented date preset selector with live pulse freshness indicator.
  - `data-table.tsx`: Data-dense table with sticky blur header and soft-tinted status chips.
  - `skeleton-states.tsx`: Zero-CLS pulse skeletons and localized error containment cards.

- **Multi-Agent CLI & Installers:**
  - `bin/cli.js`: Zero-dependency cross-platform NPX runner (`npx @sorabhgwala/ui-ux-dashboard-skills`).
  - `setup.ps1`: Windows PowerShell automated setup script.
  - `setup.sh`: macOS and Linux Bash automated setup script.
  - Target projection support for Claude Code, Google Antigravity, Cursor, Copilot, and Codex.

- **Open Source Governance:**
  - MIT License (`LICENSE`).
  - Contribution guidelines (`CONTRIBUTING.md`).
  - Code of Conduct (`CODE_OF_CONDUCT.md`).
  - Security policy (`SECURITY.md`).
  - GitHub issue and pull request templates (`.github/`).
