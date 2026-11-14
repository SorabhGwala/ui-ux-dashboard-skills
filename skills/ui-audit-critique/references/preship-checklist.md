# Pre-Ship UI Verification & Quality Checklist

> **Directive:** Run this checklist before declaring any frontend component, dashboard, or landing page complete. Evidence before assertions: verify every point on live code or rendered screenshots.

---

## 1. Multi-Resolution Responsive Pass

Verify layout integrity at the 4 canonical viewport breakpoints:

- [ ] **1440px Desktop:**
  - Hero section claims its full viewport without the next section peeking awkwardly.
  - Max container width is respected with equal left and right margins.
  - Multi-column bento grids maintain proportional visual balance.
- [ ] **1024px Tablet Landscape:**
  - 3-column layouts gracefully collapse to 2-column or structured 1+2 bento rows.
  - Navigation links remain visible without wrapping onto 2 lines.
- [ ] **768px Tablet Portrait:**
  - Desktop nav links collapse into an accessible drawer or mobile menu button.
  - Wide data tables display a subtle horizontal scroll indicator.
- [ ] **390px Mobile:**
  - All interactive tap targets (buttons, links, inputs) are at least `44x44px`.
  - Body text is at least `14px` (prevents iOS auto-zoom on input focus).
  - No accidental horizontal page overflow (page cannot be dragged left/right).

---

## 2. Technical Quality & Accessibility (WCAG AA)

- [ ] **Visible Focus Rings:** Every button, link, and input exhibits a distinct `:focus-visible` ring on keyboard navigation. No unreplaced `outline: none`.
- [ ] **Screen Reader Labels:** All icon-only buttons carry descriptive `aria-label` tags.
- [ ] **Form Ergonomics:**
  - Clipboard paste is unblocked (`onPaste` does not prevent default).
  - Every `<input>` is linked to a `<label>` via `htmlFor`.
  - Appropriate `type` and `inputmode` are set for virtual keyboards.
- [ ] **Contrast Ratios:** Text color contrast passes WCAG AA (minimum 4.5:1 for body copy; 3:1 for large display titles).

---

## 3. Compositor & Animation Hygiene

- [ ] **No `transition: all`:** Every CSS transition explicitly lists transitioned properties (`transform`, `opacity`, `colors`).
- [ ] **GPU Compositor Only:** Only `transform` and `opacity` are animated. No transitions on `top`, `left`, `width`, `height`, or `margin`.
- [ ] **Reduced Motion:** Verified that all animations fall back gracefully under `@media (prefers-reduced-motion: reduce)`.

---

## 4. Dashboard Data Honesty (If Applicable)

- [ ] **Zero Explanatory Sentences:** No paragraph text under metric numbers or in card bodies. Explanations reside in hover tooltips.
- [ ] **Small Base Numbers:** No baseline under 5 displays percentage deltas. Uses `"was X last period"` in neutral grey.
- [ ] **Inverted Metric Polarity:** Churn, error rates, latencies, and costs show red on increase (`▲`) and green on decrease (`▼`).
- [ ] **Tabular Numerals:** All metric numbers, table figures, and timestamps use `font-variant-numeric: tabular-nums`.
- [ ] **Skeleton Resilience:** Skeleton loading cards match the exact geometry of the loaded component to eliminate Content Layout Shift (CLS).
