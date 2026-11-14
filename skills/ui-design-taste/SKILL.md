---
name: ui-design-taste
description: "Use when designing, building, or styling web pages, landing pages, marketing sites, or application UI, or when instructed to improve design taste, eliminate AI-looking slop, or refine layout aesthetics."
metadata:
  author: ui-ux-dashboard-skills
  version: "1.0.0"
---

# UI Design Taste & Anti-Slop Directive

This skill equips coding agents with executive art direction, strict anti-slop rules, and high-taste layout principles. It prevents the generation of generic "AI-template" web pages and enforces production-grade aesthetic execution.

---

## 1. Quick Decision Flow

When designing or modifying any user interface, run through this 4-step decision flow:

```
1. Identify Mode    ──>  Persuade (Landing) | Operate (App/Dashboard) | Read (Docs) | Experience (Portfolio)
2. Banish Slop      ──>  Check anti-slop-rules.md: No 3-column feature grids, no default purple gradients
3. Set Typography   ──>  Check typography-layout.md: Enforce negative tracking on headings, tight leading
4. Apply Physics    ──>  Check micro-interactions.md: 2px card lifts, 1.02x image zooms, active button presses
```

---

## 2. Core Directives

### 1. Reject the 3-Column Equal Card Grid
Whenever describing features or capabilities, do **not** generate 3 equal-width boxes with generic icons.
* Use **asymmetrical bento grids** (one large anchor feature spanning 2 columns, two smaller complementary items in column 3).
* Use **live product UI mocks** (an actual syntax-highlighted code diff, an authentic database table preview, or a working mini-calculator).
* For detailed rules, read: [`references/anti-slop-rules.md`](references/anti-slop-rules.md).

### 2. Typographic Authority
* **Headings (32px+):** Must always have negative letter-spacing (`tracking-tight` or `-0.025em`) and tight leading (`1.1` to `1.2`).
* **Micro-labels (10px–12px):** Must have positive letter-spacing (`tracking-wider` or `+0.05em`).
* **Ink Hierarchy:** Maintain three distinct ink levels (primary text, secondary body, and muted tertiary labels).
* For detailed scales and font pairings, read: [`references/typography-layout.md`](references/typography-layout.md).

### 3. Tactile Micro-Interactions
* Interactive cards lift by exactly **2px** on hover (`hover:-translate-y-0.5`).
* Photos zoom slightly (**1.02x**) inside an `overflow-hidden` container.
* Buttons compress on click (`active:scale-[0.98]`).
* All animations must respect `prefers-reduced-motion`.
* For physics specifications and CSS/Tailwind snippets, read: [`references/micro-interactions.md`](references/micro-interactions.md).

### 4. Word Budget & Layout Breathing Room
* **60–80 words per screen viewport** outside of live UI mocks. Eliminate fluffy marketing buzzwords.
* **One section per screen** at standard desktop (1440x900). Use generous vertical rhythm (`py-24` to `py-32`).
* **Equal left and right alignment edges** across all sections.

---

## 3. Sub-Command Playbooks

* `polish`: Review existing UI code, remove awkward spacing, fix loose heading tracking, and add tactile micro-interactions.
* `bolder`: Replace timid grey-on-grey layouts with high-contrast typography, crisp borders, and authoritative hero sections.
* `quieter`: Tone down hyperactive gradients, excessive floating animations, or cluttered layouts into restrained, calm interfaces.
