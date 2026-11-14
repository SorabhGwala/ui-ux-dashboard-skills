---
name: Linear Dark
category: Developer Tools / High-Density SaaS
description: High-contrast, developer-first dark mode inspired by Linear.app. Features deep pitch-black canvases, subtle translucent hairline borders, soft glowing inset highlights, and focused indigo accents.
---

# Design Tokens: Linear Dark

```yaml
colors:
  canvas: "#08090a"
  canvas-subtle: "#0f1012"
  surface-card: "#141518"
  surface-overlay: "#1c1d22"
  surface-active: "#25272e"
  
  hairline: "rgba(255, 255, 255, 0.08)"
  hairline-strong: "rgba(255, 255, 255, 0.14)"
  hairline-focus: "rgba(94, 106, 210, 0.6)"

  ink-primary: "#f8fafc"
  ink-secondary: "#94a3b8"
  ink-tertiary: "#64748b"
  ink-disabled: "#475569"

  brand-primary: "#5e6ad2"
  brand-primary-hover: "#6f7be0"
  brand-primary-active: "#4e59be"

  semantic-success: "#10b981"
  semantic-warning: "#f59e0b"
  semantic-error: "#f43f5e"
  semantic-info: "#38bdf8"

typography:
  font-sans: "'Geist Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
  font-mono: "'Geist Mono', 'JetBrains Mono', monospace"
  
  display-lg:
    fontSize: "36px"
    fontWeight: "600"
    lineHeight: "1.15"
    letterSpacing: "-0.025em"
  title-md:
    fontSize: "18px"
    fontWeight: "600"
    lineHeight: "1.3"
    letterSpacing: "-0.015em"
  body-sm:
    fontSize: "13px"
    fontWeight: "400"
    lineHeight: "1.5"
    letterSpacing: "0"
  label-caps:
    fontSize: "11px"
    fontWeight: "600"
    lineHeight: "1.2"
    letterSpacing: "+0.05em"
    textTransform: "uppercase"

geometry:
  radius-sm: "4px"
  radius-md: "6px"
  radius-lg: "10px"
  radius-full: "9999px"

shadows:
  card: "0 1px 2px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
  popover: "0 8px 24px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)"
```
