# Dashboard States & Density Architecture

> **Principle:** A dashboard is not finished when it looks good with perfect fixture data. It must be resilient across all operational states: loading, network degradation, partial failures, and zero-data scenarios.

---

## 1. The 5 Essential Dashboard States

Every widget, KPI card, and data table must have a designed implementation for these 5 states:

```
1. Loaded State    ──►  Live data, active timestamps, full interactivity
2. Loading State   ──►  Layout-matching pulse skeletons (no generic full-page spinners)
3. Stale State     ──►  Previous data visible at 70% opacity while background refetches
4. Empty State     ──►  Clear explanation + primary action button to get started
5. Error State     ──►  Localized failure card with error message and inline "Retry" button
```

---

## 2. Skeleton Loading Best Practices

1. **Mirror the Final Geometry:** Skeletons must match the exact dimensions, borders, and margins of the loaded component to eliminate Content Layout Shift (CLS).
2. **Skeleton Tone:**
   - Light Mode: `bg-neutral-200/80 dark:bg-neutral-800` with subtle pulse animation (`animate-pulse`).
   - Dark Mode: `bg-white/[0.06]`.
3. **Skeleton Hierarchy:**
   - Card title: narrow block (`w-24 h-3.5 rounded`).
   - Value: bold block (`w-36 h-8 rounded-md mt-2`).
   - Sparkline: grey gradient block (`w-full h-8 rounded mt-3`).

```html
<!-- Example KPI Card Skeleton -->
<div class="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 animate-pulse">
  <div class="h-3 w-24 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
  <div class="h-8 w-36 bg-neutral-200 dark:bg-neutral-800 rounded mt-3"></div>
  <div class="h-6 w-full bg-neutral-100 dark:bg-neutral-800/50 rounded mt-4"></div>
</div>
```

---

## 3. Localized Error Containment (Fail Gracefully)

* **Never blank the entire dashboard:** If the "Billing Metrics" API times out, only the Billing card should display an error state. The rest of the dashboard (Traffic, Server Status, User Logins) must continue operating normally.
* **Error Card Anatomy:**
  - Red/amber alert icon.
  - Plain, non-cryptic error message (e.g. *"Unable to load billing data"*).
  - Explicit inline action: a ghost button with a reload icon and label `"Retry"`.

---

## 4. Honest Empty States

When a user opens a brand new dashboard or applies a filter that matches zero rows:
1. **Never display a desolate blank grid:** An empty white box makes users think the app is broken.
2. **Anatomy of an Empty State:**
   - Friendly icon or subtle illustration related to the domain.
   - Clear title: *"No transactions found in this date range"*.
   - Subtitle explaining the resolution: *"Try adjusting your filter parameters or select a wider time window."*
   - Action Button (if actionable): `"Clear Filters"` or `"Import CSV"`.
