# Accessibility (a11y) & Semantic HTML Checklist

> **Standard:** WCAG 2.1 AA / AAA Compliance and Vercel Web Interface Guidelines. Accessibility is not an afterthought or an optional feature—it is foundational engineering quality.

---

## 1. Semantic Elements vs Generic Divs

| Purpose | Correct HTML | Anti-Pattern (Banned) | Rationale |
|---|---|---|---|
| **User Action / Trigger** | `<button type="button">` | `<div onClick={...}>` | Buttons natively support keyboard triggers (`Enter`, `Space`) and screen reader roles. |
| **URL Navigation** | `<a href="...">` or `<Link>` | `<button onClick={() => router.push(...)}>` | Links support browser native right-click, opening in new tabs, and search crawler indexing. |
| **Form Input Label** | `<label htmlFor="email">` | `<span class="label">Email</span>` | Clicking a real `<label>` focuses the input; assistive tech announces the label. |
| **Main Content Container** | `<main id="main-content">` | `<div class="content">` | Allows screen readers to jump directly to primary content via skip links. |
| **Tabular Data** | `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>` | Nested `<div>` grids for data tables | Tables provide built-in row/column header associations for assistive tech. |

---

## 2. Accessible Icon Buttons & Decorative SVGs

1. **Icon-Only Buttons (Mandatory `aria-label`):**  
   Whenever an interactive button contains only an icon without visible text, it **must** carry an `aria-label`:
   ```html
   <!-- ✅ CORRECT -->
   <button type="button" aria-label="Close modal dialog" class="p-2 rounded-lg hover:bg-neutral-100">
     <XIcon class="w-5 h-5" aria-hidden="true" />
   </button>

   <!-- ❌ BANNED -->
   <button type="button" class="p-2">
     <XIcon class="w-5 h-5" />
   </button>
   ```
2. **Decorative Icons (`aria-hidden="true"`):**  
   If an icon accompanies visible text (e.g., a "Download PDF" button with a download icon), hide the icon from screen readers to prevent redundant announcements:
   ```html
   <button type="button" class="inline-flex items-center gap-2">
     <DownloadIcon class="w-4 h-4" aria-hidden="true" />
     <span>Download Report</span>
   </button>
   ```

---

## 3. Focus Management & Keyboard Navigation

1. **The Focus Ring Contract:**
   - **Never** write `outline: none` or `outline-none` without an explicit focus replacement!
   - Use `:focus-visible` rather than `:focus` so mouse clicks don't leave permanent rings, while keyboard `Tab` navigation displays a sharp ring:
   ```css
   /* CSS */
   button:focus-visible {
     outline: 2px solid #2563eb;
     outline-offset: 2px;
   }
   ```
   ```html
   <!-- Tailwind Equivalent -->
   <button class="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
   ```
2. **Modal Dialog Focus Traps:**
   - When a modal opens: Focus automatically moves to the first interactive element or dialog container.
   - While modal is open: Pressing `Tab` cycles only within modal elements (never escapes to the background page).
   - Pressing `Escape` closes the modal.
   - When modal closes: Focus is restored to the trigger button that opened it.
3. **Skip-to-Content Link:**
   Every web application must provide a hidden skip link at the top of the body that becomes visible on keyboard focus:
   ```html
   <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md shadow-lg">
     Skip to main content
   </a>
   ```

---

## 4. Live Regions for Async Notifications

When dynamic data updates asynchronously (e.g. form validation errors, toast notifications, real-time counters), wrap the notification in an `aria-live` region so screen readers announce it:
```html
<!-- For non-urgent status updates (toasts, save confirmations) -->
<div aria-live="polite" role="status">
  Changes saved automatically.
</div>

<!-- For urgent error alerts -->
<div aria-live="assertive" role="alert">
  Network connection lost. Please check your internet.
</div>
```
