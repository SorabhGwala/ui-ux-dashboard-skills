# 🎨 Universal UI/UX & Dashboard Design Skills Suite

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](CHANGELOG.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Node >= 18](https://img.shields.io/badge/node-%3E%3D18.0.0-orange.svg)](package.json)
[![Standard: Agent Skills](https://img.shields.io/badge/standard-agentskills.io-purple.svg)](https://agentskills.io)

> **Production-grade design director intelligence, anti-slop guidelines, honest dashboard engineering, and accessible web standards for AI coding agents.**

This repository contains a modular collection of specialized **Agent Skills** conforming to the open [Agent Skills specification](https://agentskills.io). When loaded into an AI coding assistant (such as **Google Antigravity**, **Claude Code**, **Cursor**, **GitHub Copilot**, **OpenAI Codex**, or **Windsurf**), it equips the agent with the taste, heuristics, and execution standards of an executive design director and senior frontend engineer.

---

## 🌟 What This Solves

AI agents frequently suffer from common design failure modes:
* **The "AI Slop" Look:** Predictable 3-column equal-width feature cards, uninspired purple-to-blue gradients, floating SVG circles, and generic landing page clichés.
* **Dishonest Dashboards:** Misleading percentage swings on tiny sample sizes (e.g. `-100%` when count dropped from 1 to 0), walls of text under metrics, inverted delta colors on costs, and missing empty/loading states.
* **Accessibility Failures:** Invisible focus states (`outline: none`), icon buttons missing `aria-label`, forms blocking paste, and broken keyboard navigation.
* **Inconsistent Visual Tokens:** Random font sizes, chaotic spacing scales, and mismatched hex codes.

This suite eliminates these flaws by establishing strict design rules, visual encoding hierarchies, design token specifications, and pre-ship review rubrics.

---

## 📦 What's Inside

```
ui-ux-dashboard-skills/
├── AGENTS.md                          # Master routing instructions for AI agents
├── README.md                          # Developer documentation (this file)
│
├── skills/
│   ├── ui-design-taste/               # Senior art direction, layout variety & anti-slop
│   │   ├── SKILL.md
│   │   └── references/                # Anti-slop rules, typography scale, micro-interactions
│   │
│   ├── dashboard-design/              # Operational & analytics dashboard architecture
│   │   ├── SKILL.md
│   │   └── references/                # KPI tiles, chart encoding ladder, tables, states
│   │
│   ├── web-interface-guidelines/      # Vercel-grade WCAG a11y & usability standards
│   │   ├── SKILL.md
│   │   └── references/                # Semantic HTML checklist, form & motion safety
│   │
│   ├── design-tokens-system/          # DESIGN.md token parser, generator & brand presets
│   │   ├── SKILL.md
│   │   └── presets/                   # Linear Dark, Vercel Clean, Stripe, Warm Editorial
│   │
│   ├── apple-design/                  # Apple fluid interfaces, spring physics & WWDC motion
│   │   └── SKILL.md
│   │
│   ├── unslop/                        # Damir Sokolovsky's 9-pass anti-slop redline pass
│   │   ├── SKILL.md
│   │   └── references/                # Signs of slop, token ramps, visuals, effects, RTL
│   │
│   └── ui-audit-critique/             # Heuristic critique, audit & pre-ship QA passes
│       ├── SKILL.md
│       └── references/                # Critique scoring rubric & pre-commit checklist
│
├── snippets/                          # Ready-to-use React + Tailwind CSS component patterns
│   ├── kpi-card.tsx                   # Honest metric tile with sparkline & baseline
│   ├── bullet-graph.tsx               # Stephen Few progress-vs-target visual
│   ├── date-range-filter.tsx          # Compact calendar popover & filter toolbar
│   ├── data-table.tsx                 # Tabular data grid with sticky headers & density
│   └── skeleton-states.tsx            # Pulse skeletons & honest empty states
│
├── setup.ps1                          # Windows PowerShell multi-agent installer & linker
└── setup.sh                           # macOS/Linux Bash multi-agent installer & linker
```

---

## 🚀 How to Use in Any Project

### Method 1: NPX Direct Runner (Recommended — Universal)
Run directly via NPX without needing any pre-installation or shell scripts:

```bash
# Install into current project for all agents (Claude, Antigravity, Cursor, Copilot)
npx @sorabhgwala/ui-ux-dashboard-skills

# Or specify a target directory and agent
npx @sorabhgwala/ui-ux-dashboard-skills --target ./my-app --agent cursor
```

### Method 2: Local Setup Scripts (PowerShell / Bash)
If working directly from this cloned repository:

**On Windows (PowerShell):**
```powershell
# Link skills into an active project for all detected agents
& "D:\ui-ux-dashboard-skills\setup.ps1" -TargetDir "C:\path\to\my-app"

# Or target a specific agent (e.g. cursor, claude, gemini)
& "D:\ui-ux-dashboard-skills\setup.ps1" -TargetDir "C:\path\to\my-app" -Agent "cursor"
```

**On macOS / Linux (Bash):**
```bash
# Link skills into an active project
bash "D:/ui-ux-dashboard-skills/setup.sh" --target "/path/to/my-app"
```

### Method 2: Claude Code CLI
In your target project:
```bash
# Install individual skills directly via npx
npx skills add D:/ui-ux-dashboard-skills/skills/dashboard-design
npx skills add D:/ui-ux-dashboard-skills/skills/ui-design-taste
npx skills add D:/ui-ux-dashboard-skills/skills/web-interface-guidelines
```

### Method 3: Cursor / Windsurf
The setup script automatically populates `.cursor/rules/ui-ux-master.mdc` or you can manually reference [`AGENTS.md`](file:///D:/ui-ux-dashboard-skills/AGENTS.md) in your project rules.

### Method 4: Google Antigravity / Gemini CLI
Skills are linked to `<project>/.gemini/skills/` or `<project>/.agent/skills/` and can be invoked directly during any conversation.

---

## 📚 The 7 Core Skills at a Glance

### 1. `ui-design-taste`
* Enforces the 4 surface modes: **Persuade** (marketing/landing), **Operate** (dashboards/tools), **Read** (docs), and **Experience** (showcases).
* Eliminates AI cliches: enforces asymmetric hero layouts, realistic app frames, and high-contrast editorial typography.
* Dictates subtle micro-interactions: 2px card hover lifts, 1.02x container photo zooms, active button compressions.

### 2. `dashboard-design`
* Implements the **Monitor Loop**: *Overview → What needs attention → Closer look → Act*.
* **The 3-Second First Glance Rule**: Primary metric state understood in under 3 seconds.
* **Wordless Dashboards**: 0 explanatory sentences outside tooltips.
* **Data Honesty**: Proper handling of tiny bases, polarity inversion (lower is better for latency/churn), and Cleveland & McGill visual encoding ladders.

### 3. `web-interface-guidelines`
* Strict accessibility (WCAG AA/AAA): Icon-only button `aria-label`, visible `:focus-visible` rings, semantic heading hierarchy.
* Accessible form design: Clickable labels, zero paste-blocking, correct `inputmode`, inline errors.
* Animation safety: Compositor-only (`transform`/`opacity`), no `transition: all`, `prefers-reduced-motion` compliance.

### 4. `design-tokens-system`
* Full support for the `DESIGN.md` lightweight design system standard.
* Includes 4 ready-to-drop brand worlds:
  - **Linear Dark:** High-contrast developer dark mode with subtle glowing hairlines.
  - **Vercel Clean:** Crisp geometric monochrome typography.
  - **Stripe Enterprise:** Accessible, clean light mode with soft elevations.
  - **Warm Editorial:** Magazine aesthetic with warm cream canvas (`#f7f7f4`).

### 5. `apple-design`
* Apple's philosophy of fluid interfaces, physical motion, and direct manipulation translated for the web.
* **Spring physics & interruptibility:** Motion starts from current on-screen position, inherits gesture velocity, and can be reversed at any point mid-flight.
* **Direct 1:1 manipulation & rubber-banding:** Soft boundaries, velocity handoff on drag release, sheets, drawers, translucent materials, and Apple typography scales.

### 6. `unslop`
* Damir Sokolovsky's authoritative framework for unslopping vibecoded, AI-looking interfaces.
* **The 9 Passes in Strict Order:** Spacing (4px grid) → Color (1 neutral ramp + quiet chrome) → Icons (unified stroke, zero emojis in labels) → Copy (no hype words/periods on titles) → Type (sentence case, 400/500 weights) → Layout (app proportions, scene heroes) → Details (nested radius rule) → Visuals (1 bright element, real materials) → Motion (calm physics).
* **Comprehensive Signs Checklist:** Detects and cures purple gradient blobs, glowing pills, unstyled emojis, mixed numeral formats, and generic AI template structures.

### 7. `ui-audit-critique`
* Design critique rubric: *Honesty → Salience → Hierarchy → Typography & Spacing → Component Smells → Polish*.
* Pre-ship multi-resolution inspection: 1440px, 1024px, 768px, and 390px passes.

---

## 📄 License
MIT License. Free to use, adapt, and distribute across all your personal and commercial projects.
