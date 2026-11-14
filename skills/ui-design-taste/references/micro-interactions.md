# Micro-Interactions & Feedback: The Tactile Physics of UI

> **Principle:** Micro-interactions give an interface a sense of physical weight and responsiveness. They must feel crisp, tactile, and quiet—never sluggish, bouncy, or gimmicky.

---

## 1. The Core Interaction Primitives

### 1. The 2px Card Lift
When hovering an interactive card (such as a link card, pricing tier, or clickable preview), lift the element by exactly 2px while subtly deepening its shadow:

```css
/* CSS */
.interactive-card {
  transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 180ms cubic-bezier(0.16, 1, 0.3, 1),
              border-color 180ms ease;
}
.interactive-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.08);
  border-color: rgba(0, 0, 0, 0.15);
}
```

```html
<!-- Tailwind Equivalent -->
<div class="transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-700">
  ...
</div>
```

### 2. Container-Bounded Photo Zoom
When an image card is hovered, zoom the image slightly (`1.02x` to `1.03x`) inside an `overflow-hidden` container. **Never** scale the entire card or bleed out of its frame:

```html
<div class="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
  <img 
    src="/product.jpg" 
    alt="Product interface" 
    class="w-full object-cover transition-transform duration-300 ease-out hover:scale-[1.03]"
  />
</div>
```

### 3. Tactile Button Press (Active State)
Buttons must provide immediate haptic visual feedback when clicked:
* Step down 1px or scale down by `0.98`:

```css
button:active {
  transform: scale(0.98) translateY(1px);
}
```

```html
<!-- Tailwind Equivalent -->
<button class="active:scale-[0.98] active:translate-y-[0.5px] transition-transform duration-75">
  Confirm Action
</button>
```

### 4. Interactive Cursor States
* Clickable elements: `cursor-pointer` (cards, buttons, custom tabs).
* Drag handles: `cursor-grab active:cursor-grabbing`.
* Disabled controls: `cursor-not-allowed opacity-50 select-none`.
* Non-interactive labels: `cursor-default select-none`.

---

## 2. Animation Timing & Easing Curves

1. **Short Durations:**
   - Hovers, presses, color changes: **150ms – 200ms**.
   - Modal entrances, drawer slides: **250ms – 300ms**.
   - Anything longer than 350ms feels laggy to power users.
2. **Snappy Easing:**
   - Use exponential decel curves: `cubic-bezier(0.16, 1, 0.3, 1)` or `cubic-bezier(0.2, 0.8, 0.2, 1)`.
   - Avoid linear easing for UI movement; linear feels mechanical and unnatural.
3. **Respect Reduced Motion:**
   Always include a reduced-motion fallback so users with vestibular motion disorders are protected:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
