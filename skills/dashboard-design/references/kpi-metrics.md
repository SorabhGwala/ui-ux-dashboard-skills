# KPI Metrics & Tiles: The Rules of Data Honesty

> **Principle:** A KPI card is the highest-visibility element on an executive dashboard. It must convey the truth immediately without sensationalism, misleading percentage shifts, or visual clutter.

---

## 1. Anatomy of an Honest KPI Card

Every KPI tile should follow this four-part vertical structure:

```
┌────────────────────────────────────────────────────────┐
│ TOTAL REVENUE                             [ ↗ Icon ]   │  ← 1. Clear label (11-12px, muted)
│ $128,450                                               │  ← 2. Big tabular figure (28-32px, tabular-nums)
│ ┌────────────────────────────────────────────────────┐ │
│ │  ~/\_/\~~/\_                                       │ │  ← 3. Compact sparkline (28-32px height)
│ └────────────────────────────────────────────────────┘ │
│ +12.4% vs previous 30d                                 │  ← 4. Delta with explicit comparison baseline
└────────────────────────────────────────────────────────┘
```

1. **Label:** Crisp, 11px–12px uppercase or sentence case, muted grey (`text-neutral-500`).
2. **Primary Value:** Bold, 28px–32px with `font-variant-numeric: tabular-nums` (so numbers don't jump when refreshing).
3. **Context / Sparkline:** Muted 1.5px stroke showing the trend line of the active period, with previous period optionally shown as a dashed line.
4. **Delta & Comparison Baseline:** Must **always** answer *"compared to what?"* (e.g. `vs prev 7d`, `vs $100k target`). Never show a floating `+14%` without its reference period.

---

## 2. The Small-Base Honesty Rule

AI-generated dashboards often commit the crime of calculating raw mathematical percentages on tiny numbers:
* **The Error:** A project has 1 outage this week compared to 2 last week, and the card screams: `🟢 -50% OUTAGES!`. Or if it had 1 ticket and now has 0: `🔴 -100% TICKETS!`.
* **The Rule:** **Any baseline under 5 events must NEVER be displayed as a percentage.**
  - If count drops from 1 to 0: Display `0` with a neutral grey label `"was 1 last week"`.
  - If count rises from 1 to 3: Display `3` with a neutral grey label `"+2 vs last week"`.
  - Percentages are only honest when the denominator is statistically meaningful (≥ 20 sample size).

---

## 3. Metric Polarity Inversion (Lower-is-Better)

Never hardcode "green = increase" and "red = decrease". Polarity depends entirely on the business meaning of the entity:

| Metric Category | Examples | Increase (`▲`) | Decrease (`▼`) |
|---|---|---|---|
| **Standard (Higher is Better)** | Revenue, Active Users, Conversion Rate, Retention | 🟢 **Green** (`text-emerald-600`) | 🔴 **Red** (`text-rose-600`) |
| **Inverted (Lower is Better)** | Churn, Latency (p99), Server Errors, Cloud Costs, Ticket Resolution Time | 🔴 **Red** (`text-rose-600`) | 🟢 **Green** (`text-emerald-600`) |
| **Neutral / Informational** | Total Data Ingested, Storage Used, Requests/sec, Page Views | ⚪ **Grey** (`text-neutral-500`) | ⚪ **Grey** (`text-neutral-500`) |

---

## 4. Number Formatting Standards

1. **Tabular Numerals Always:** Always specify `tabular-nums` in CSS/Tailwind (`font-variant-numeric: tabular-nums`). This prevents jitter in live data dashboards.
2. **Right-Alignment in Columns:** In data grids or stacked comparison cards, numbers must align to the right edge so the eye can scan magnitude by digit position.
3. **Abbreviation Thresholds:**
   - `< 1,000`: Exact numbers (`742`).
   - `1,000 – 999,999`: Use single-decimal `k` (`12.4k`, `850k`).
   - `≥ 1,000,000`: Use two-decimal `M` (`1.25M`).
4. **True Zero vs No Data:**
   - If a metric is mathematically zero: display `0` or `$0.00`.
   - If data has not arrived or is null: display `—` (em-dash), never a fake zero.
   - For values below threshold: `<0.1%`, never round to `0.0%`.
