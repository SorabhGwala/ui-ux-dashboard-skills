# Data Tables: High-Density Tabular Information Architecture

> **Principle:** Data tables are the operational workhorse of business applications. A great table balances high information density with effortless visual scanability.

---

## 1. Column Alignment Rules (Non-Negotiable)

The human eye scans different data types differently. Follow these alignment rules without exception:

| Data Type | Column Alignment | Formatting Rule | Example |
|---|---|---|---|
| **Text / Names / Titles** | **Left-aligned** (`text-left`) | Sentence case, truncated with ellipsis if exceeding max width | `Jane Cooper`, `Production Cluster 01` |
| **Numeric / Currency / Quantities** | **Right-aligned** (`text-right`) | `tabular-nums`, identical decimal precision | `$1,240.50`, `94.2%`, `18,400` |
| **Dates / Timestamps** | **Right or Left** (consistent) | Monospace or tabular figures, ISO or standard format | `2026-11-14 18:30`, `14 Nov 2026` |
| **Status Badges / Chips** | **Left or Center** | Soft tinted background + solid indicator dot | `● Active`, `● Degraded` |
| **Row Actions (Menu / Edit)** | **Right-aligned** (`text-right`) | Ghost button or 3-dots icon button | `[ ... ]` or `View →` |

---

## 2. Table Header & Scrolling Ergonomics

1. **Sticky Header with Backdrop Blur:**
   Table headers must stick to the top during vertical scrolling so columns remain identifiable:
   ```html
   <thead class="sticky top-0 z-10 bg-white/90 dark:bg-neutral-900/90 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
     <tr>
       <th class="text-xs font-semibold uppercase tracking-wider text-neutral-500 py-3 px-4 text-left">Customer</th>
       <th class="text-xs font-semibold uppercase tracking-wider text-neutral-500 py-3 px-4 text-right">ARR</th>
       ...
     </tr>
   </thead>
   ```
2. **Horizontal Scroll Cues:**
   When a table overflows on smaller screens, wrap it in a container with a subtle shadow indicator on the right edge so users know more data exists off-screen.
3. **Sort Indicators:**
   Always show an active sort glyph (`▲` or `▼`) on the sorted column header, and subtle dual-arrows (`⇅`) on hover for sortable columns.

---

## 3. Density Tiers

Support or configure appropriate row heights based on application needs:

* **Compact Density (Row height `36px–40px`):** Best for log streams, financial ledgers, and IT operations monitoring where maximizing rows on screen is vital.
* **Standard Density (Row height `48px–52px`):** Default for business SaaS, billing tables, and CRM contact lists.
* **Comfortable Density (Row height `56px–64px`):** Best when rows contain multi-line info (e.g. user avatar + name + email in one cell).

---

## 4. Status Badges & Chips

Never use raw saturated primary colors for table status chips. Use soft tinted pills with high-contrast text and a solid 6px dot:

```html
<!-- Success / Healthy Status -->
<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
  Active
</span>

<!-- Warning / Degraded Status -->
<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
  Pending
</span>

<!-- Critical / Error Status -->
<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
  <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
  Failed
</span>
```
