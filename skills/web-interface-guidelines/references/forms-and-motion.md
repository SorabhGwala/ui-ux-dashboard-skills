# Form Ergonomics & Compositor Animation Guidelines

> **Principles:** Forms are where users complete their most critical objectives (signup, payment, configuration). Animations should enhance comprehension without causing browser layout reflows or motion sickness.

---

## 1. Form Usability & Standards

### 1. Never Block Clipboard Paste (Zero Tolerance)
* **The Crime:** Preventing users from pasting into password fields, email confirmation inputs, or credit card numbers using `e.preventDefault()` on paste events.
* **Why it fails:** It degrades security by breaking password managers (1Password, Bitwarden, Apple Keychain) and frustrates users.
* **The Rule:** Clipboard paste must always work.

### 2. Explicit Input Types & Virtual Keyboard Modes
Always declare the exact HTML input `type` and `inputmode` to trigger the optimal virtual keyboard on mobile devices:

| Input Field | `type` | `inputmode` | `autocomplete` | Extra Attribute |
|---|---|---|---|---|
| **Email Address** | `type="email"` | `inputmode="email"` | `autocomplete="email"` | `spellcheck="false"` |
| **Phone Number** | `type="tel"` | `inputmode="tel"` | `autocomplete="tel"` | — |
| **6-Digit 2FA Code** | `type="text"` | `inputmode="numeric"` | `autocomplete="one-time-code"` | `pattern="[0-9]*"` |
| **Monetary Amount** | `type="text"` | `inputmode="decimal"` | `autocomplete="off"` | — |
| **Website URL** | `type="url"` | `inputmode="url"` | `autocomplete="url"` | `spellcheck="false"` |
| **New Password** | `type="password"` | — | `autocomplete="new-password"` | — |

### 3. Clickable Labels & Hit Targets
* Every input **must** be tied to a label using matching `id` and `htmlFor`, or by wrapping the input inside `<label>`.
* Checkbox and Radio controls: The label text and the box must share a single unified clickable hit target (minimum 44x44px on touch devices) to eliminate dead clicking zones.

### 4. Inline Error Feedback
* Place error messages directly below the corresponding field.
* Associate the error message with the input using `aria-describedby="field-error"` and `aria-invalid="true"`.
* On submit failure, automatically move browser focus to the first invalid field so screen readers immediately announce what needs correction.

---

## 2. Animation & Motion Engineering

### 1. The Ban on `transition: all`
* **Why it's banned:** `transition: all` forces the browser engine to monitor every CSS property on the element, recalculating styles and frequently triggering expensive CPU layout reflows.
* **The Rule:** Always explicitly name the specific transitioned properties:
  ```css
  /* ❌ BANNED */
  transition: all 0.2s ease;

  /* ✅ CORRECT */
  transition: transform 180ms ease, opacity 180ms ease, border-color 180ms ease;
  ```

### 2. Compositor-Only Animations (GPU Acceleration)
* Animate only properties handled by the browser's GPU compositor thread:
  - `transform` (translates, scales, rotations)
  - `opacity`
* **Never** animate properties that trigger layout recalculation:
  - ❌ `top`, `left`, `right`, `bottom` (Use `transform: translate3d(...)` instead)
  - ❌ `width`, `height` (Use `transform: scale(...)` or CSS grid transition tricks)
  - ❌ `margin`, `padding`

### 3. Strict Reduced-Motion Fallback
Always provide an alternate zero-motion or subtle fade experience for users who configure `prefers-reduced-motion: reduce`:

```css
@media (prefers-reduced-motion: reduce) {
  .animated-banner,
  .slide-drawer,
  .hero-entrance {
    animation: none !important;
    transition: opacity 150ms ease !important;
    transform: none !important;
  }
}
```
