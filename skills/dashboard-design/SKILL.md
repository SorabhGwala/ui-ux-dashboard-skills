---
name: dashboard-design
description: "Clean, honest dashboard UI for web and applications — KPI cards, charts, bullet graphs, comparison periods, data tables, date range filters, empty and loading states, and density rules. Use when building, redesigning, or critiquing an analytics, revenue, metrics, SaaS, or admin dashboard."
metadata:
  author: ui-ux-dashboard-skills
  version: "1.0.0"
---

# Production Dashboard Engineering

This skill instructs coding agents on building and critiquing executive-grade, honest, and high-density operational dashboards. Grounded in the foundational research of Stephen Few, Edward Tufte, and Cleveland & McGill, it guarantees that interfaces answer critical operational questions at a glance.

---

## 1. The 4 Operational Laws

1. **The 3-Second First Glance Rule:**  
   The primary question of the dashboard (*"Is the system healthy?"*, *"Are revenue targets met?"*) must be answered within 3 seconds of scanning, without hovering, clicking, or calculating in your head.
2. **The Monitor Loop:**  
   Users monitor software in a four-stage cognitive loop:  
   `Overview (KPIs)` ──► `What needs attention (Alerts/Outliers)` ──► `Closer look (Charts/Breakdowns)` ──► `Act (Inline Button)`.  
   Every detected problem must have its corresponding remediation action located directly beside it.
3. **The Wordless Principle:**  
   Zero explanatory sentences outside of tooltips and empty states. On-screen real estate belongs to numbers, units, compact baselines, and sparklines. Any paragraph-length explanation must live inside a hover tooltip.
4. **Data Honesty:**  
   Never calculate misleading percentage swings on tiny bases (e.g. -100% when dropping from 1 to 0). Flip delta colors for inverted metrics (lower is better for churn, latency, and cloud costs).

---

## 2. Layout & Visual Hierarchy

Structure every dashboard screen along this strict vertical hierarchy:

```
┌────────────────────────────────────────────────────────────────────────┐
│ HEADER: Page Title, Date Range Popover, Global Filter Chips, Actions  │
├────────────────────────────────────────────────────────────────────────┤
│ KPI ROW: 3 to 5 Primary Metric Tiles (Value, Baseline, Sparkline)      │
├────────────────────────────────────────────────────────────────────────┤
│ MAIN MONITOR VIEW: Primary operational chart or priority alert matrix  │
├────────────────────────────────────────────────────────────────────────┤
│ BREAKDOWN GRID: 2-column or 3-column category comparisons (Bullet bars)│
├────────────────────────────────────────────────────────────────────────┤
│ DETAIL LEDGER: Sortable, high-density data table with pagination       │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Sub-Topic Reference Guides

Before building or refactoring specific dashboard widgets, consult the dedicated reference files:

* **Chart Selection & Perception:** [`references/chart-encoding.md`](references/chart-encoding.md)  
  *The Cleveland & McGill encoding ladder, when to use bullet graphs over gauges, sparklines, and banned chart types.*
* **KPI Tiles & Honesty Rules:** [`references/kpi-metrics.md`](references/kpi-metrics.md)  
  *KPI card anatomy, handling small bases (<5 events), polarity inversion (lower-is-better), and number formatting.*
* **Enterprise Data Tables:** [`references/data-tables.md`](references/data-tables.md)  
  *Column alignment standards, sticky headers, row density tiers, and soft tinted status badges.*
* **States & Density Architecture:** [`references/states-and-density.md`](references/states-and-density.md)  
  *The 5 essential states: Loaded, Loading Skeletons, Stale Data, Empty States, and Localized Error cards.*
