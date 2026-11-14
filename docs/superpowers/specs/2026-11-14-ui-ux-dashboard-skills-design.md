# UI/UX & Dashboard Design Skills Suite — System Design

**Date:** 2026-11-14  
**Status:** Approved  
**Author:** AI Agent Assistant & Sorabh Gwala  
**Target Repository:** `D:\ui-ux-dashboard-skills`

---

## 1. Executive Summary & Purpose

The goal of this project is to build an expert-grade, production-ready, one-time setup suite of UI/UX and Dashboard Design skills. When any AI coding agent (Antigravity, Claude Code, Cursor, Copilot, Codex, Gemini CLI) is instructed to build, redesign, review, or polish an application or dashboard, pointing the agent to this repository provides immediate senior-level judgment.

It synthesizes best practices from 5 leading references:
1. **`vercel-labs/agent-skills` (`web-design-guidelines`)**: Web interface accessibility, semantic markup, focus management, and animation safety.
2. **`Leonxlnx/taste-skill` (`design-taste-frontend`)**: Art direction, anti-slop guidelines, real UI mocks, and layout variety.
3. **`abdiraimov-otabek/dashboard-design-skill`**: Data visualization, monitor loops, honesty rules, wordless dashboards, and Stephen Few/Edward Tufte encoding ladders.
4. **`VoltAgent/awesome-design-md`**: The `DESIGN.md` markdown design system token specification.
5. **`pbakaus/impeccable`**: Design director commands (`critique`, `audit`, `polish`, `harden`), surface modes, and quality floors.

---

## 2. Directory Architecture

```
ui-ux-dashboard-skills/
├── README.md                          # Human-facing master documentation & usage guide
├── AGENTS.md                          # Global agent instructions, intent routing, and triggers
│
├── skills/
│   ├── ui-design-taste/               # Skill 1: Senior Frontend Taste & Anti-Slop
│   │   ├── SKILL.md                   # Core skill specification
│   │   └── references/
│   │       ├── anti-slop-rules.md     # Banned clichés, layout diversity rules
│   │       ├── typography-layout.md   # Scale, rhythm, font pairings, visual hierarchy
│   │       └── micro-interactions.md  # Lift, zoom, press, and motion constraints
│   │
│   ├── dashboard-design/              # Skill 2: Production Dashboard Architecture
│   │   ├── SKILL.md                   # Core dashboard engineering rules
│   │   └── references/
│   │       ├── kpi-metrics.md         # KPI tiles, sparklines, deltas & small-base handling
│   │       ├── chart-encoding.md      # Visual encoding ladder (position, length, color)
│   │       ├── data-tables.md         # Tabular data, sorting, sticky headers, filters
│   │       └── states-and-density.md  # Empty, loading skeletons, error, & density toggles
│   │
│   ├── web-interface-guidelines/      # Skill 3: Web Quality & Accessibility (Vercel-Grade)
│   │   ├── SKILL.md                   # Technical accessibility & usability rules
│   │   └── references/
│   │       ├── a11y-checklist.md      # Semantic HTML, ARIA, focus-visible, keyboard navigation
│   │       └── forms-and-motion.md    # Unblocked paste, inputmode, and reduced-motion rules
│   │
│   ├── design-tokens-system/          # Skill 4: DESIGN.md Specification & Brand Presets
│   │   ├── SKILL.md                   # How agents extract or apply DESIGN.md
│   │   └── presets/
│   │       ├── linear-dark.md         # High-density dark mode design system
│   │       ├── vercel-clean.md        # Crisp monochrome with high-contrast typography
│   │       ├── stripe-enterprise.md   # Accessible light theme with vibrant accenting
│   │       └── warm-editorial.md      # Magazine/warm cream canvas design system
│   │
│   └── ui-audit-critique/             # Skill 5: Evaluation & Pre-Ship QA
│       ├── SKILL.md                   # Critique and audit command playbook
│       └── references/
│           ├── critique-rubric.md     # Honesty, hierarchy, salience, and polish evaluation
│           └── preship-checklist.md   # Final pre-commit screenshot & fidelity checks
│
├── setup.ps1                          # Windows PowerShell setup & symlinker
└── setup.sh                           # Unix/macOS shell setup & symlinker
```

---

## 3. Detailed Skills Specification

### Skill 1: `ui-design-taste`
* **Trigger:** When building landing pages, marketing websites, web apps, or when requested to eliminate "AI-looking" UI slop.
* **Core Tenets:**
  - **Anti-Slop:** Ban default purple-to-blue gradients, uninspired 3-column equal-width feature grids, floating generic icons, and fake stock illustrations.
  - **Surface Modes:** Classify work into *Persuade* (landing/marketing), *Operate* (apps/tools/dashboards), *Read* (docs/guides), or *Experience* (portfolios/creative).
  - **Realism:** Use realistic product UI mocks (e.g. realistic diffs, actual schema trees, true tabular metrics) instead of placeholder cards.
  - **Micro-Interactions:** Subtle hover lifts (2px), image zoom inside container (1.02–1.03x), snappy button press transitions, restrained motion.
  - **Content Density & Rhythm:** Strict word budgets, 1 dominant action per screen, balanced content margins.

### Skill 2: `dashboard-design`
* **Trigger:** When designing, building, or critiquing an analytics dashboard, metric display, admin panel, or data-dense interface.
* **Core Tenets:**
  - **3-Second First Glance Rule:** The dashboard must answer the primary operational question within 3 seconds without hovering.
  - **Monitor Loop:** *Overview → What needs attention → Closer look → Act*. Every problem detected has an inline action beside it.
  - **Wordless Rule:** Numbers, units, compact deltas, and 1–2 word baselines on screen. Zero narrative sentences outside tooltips and empty states.
  - **Honesty Rule:** Numbers agree across all cards; small sample sizes (<5) never shout extreme percentages like `-100%`; deltas invert polarity for lower-is-better metrics (churn, latency, costs).
  - **Visual Encoding Ladder:** Use position/length for quantitative values; bullet graphs for targets; sparklines for trends; heatmaps only for 2D density; avoid pie charts.
  - **Comprehensive States:** Dedicated designs for Loading Skeleton, Stale Data, Empty State, Error State, and Tiny Sample Data.

### Skill 3: `web-interface-guidelines`
* **Trigger:** When implementing frontend components, forms, navigation, or auditing UI for accessibility and usability.
* **Core Tenets:**
  - **Accessibility (a11y):** Full WCAG AA/AAA compliance, semantic HTML (`<button>`, `<a>`, `<nav>`, `<table>`), ARIA labels for icon-only actions, polite live regions for async notifications.
  - **Focus & Keyboard Navigation:** Explicit `:focus-visible` rings, never `outline: none` without focus replacement, group focus with `:focus-within`, trap focus in modals.
  - **Form Ergonomics:** Clickable labels (`htmlFor`), explicit input `type` and `inputmode`, `autocomplete` tags, zero blocked pastes (`preventDefault` on paste is forbidden), inline error messages.
  - **Performance & Motion:** No `transition: all`, animate only GPU-accelerated `transform` and `opacity`, strict `prefers-reduced-motion` fallbacks.

### Skill 4: `design-tokens-system`
* **Trigger:** When defining a design system, extracting tokens from existing code, or applying a polished aesthetic world to a project.
* **Core Tenets:**
  - Standardized `DESIGN.md` specification parser and generator.
  - Semantic color palette definitions (canvas, surface, ink, muted, hairline, primary, accent, semantic states).
  - Strict typographic scales (font families, sizes, line heights, letter-spacing, font weights).
  - Pre-built battle-tested presets:
    1. *Linear Dark*: High-contrast developer-first dark mode.
    2. *Vercel Clean*: Minimalist monochrome with geometric precision.
    3. *Stripe Enterprise*: Vibrant, accessible light mode with crisp borders and soft shadows.
    4. *Warm Editorial*: Magazine aesthetic with warm cream canvas (`#f7f7f4`) and elegant serif/sans combinations.

### Skill 5: `ui-audit-critique`
* **Trigger:** When reviewing UI code, evaluating mockups, critiquing layouts, or performing pre-ship verification.
* **Core Tenets:**
  - **Critique Format:**
    1. One-line plain verdict.
    2. 2–4 specific elements that work.
    3. Ranked issues: Honesty → Salience (does the eye land on what matters?) → Visual Hierarchy → Text Density → Component Smells → Polish.
  - **Pre-Ship QA:** Strict verification checklist (layout responsiveness at 1440px, 1024px, 768px, 390px, contrast ratios, keyboard accessibility, console errors).

---

## 4. Agent Routing & Integration (`AGENTS.md`)

`AGENTS.md` in the project root serves as the master brain router. When an agent opens this workspace or links it into their project:
- If prompt relates to visual design/landing page -> routes to `ui-design-taste`.
- If prompt relates to metrics/analytics/admin -> routes to `dashboard-design`.
- If prompt relates to accessibility/forms/compliance -> routes to `web-interface-guidelines`.
- If prompt relates to themes/colors/design systems -> routes to `design-tokens-system`.
- If prompt relates to code review/audit/critique -> routes to `ui-audit-critique`.

---

## 5. Verification & Testing Strategy

Each skill will be validated using:
1. Standard Agent Skills specification compliance (YAML frontmatter with valid `name` and triggering `description`).
2. Concrete test prompts evaluated against each skill's rules to ensure no ambiguities or contradictory advice.
3. Git versioning with incremental, clean commits for each skill module.
