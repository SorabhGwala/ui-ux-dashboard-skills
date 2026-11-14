# UI/UX & Dashboard Design Skills Suite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, production-grade, multi-agent UI/UX and Dashboard Design skills suite in `D:\ui-ux-dashboard-skills` that equips any coding agent with senior-level design judgment.

**Architecture:** A modular skills suite conforming to the open Agent Skills (`SKILL.md`) specification, unified by a root `AGENTS.md` router, supported by deep domain references, brand design tokens, ready-to-use component snippets, and a universal multi-agent installer.

**Tech Stack:** Markdown (`SKILL.md`, `DESIGN.md`), Tailwind CSS / React component patterns, PowerShell (`setup.ps1`), Bash (`setup.sh`), Git.

## Global Constraints
- Every skill must have valid YAML frontmatter with `name` and triggering `description` (agentskills.io spec).
- Maximum frontmatter length: 1024 characters.
- Anti-slop rules, WCAG AA/AAA accessibility, and honest data visualization rules are non-negotiable.
- Code snippets must be production-ready (React + Tailwind CSS & accessible semantic HTML/CSS).
- Windows (`setup.ps1`) and macOS/Linux (`setup.sh`) compatibility for all scripts.

---

### Task 1: Root Architecture & Agent Routing (`AGENTS.md` & `README.md`)

**Files:**
- Create: `D:/ui-ux-dashboard-skills/README.md`
- Create: `D:/ui-ux-dashboard-skills/AGENTS.md`

**Interfaces:**
- Consumes: Design specification at `docs/superpowers/specs/2026-11-14-ui-ux-dashboard-skills-design.md`
- Produces: Global agent routing matrix and human-readable repository guide.

- [ ] **Step 1: Write `AGENTS.md`**
  Define the routing logic for any AI agent entering the workspace:
  - Surface classification (*Persuade*, *Operate*, *Read*, *Experience*).
  - Trigger mapping (which user request maps to which skill).
  - Golden rules (anti-slop, honesty, a11y first).
- [ ] **Step 2: Write `README.md`**
  Comprehensive guide for developers: installation instructions, folder structure, agent integration commands (`npx skills`, Claude Code plugin, Cursor rules).
- [ ] **Step 3: Verify and commit**
  Verify file presence and commit: `git commit -m "feat: add root AGENTS.md router and README.md"`.

---

### Task 2: Skill 1 — `ui-design-taste` (Senior Art Direction & Anti-Slop)

**Files:**
- Create: `skills/ui-design-taste/SKILL.md`
- Create: `skills/ui-design-taste/references/anti-slop-rules.md`
- Create: `skills/ui-design-taste/references/typography-layout.md`
- Create: `skills/ui-design-taste/references/micro-interactions.md`

**Interfaces:**
- Consumes: Lessons from `taste-skill` and `impeccable`.
- Produces: Complete instructions for eliminating generic AI layouts and enforcing senior art direction.

- [ ] **Step 1: Write `anti-slop-rules.md`**
  Banned patterns (generic 3-column card grids, default purple gradients, fake AI illustrations, empty marketing jargon). Required alternatives (asymmetric layouts, editorial hero sections, real product UI mocks).
- [ ] **Step 2: Write `typography-layout.md`**
  Scale ratios, line-height rhythm, font pairings (editorial serif + sans, grotesque sans + mono), word counts per viewport (60–80 words), whitespace balancing.
- [ ] **Step 3: Write `micro-interactions.md`**
  Refined hover physics: 2px card lift, 1.02–1.03x container-bounded photo zoom, active button press states, focus rings, restrained spring animations.
- [ ] **Step 4: Write `skills/ui-design-taste/SKILL.md`**
  Agent skill definition with YAML frontmatter, execution workflows, and routing to reference files.
- [ ] **Step 5: Verify and commit**
  Validate YAML frontmatter and commit: `git commit -m "feat(skills): add ui-design-taste skill and references"`.

---

### Task 3: Skill 2 — `dashboard-design` (Production Dashboard Architecture)

**Files:**
- Create: `skills/dashboard-design/SKILL.md`
- Create: `skills/dashboard-design/references/kpi-metrics.md`
- Create: `skills/dashboard-design/references/chart-encoding.md`
- Create: `skills/dashboard-design/references/data-tables.md`
- Create: `skills/dashboard-design/references/states-and-density.md`

**Interfaces:**
- Consumes: Lessons from `abdiraimov-otabek/dashboard-design-skill` and Stephen Few / Edward Tufte principles.
- Produces: Expert data visualization and operational monitoring rules.

- [ ] **Step 1: Write `chart-encoding.md`**
  The Cleveland & McGill / Stephen Few encoding ladder: position on common scale > length > angle > area. When to use sparklines, bullet graphs, bar charts, heatmaps; when to ban pie charts.
- [ ] **Step 2: Write `kpi-metrics.md`**
  KPI card anatomy: label, primary tabular figure, comparison baseline ("vs last 30d"), polarity rules (lower is better for churn/latency), handling tiny bases (<5 data points without misleading percentages).
- [ ] **Step 3: Write `data-tables.md`**
  Enterprise tabular data rules: right-aligned numbers, sticky headers, subtle zebra rows, filter toolbar, inline status chips, responsive horizontal scroll with shadows.
- [ ] **Step 4: Write `states-and-density.md`**
  The 5 critical dashboard states: Loaded, Loading Skeleton, Stale Data, Error State, and Empty/Zero Data. Density switching (compact vs comfortable).
- [ ] **Step 5: Write `skills/dashboard-design/SKILL.md`**
  Master skill file with the 3-second First Glance rule, Monitor Loop, Wordless Rule, and Honesty Rule.
- [ ] **Step 6: Verify and commit**
  Validate YAML frontmatter and commit: `git commit -m "feat(skills): add dashboard-design skill and references"`.

---

### Task 4: Skill 3 — `web-interface-guidelines` (Vercel-Grade Quality & a11y)

**Files:**
- Create: `skills/web-interface-guidelines/SKILL.md`
- Create: `skills/web-interface-guidelines/references/a11y-checklist.md`
- Create: `skills/web-interface-guidelines/references/forms-and-motion.md`

**Interfaces:**
- Consumes: Vercel Web Interface Guidelines and WCAG specifications.
- Produces: Concrete, verifiable frontend engineering and accessibility checklist.

- [ ] **Step 1: Write `a11y-checklist.md`**
  WCAG AA standards: semantic tags (`<button>` vs `<a>`), icon `aria-label`, visible `:focus-visible` rings, heading hierarchy (`<h1>`-`<h6>`), keyboard tab-traps for modals, screen reader live regions.
- [ ] **Step 2: Write `forms-and-motion.md`**
  Zero blocked paste, input types and `inputmode`, inline validation errors, submit state spinners, `prefers-reduced-motion` compliance, banning `transition: all`.
- [ ] **Step 3: Write `skills/web-interface-guidelines/SKILL.md`**
  Agent skill definition for auditing and building accessible, robust web UI.
- [ ] **Step 4: Verify and commit**
  Validate YAML frontmatter and commit: `git commit -m "feat(skills): add web-interface-guidelines skill and references"`.

---

### Task 5: Skill 4 — `design-tokens-system` (`DESIGN.md` & Brand Presets)

**Files:**
- Create: `skills/design-tokens-system/SKILL.md`
- Create: `skills/design-tokens-system/presets/linear-dark.md`
- Create: `skills/design-tokens-system/presets/vercel-clean.md`
- Create: `skills/design-tokens-system/presets/stripe-enterprise.md`
- Create: `skills/design-tokens-system/presets/warm-editorial.md`

**Interfaces:**
- Consumes: VoltAgent `awesome-design-md` patterns.
- Produces: Standardized token structure and 4 battle-tested design system palettes.

- [ ] **Step 1: Write the 4 brand presets**
  1. `linear-dark.md`: High-contrast dark IDE aesthetic with subtle glowing borders.
  2. `vercel-clean.md`: Sharp black & white typography-first design system.
  3. `stripe-enterprise.md`: Vibrant, accessible SaaS light mode.
  4. `warm-editorial.md`: Warm cream canvas (`#f7f7f4`), deep ink, and refined typography.
- [ ] **Step 2: Write `skills/design-tokens-system/SKILL.md`**
  Instructions on how agents parse, generate, or apply a `DESIGN.md` token contract in any project.
- [ ] **Step 3: Verify and commit**
  Validate YAML frontmatter and commit: `git commit -m "feat(skills): add design-tokens-system skill and presets"`.

---

### Task 6: Skill 5 — `ui-audit-critique` (Review Rubrics & Pre-Ship QA)

**Files:**
- Create: `skills/ui-audit-critique/SKILL.md`
- Create: `skills/ui-audit-critique/references/critique-rubric.md`
- Create: `skills/ui-audit-critique/references/preship-checklist.md`

**Interfaces:**
- Consumes: Impeccable review rubrics and dashboard QA procedures.
- Produces: Structured, actionable design review commands (`critique`, `audit`, `polish`, `harden`).

- [ ] **Step 1: Write `critique-rubric.md`**
  Heuristic scoring framework: Honesty → Salience → Hierarchy → Typography & Spacing → Component Smells.
- [ ] **Step 2: Write `preship-checklist.md`**
  Pre-commit inspection: 1440px / 1024px / 768px / 390px responsive tests, contrast ratios, keyboard navigation test, zero console warnings.
- [ ] **Step 3: Write `skills/ui-audit-critique/SKILL.md`**
  Skill definition covering `/critique`, `/audit`, `/polish`, and `/harden` commands.
- [ ] **Step 4: Verify and commit**
  Validate YAML frontmatter and commit: `git commit -m "feat(skills): add ui-audit-critique skill and references"`.

---

### Task 7: Production Component Snippets (`snippets/`)

**Files:**
- Create: `snippets/kpi-card.tsx`
- Create: `snippets/bullet-graph.tsx`
- Create: `snippets/date-range-filter.tsx`
- Create: `snippets/data-table.tsx`
- Create: `snippets/skeleton-states.tsx`

**Interfaces:**
- Consumes: Design guidelines from Skills 1–4.
- Produces: Directly copy-pasteable React + Tailwind CSS code patterns for any agent to reference.

- [ ] **Step 1: Write `kpi-card.tsx` & `bullet-graph.tsx`**
- [ ] **Step 2: Write `date-range-filter.tsx` & `data-table.tsx`**
- [ ] **Step 3: Write `skeleton-states.tsx`**
- [ ] **Step 4: Verify and commit**
  Ensure TypeScript and Tailwind validity, commit: `git commit -m "feat(snippets): add production-grade dashboard component snippets"`.

---

### Task 8: Universal Multi-Agent Installer & Exporter (`setup.ps1` & `setup.sh`)

**Files:**
- Create: `setup.ps1`
- Create: `setup.sh`

**Interfaces:**
- Consumes: The complete `skills/` repository structure.
- Produces: One-line linking or copying into Claude Code, Antigravity, Cursor, Copilot, or Codex projects.

- [ ] **Step 1: Write `setup.ps1` (PowerShell for Windows)**
  Supports parameters `-TargetDir <path>`, `-Agent <all|claude|gemini|cursor|copilot>`, `-Mode <symlink|copy>`.
- [ ] **Step 2: Write `setup.sh` (Bash for macOS/Linux)**
  Identical functionality for POSIX environments.
- [ ] **Step 3: Test setup scripts and commit**
  Test execution in a temporary target directory, verify correct linking/copying, and commit: `git commit -m "feat(installer): add universal multi-agent setup scripts"`.

---

### Task 9: Final Suite Verification & Handoff

**Files:**
- Modify: `README.md`
- Modify: `AGENTS.md` (if needed for final touchups)

- [ ] **Step 1: Run comprehensive lint and validation on all SKILL.md files**
  Verify all YAML frontmatter tags (`name`, `description`), check character limits, verify file links.
- [ ] **Step 2: Final Git status check and commit**
- [ ] **Step 3: Present finished suite and usage examples to the user**
