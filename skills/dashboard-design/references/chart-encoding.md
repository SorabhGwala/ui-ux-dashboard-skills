# Visual Encoding Ladder & Chart Selection

> **Foundation:** Based on the empirical perception research of Cleveland & McGill, Edward Tufte, and Stephen Few. The human visual cortex decodes certain visual attributes with mathematical precision and others with high error rates. Always choose the highest-ranking attribute suitable for the data.

---

## 1. The Perceptual Encoding Ladder

Ranked from **highest accuracy** to **lowest accuracy**:

```
1. Position along a common scale  ───►  Line charts, bar charts, dot plots (Most Accurate)
2. Length                         ───►  Bar charts, bullet graphs
3. Direction / Slope              ───►  Trendlines, sparklines
4. Angle                          ───►  Pie slices (High error rate - avoid)
5. Area                           ───►  Bubble charts, treemaps (Low accuracy)
6. Color Intensity / Saturation   ───►  Heatmaps (Ordinal comparison only)
```

---

## 2. Chart Decision Matrix

| Data Question | Best Form | Avoid | Rationale |
|---|---|---|---|
| **Trend over continuous time** (e.g. Daily Revenue, Requests/sec) | **Line chart or Sparkline** (with dashed line for previous period) | Bar charts with 50+ thin bars | Lines show slope and acceleration; bars create moiré visual vibration. |
| **Discrete category comparison** (e.g. Sales by Country, Top Endpoints) | **Horizontal Bar Chart** (sorted descending) | Vertical column chart with angled labels | Horizontal bars leave ample room for readable labels without tilting text. |
| **Performance against a target** (e.g. Actual $82k vs Quota $100k) | **Bullet Graph** (progress bar with target tick line) | Circular radial gauge or speedometer | Radial gauges waste 80% of whitespace; bullet graphs convey value, goal, and range in 24px height. |
| **Part-to-whole breakdown** (e.g. Device breakdown) | **Segmented Share Bar or 2-slice Donut** | Pie charts with 4+ slices, exploded 3D pies | Human brains struggle with angle comparison. A segmented 4px share bar or ranked horizontal table is superior. |
| **2D density matrix** (e.g. Server load by Hour of Day & Day of Week) | **Heatmap grid** (single hue, varying lightness) | 3D surface plots, multi-series overlapping lines | Grids map discrete temporal coordinates without visual entanglement. |
| **Multivariate distribution** (e.g. Latency vs Cost per query) | **Scatter plot** with hover tooltip | Radar / Spider charts | Scatter plots leverage X and Y positions on common scales. |

---

## 3. Strict Chart Anti-Patterns (Banned)

1. **❌ Never use 3D charts:** 3D perspective distorts height and length, making honest comparison impossible.
2. **❌ Never use Dual Y-Axes with uncorrelated scales:** Two distinct scales on left and right allow arbitrary visual manipulation of trends. Use two small-multiple charts stacked vertically instead.
3. **❌ Never use Rainbow Palettes:** Assigning 8 random bright colors to 8 chart series overwhelms working memory. Use monochromatic shades of the primary entity hue, highlighting only the one series that needs attention in a contrasting warm hue.
4. **❌ Never clip axes without explicit annotation:** Bar charts **must** start at zero (since length encodes the value). Line charts may truncate the Y-axis to display subtle variance, but must clearly indicate the non-zero baseline.
