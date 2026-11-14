---
name: ui-audit-critique
description: "Review, critique, audit, polish, or harden user interfaces, dashboards, and landing pages. Use when asked to 'critique my UI', 'review design', 'audit layout', 'run pre-ship check', 'polish components', or 'harden UI for production'."
metadata:
  author: ui-ux-dashboard-skills
  version: "1.0.0"
---

# UI Audit & Critique Directive

This skill instructs AI coding agents on delivering executive-level design reviews, technical accessibility audits, and pre-ship quality verification. It provides structured rubrics that rank design defects by operational harm and enforce production standards.

---

## 1. Critique Commands & Workflows

When the user asks for a review, identify the appropriate command workflow:

| User Intent | Workflow | Reference Guide |
|---|---|---|
| *"Critique my UI / review design"* | Run 4-step heuristic critique (Verdict → Strengths → Ranked Harms → Code Fixes) | [`references/critique-rubric.md`](references/critique-rubric.md) |
| *"Audit layout / pre-ship check"* | Run 4-resolution inspection & technical a11y checklist | [`references/preship-checklist.md`](references/preship-checklist.md) |
| *"Polish components"* | Fine-tune typography tracking, add 2px card lifts, active button presses, and fix subtle border hairlines | [`../ui-design-taste/SKILL.md`](../ui-design-taste/SKILL.md) |
| *"Harden UI for production"* | Add loading skeletons, localized error retry cards, and unblocked paste handlers | [`../dashboard-design/references/states-and-density.md`](../dashboard-design/references/states-and-density.md) |

---

## 2. Core Heuristic Hierarchy

When reviewing any screen, always rank findings in order of operational harm:

```
P0: Honesty & Truth       ──►  Contradictory numbers, false percentages, wrong delta colors
P1: Salience & 3s Rule    ──►  Does the primary question get answered immediately?
P2: Visual Hierarchy      ──►  Competing titles, broken alignment, unbalanced bento cards
P3: Typography & Data     ──►  Missing tabular-nums, loose tracking, contrast violations (<4.5:1)
P4: Component Smells      ──►  Generic 3-column AI cards, purple gradient clichés, walls of text
P5: Polish & Interactions ──►  Missing 2px lift, missing active press, presence of transition: all
```

---

## 3. Prescribed Review Output

Always structure your critique using the format defined in [`references/critique-rubric.md`](references/critique-rubric.md):
1. **The Verdict:** 1 crisp, plain line.
2. **What Works:** 2–4 concrete positives.
3. **Ranked Issues:** Ordered strictly from P0 down to P5.
4. **Actionable Code Replacements:** High-signal diffs with `file:line` locations.
