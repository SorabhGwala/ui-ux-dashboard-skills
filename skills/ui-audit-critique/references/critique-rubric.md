# Senior UI/UX Critique Rubric & Scoring

> **Principle:** A great design critique is objective, structured, and ordered by operational harm. It never relies on vague comments like "make it pop." It identifies specific perceptual failures and prescribes exact remedies.

---

## 1. Critique Execution Format

Whenever an agent is asked to review, critique, or evaluate a UI design, output the review strictly in this 4-part structure:

### 1. The One-Line Verdict
A plain, direct evaluation without sugar-coating:
* *Example:* *"Clean visual rhythm and good typography, but fails the wordless rule and has misleading delta percentages."*

### 2. What Works (2 to 4 Specific Strengths)
Acknowledge effective design decisions with concrete evidence:
* *Example:* *"Good negative tracking on the 36px section titles; excellent sticky table header with subtle backdrop blur; crisp status badge hierarchy."*

### 3. Issues Ranked by Harm (Severity Hierarchy)

Never report issues randomly. Rank findings in this strict order:

| Severity Level | Category | What to Look For |
|---|---|---|
| **P0: Honesty & Truth** | Dishonest data, contradictory numbers, misleading percentages on tiny bases (<5), inverted delta colors (e.g. green on cost surge). |
| **P1: Salience & 3-Second Rule** | Does the eye land immediately on what requires action? Is the critical problem or primary CTA drowned out by decorative elements? |
| **P2: Visual Hierarchy & Flow** | Competing headlines, chaotic font sizes, broken alignment edges, awkward multi-column wrapping. |
| **P3: Typography & Data Legibility** | Missing `tabular-nums` on numbers, loose tracking on large headings, poor contrast ratios below WCAG AA (4.5:1). |
| **P4: Component Smells & Slop** | Predictable 3-column equal AI card grids, unstyled purple gradients, generic floating SVGs, walls of text under metrics. |
| **P5: Polish & Micro-Interactions** | Missing 2px hover lift, missing active button press, missing visible focus rings, presence of `transition: all`. |

### 4. Prescribed Code Fixes
List exact before-and-after replacements with `file:line` references.

---

## 2. Common Design Smells & Anti-Pattern Rubric

| Design Smell | Why it Fails | Required Fix |
|---|---|---|
| **Sentence under metric** | Fails the Wordless Principle; slows down executive scanning. | Move sentence into a hover tooltip; display only value + delta + baseline on card. |
| **Tiny base shouting -100%** | Misleads stakeholders when an event drops from 1 to 0. | Replace percentage with neutral grey text: `"was 1 last week"`. |
| **Green delta on rising latency** | Misleading polarity; higher latency is worse. | Invert delta color to red (`text-rose-600`). |
| **3 identical cards with centered icons** | Generic AI template look; communicates zero hierarchy. | Rebuild into an asymmetrical bento grid or show live interactive UI mocks. |
| **Button uses `outline: none`** | Destroys keyboard navigation for accessibility. | Replace with `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`. |
| **`transition: all` in CSS** | Triggers browser CPU layout reflows and stutter. | Enumerate properties: `transition: transform 180ms ease, opacity 180ms ease`. |
