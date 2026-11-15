# Architecture & System Design

> **Overview:** This document outlines the architectural philosophy, folder organization, multi-agent dispatch mechanisms, and technical standards governing the UI/UX & Dashboard Design Skills Suite.

---

## 1. High-Level Architecture Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                        AI Coding Agent Entry                           │
│     (Claude Code, Antigravity, Cursor, Copilot, Codex, Windsurf)       │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Reads
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   Universal Router (`AGENTS.md`)                       │
│    - Surface Classification (Persuade | Operate | Read | Experience)   │
│    - Intent Routing Matrix                                             │
│    - The 7 Non-Negotiable Golden Rules                                 │
└───────┬──────────────┬──────────────┬──────────────┬───────────────────┘
        │              │              │              │
        ▼              ▼              ▼              ▼
┌──────────────┐┌──────────────┐┌──────────────┐┌──────────────┐┌──────────────┐
│ui-design-    ││dashboard-    ││web-interface-││design-tokens-││ui-audit-     │
│taste/        ││design/       ││guidelines/   ││system/       ││critique/     │
│              ││              ││              ││              ││              │
│• Anti-slop   ││• Monitor Loop││• WCAG AA/AAA ││• DESIGN.md   ││• Heuristic   │
│• Typography  ││• Honest Del- ││• :focus-vis- ││• Linear Dark ││  Rubric (P0  │
│  scales      ││  tas (<5)    ││  ible rings  ││• Vercel Clean││  through P5) │
│• 2px Lifts & ││• Encoding    ││• Accessible  ││• Stripe Light││• Pre-ship QA │
│  Micro-inter-││  Ladder      ││  Forms (no   ││• Warm Editor-││  checklist   │
│  actions     ││• Tables &    ││  paste block)││  ial         ││  (4 resolu-  │
│              ││  Skeletons   ││• GPU Motion  ││              ││   tions)     │
└───────┬──────┘└──────┬───────┘└──────┬───────┘└──────────────┘└──────────────┘
        │              │               │
        └──────────────┼───────────────┘
                       │ References
                       ▼
┌────────────────────────────────────────────────────────────────────────┐
│             Production Component Snippets (`snippets/`)                │
│    • `kpi-card.tsx`          • `bullet-graph.tsx`                      │
│    • `date-range-filter.tsx` • `data-table.tsx`                        │
│    • `skeleton-states.tsx`                                             │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Directory Structure Breakdown

```
ui-ux-dashboard-skills/
├── AGENTS.md                  # Master brain router for all agent frameworks
├── README.md                  # Developer and user storefront documentation
├── ARCHITECTURE.md            # System architecture and mental model (this file)
├── CONTRIBUTING.md            # Guidelines for open-source contributors
├── CODE_OF_CONDUCT.md         # Community standards (Contributor Covenant 2.1)
├── SECURITY.md                # Vulnerability disclosure policy
├── CHANGELOG.md               # Version history and release notes
├── LICENSE                    # MIT open-source license
├── package.json               # NPM package manifest & CLI configuration
├── .gitignore                 # Secrets and build artifact exclusions
│
├── bin/
│   └── cli.js                 # Zero-dependency, cross-platform NPX installer
│
├── setup.ps1                  # PowerShell installer for Windows environments
├── setup.sh                   # Bash installer for macOS and Linux environments
│
├── skills/                    # Standard Agent Skills (agentskills.io spec)
│   ├── ui-design-taste/       # Art direction, typography, and anti-slop rules
│   ├── dashboard-design/      # Operational metrics, tables, and honesty rules
│   ├── web-interface-guidelines/ # WCAG accessibility, focus, and form ergonomics
│   ├── design-tokens-system/  # DESIGN.md token parser and 4 brand presets
│   ├── apple-design/          # Apple fluid interfaces, spring physics & WWDC motion
│   ├── unslop/                # Damir Sokolovsky's 9-pass anti-slop redline system
│   └── ui-audit-critique/     # Critique rubrics and pre-ship verification passes
│
└── snippets/                  # Battle-tested React + Tailwind component patterns
    ├── kpi-card.tsx           # Honest metric tile with sparkline & baseline
    ├── bullet-graph.tsx       # Target vs actual visual bar (Stephen Few)
    ├── date-range-filter.tsx  # Date picker and live freshness indicator
    ├── data-table.tsx         # Data-dense table with sticky blur header
    └── skeleton-states.tsx    # Zero-CLS skeletons and localized error cards
```

---

## 3. Multi-Agent Interoperability

Different AI coding harnesses expect instructions in distinct file paths. The system unifies them through an automated projection layer:

| AI Harness | Projected Location | Mechanism |
|---|---|---|
| **Universal / Codex** | `<project>/AGENTS.md` | Root router file specifying the 7 non-negotiable golden rules. |
| **Claude Code** | `<project>/.claude/skills/` & `CLAUDE.md` | Native skill directories + `@AGENTS.md` directive in `CLAUDE.md`. |
| **Google Antigravity** | `<project>/.gemini/skills/` & `.agent/skills/` | Standard `SKILL.md` skill discovery directories. |
| **Cursor / Windsurf** | `<project>/.cursor/rules/ui-ux-design-suite.mdc` | MDC frontmatter rule targeting all frontend extensions (`tsx`, `jsx`, `vue`, etc.). |
| **GitHub Copilot** | `<project>/.github/copilot-instructions.md` | Global prompt instructions referencing `AGENTS.md`. |

---

## 4. Design Tenets & Component Strategy

1. **Wordless Data Principle:**  
   In operational interfaces, numbers, units, compact baselines, and sparklines lead. Paragraphs belong inside hover tooltips.
2. **Honesty Before Beauty:**  
   A dashboard must never mislead. Deltas invert color based on entity polarity (costs/latency = lower is better). Tiny sample sizes (<5) must never shout percentages.
3. **Compositor Animation Hygiene:**  
   All transitions animate only `transform` and `opacity`. `transition: all` is banned project-wide to protect CPU rendering threads.
4. **Accessible by Default:**  
   `:focus-visible` rings, unblocked paste, clickable `<label>` wrappers, and semantic elements (`<button>`, `<a>`) are mandatory across all generated UI code.
