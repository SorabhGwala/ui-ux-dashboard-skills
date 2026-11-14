---
name: web-interface-guidelines
description: "Review UI code for Web Interface Guidelines and WCAG compliance. Use when asked to audit accessibility, check keyboard navigation, inspect focus states, validate forms, review UX, or eliminate animation anti-patterns."
metadata:
  author: ui-ux-dashboard-skills
  version: "1.0.0"
---

# Web Interface Guidelines & Technical Accessibility

This skill enforces Vercel-grade Web Interface Guidelines and WCAG 2.1 AA/AAA accessibility standards. It guarantees that applications are navigable by keyboard, legible by screen readers, robust across form interactions, and performant on the GPU compositor.

---

## 1. Fast Compliance Audit Checklist

When reviewing or generating frontend components, evaluate against these 8 core checks:

1. **Semantic Roles:** Are actions using `<button>`, navigation using `<a href>`, and inputs using clickable `<label>`?
2. **Icon Buttons:** Does every icon-only button carry an explicit `aria-label`? Are decorative icons hidden with `aria-hidden="true"`?
3. **Focus Visibility:** Is every interactive element equipped with visible `:focus-visible:ring-*`? Has `outline: none` without focus replacement been eliminated?
4. **Keyboard Navigation:** Can the entire workflow be completed using `Tab`, `Enter`, `Space`, and `Escape`? Are modals focus-trapped?
5. **Form Ergonomics:** Is clipboard paste unblocked? Are correct `type`, `inputmode`, and `autocomplete` attributes specified?
6. **Error Association:** Are inline form validation errors connected via `aria-describedby` and `aria-invalid="true"`?
7. **Animation Hygiene:** Has `transition: all` been eliminated in favor of explicit properties (`transform`, `opacity`)?
8. **Reduced Motion:** Does the UI cleanly fall back under `@media (prefers-reduced-motion: reduce)`?

---

## 2. Reference Documentation

* **Accessibility, ARIA & Focus Management:** [`references/a11y-checklist.md`](references/a11y-checklist.md)  
  *Semantic HTML replacements, icon button labeling, skip-to-content links, modal focus traps, and aria-live regions.*
* **Form Ergonomics & Compositor Animations:** [`references/forms-and-motion.md`](references/forms-and-motion.md)  
  *Unblocked paste rules, virtual keyboard optimization, inline errors, banned `transition: all`, and GPU-accelerated motion.*

---

## 3. Audit Output Format

When auditing existing files, output findings in a high-signal, clickable `file:line` format:

```markdown
- path/to/Component.tsx:42: Missing `aria-label` on icon-only close button.
- path/to/LoginForm.tsx:18: Input uses `outline-none` without `:focus-visible` replacement.
- path/to/Navbar.tsx:85: Navigation action uses `<div onClick>` instead of `<Link href="...">`.
- path/to/Card.tsx:12: Uses `transition: all` instead of explicit properties.
```
