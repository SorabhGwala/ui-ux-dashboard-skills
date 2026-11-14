# Typography & Layout Discipline: Crafting Visual Authority

> **Principle:** Typography is 90% of user interface design. Great typography creates instantaneous authority, guides the eye through natural hierarchical weight, and prevents pages from looking flat or generic.

---

## 1. Typographic Scale & Proportions

Use a disciplined typographic scale based on standard modular ratios (Major Third `1.25` or Perfect Fourth `1.333`):

| Level | Size | Weight | Line Height | Letter Spacing | Purpose |
|---|---|---|---|---|---|
| **Display Mega** | `56px–72px` (`text-6xl` to `text-7xl`) | 600 or 700 | `1.05–1.1` | `-0.035em` | Hero main proposition (short, punchy) |
| **Display Heading** | `36px–44px` (`text-4xl`) | 600 | `1.15–1.2` | `-0.025em` | Major section titles |
| **Title Medium** | `24px–28px` (`text-2xl`) | 600 | `1.25–1.3` | `-0.015em` | Feature card headings, modal titles |
| **Title Small** | `18px–20px` (`text-lg`) | 500 or 600 | `1.35–1.4` | `-0.01em` | Subsection anchors, widget headers |
| **Body Large** | `17px–18px` | 400 | `1.6–1.65` | `0` | Hero intro lede paragraphs |
| **Body Standard** | `14px–15px` (`text-sm` to `text-base`) | 400 | `1.5–1.6` | `0` | Primary application and dashboard body text |
| **Caption / Label** | `11px–12px` (`text-xs`) | 500 or 600 | `1.3` | `+0.04em` to `+0.06em` | Uppercase eyebrow tags, table headers, badges |
| **Data / Code** | `13px–14px` (`font-mono`) | 400 or 500 | `1.4` | `0` (`tabular-nums`) | Numbers, metrics, code snippets, timestamps |

---

## 2. Letter-Spacing & Leading Rules

1. **Negative Tracking on Large Type:**  
   The larger the font size, the looser characters appear. Always apply negative letter spacing (`tracking-tight` or `-0.02em` to `-0.035em`) to any heading `32px` and above. Without this, headings look loose and amateurish.
2. **Positive Tracking on Micro-Caps:**  
   When using small uppercase labels (`10px`–`12px`), always increase tracking (`tracking-wider` or `+0.05em`) to ensure legibility.
3. **Leading Inversion:**  
   Large headlines need tight leading (`1.05` to `1.15`). Body paragraphs need open leading (`1.5` to `1.65`) so the reader's eye doesn't jump lines.

---

## 3. High-Taste Font Pairings

Never use default system fonts without deliberate styling. Select an intentional aesthetic world:

### Pair A: Modern Technical SaaS (Linear / Vercel style)
* **Primary / Display:** `Geist Sans`, `Inter Display`, or `Plus Jakarta Sans`
* **Data / Code:** `Geist Mono` or `JetBrains Mono`
* **Vibe:** Razor-sharp geometric precision, developer confidence, clean edges.

### Pair B: Warm Editorial / High Craft (Cursor / Stripe style)
* **Display / Accent:** `Instrument Serif`, `Newsreader`, or `Playfair Display`
* **Body / UI:** `Inter`, `Satoshi`, or `Switzer`
* **Data / Code:** `JetBrains Mono`
* **Vibe:** Intellectual, literary authority, magazine sophistication, warm cream canvases.

### Pair C: High-Density Operating Console (Terminal / Financial style)
* **All Surfaces:** `IBM Plex Sans` + `IBM Plex Mono`
* **Vibe:** Institutional trust, data density, Bloomberg/AWS console seriousness.

---

## 4. Text Contrast Hierarchy (Ink Tokens)

Maintain three distinct ink levels in both light and dark modes:

```css
/* Light Mode */
--ink-primary:   #09090b; /* 95% black: Headlines, primary titles, critical numbers */
--ink-secondary: #52525b; /* Neutral-600: Body copy, feature descriptions */
--ink-tertiary:  #71717a; /* Neutral-500: Eyebrows, timestamps, secondary labels */
--ink-disabled:  #a1a1aa; /* Neutral-400: Inactive states, placeholder text */

/* Dark Mode */
--ink-primary:   #f8fafc; /* 98% white: Headlines, titles, lead metrics */
--ink-secondary: #a1a1aa; /* Neutral-400: Body copy, secondary text */
--ink-tertiary:  #71717a; /* Neutral-500: Eyebrows, timestamps, subtle units */
--ink-disabled:  #52525b; /* Neutral-600: Inactive elements */
```
