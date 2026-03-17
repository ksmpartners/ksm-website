# KSM Technology Partners — Brand Guidelines for Claude Code

This file defines the visual language, component patterns, and design rules for KSM Technology Partners landing pages. When building any UI in this project, follow these guidelines precisely. Do not deviate from the color tokens, typography, or spacing rules without explicit instruction.

---

## Project Context

KSM Technology Partners is a niche technology consulting firm specializing in:
- **Statistical Computing Environments (SCE)** for pharmaceutical and life sciences clients
- **Custom software** for utilities and power distribution

**Tone:** Precise, credible, approachable. We are experts in regulated environments. Design should feel like modern health-tech SaaS — not a legacy consulting firm. Think Veeva, Benchling, Linear. Not Accenture, not Goldman Sachs.

**Audience:** Technical and business decision-makers at pharma companies, CROs, and utilities. They are skeptical, detail-oriented, and evaluating trust signals constantly.

---

## File Structure

Always reference `src/styles/tokens.css` for all design tokens. Never hardcode color values or spacing. Always use CSS custom properties.

```
src/
├── styles/
│   └── tokens.css       ← single source of truth for all tokens
├── components/
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── FeatureCards.astro
│   ├── StatsBar.astro
│   ├── CTA.astro
│   └── Footer.astro
└── pages/
    └── index.astro
```

---

## Color System

### Core Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-blue` | `#3C9DCC` | Primary brand color. Links, icon fills, accent bars, active states |
| `--color-blue-mid` | `#6DAED6` | Secondary blue. Hover states, subtle fills, gradient midpoints |
| `--color-blue-pale` | `#B2D1EA` | Tints. Card borders, dividers, background washes |
| `--color-teal` | `#0EA898` | **Accent only.** CTA buttons, badges, key stat callouts, success states |
| `--color-teal-light` | `#E4F6F4` | Teal tint background for callout cards only |
| `--color-slate` | `#1D2F3D` | Dark anchor. Dark card backgrounds, title slide headers, `<h1>` on light bg |
| `--color-slate-gray` | `#3A4A54` | Body text, secondary headings, icon strokes |
| `--color-bg` | `#F3F6F8` | Page background. Cool off-white — never pure white at page level |
| `--color-surface` | `#FFFFFF` | Card and component backgrounds |

### Rules
- **Never** use `--color-teal` as a background fill on large sections. It is an accent — use it on buttons, badges, and small callout elements only.
- **Never** hardcode `#000000` or `#ffffff` as text colors. Always use the slate tokens.
- `--color-blue` is for links and brand moments. `--color-teal` is for action/conversion moments. Never use them in the same visual element.
- On dark (`--color-slate`) backgrounds, use `white` for headings and `--color-blue-pale` for body text or subheadings.
- Maximum **one teal element per visual section**. If a section already has a teal CTA button, do not add a teal badge or teal accent bar.

---

## Typography

### Fonts

```css
/* In tokens.css — already defined */
--font-heading: 'DM Sans', system-ui, sans-serif;
--font-body:    'DM Sans', system-ui, sans-serif;
--font-mono:    'DM Mono', 'Fira Code', monospace;
```

Load via Google Fonts in the Astro layout:
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Scale

| Token | Value | Usage |
|---|---|---|
| `--text-xs` | `0.75rem` | Labels, legal, mono tags |
| `--text-sm` | `0.875rem` | Body secondary, captions |
| `--text-base` | `1rem` | Body text |
| `--text-lg` | `1.125rem` | Lead paragraph, card body |
| `--text-xl` | `1.25rem` | Card headings, section subheadings |
| `--text-2xl` | `1.5rem` | Section headings (h2) |
| `--text-3xl` | `1.875rem` | Large section headings |
| `--text-4xl` | `2.25rem` | Hero subheading |
| `--text-5xl` | `3rem` | Hero headline |

### Rules
- Headings always use `--color-slate` on light backgrounds. Never `--color-blue` for headings.
- **Letter spacing on headings:** `letter-spacing: -0.03em` — tighter tracking signals precision.
- **Line height on headings:** `1.1` to `1.2`. Tight, editorial.
- **Line height on body:** `1.65`. Comfortable for technical readers.
- Never use `font-weight` below `400` or above `700`.
- Section labels (overlines above headings) use `--font-mono`, `--text-xs`, `letter-spacing: 0.15em`, `text-transform: uppercase`, `color: --color-teal`.

---

## Spacing

Use an 8px base grid. All spacing tokens are multiples of `0.5rem`.

```
--space-1:  0.25rem   (4px)
--space-2:  0.5rem    (8px)
--space-3:  0.75rem   (12px)
--space-4:  1rem      (16px)
--space-6:  1.5rem    (24px)
--space-8:  2rem      (32px)
--space-10: 2.5rem    (40px)
--space-12: 3rem      (48px)
--space-16: 4rem      (64px)
--space-20: 5rem      (80px)
--space-24: 6rem      (96px)
```

Section vertical padding is always `--space-20` (80px) minimum on desktop.

---

## Border Radius

```
--radius-sm:   4px    (tags, badges, code)
--radius-md:   8px    (cards, inputs — default)
--radius-lg:   12px   (large cards, modals)
--radius-full: 9999px (pills)
```

**Rule:** Never use border-radius above `--radius-lg` on rectangular content cards. Excessive rounding signals playfulness — KSM is precise.

---

## Shadows

```
--shadow-sm:  0 1px 4px rgba(29, 47, 61, 0.06);
--shadow-md:  0 2px 12px rgba(29, 47, 61, 0.08);
--shadow-lg:  0 6px 32px rgba(29, 47, 61, 0.12);
```

Shadow color is always derived from `--color-slate`, never black.

---

## Component Patterns

### Navigation

- Background: `--color-surface` with `border-bottom: 1px solid --color-blue-pale`
- Logo: SVG, left-aligned
- Links: `--color-slate-gray`, hover `--color-blue`, `--text-sm`, `font-weight: 500`
- CTA button: teal, right-aligned (see Button rules below)
- Sticky on scroll. Add `box-shadow: --shadow-sm` when scrolled.
- No hamburger menu complexity on initial build — mobile can stack vertically.

```astro
<!-- Nav structure -->
<nav class="nav">
  <div class="nav-inner">
    <a href="/" class="nav-logo"><!-- KSM SVG logo --></a>
    <ul class="nav-links">
      <li><a href="/services">Services</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/case-studies">Case Studies</a></li>
    </ul>
    <a href="/contact" class="btn btn-teal">Schedule a Call</a>
  </div>
</nav>
```

---

### Hero Section

- **Background:** Dark slate (`--color-slate`) — this is a strong, confident first impression.
- **Overline:** Mono font, teal, uppercase, letter-spaced. e.g. "GxP-Validated Technology Consulting"
- **Headline:** `--text-5xl`, white, tight tracking. Max 8 words. No jargon.
- **Subheading:** `--text-lg`, `--color-blue-pale`, `line-height: 1.65`, max 2 sentences.
- **CTA pair:** Primary button (teal), Secondary button (outline, white border, white text).
- **No hero images** unless specifically requested — KSM's credibility is in precision, not photography.
- Optional: Subtle geometric pattern or noise texture on the slate background for depth.

```astro
<!-- Hero structure -->
<section class="hero">
  <div class="container">
    <span class="overline">GxP-Validated Technology Consulting</span>
    <h1>Statistical Computing Environments Built for Compliance</h1>
    <p class="hero-sub">KSM delivers validated SCE implementations for pharmaceutical teams who can't afford mistakes in regulated data environments.</p>
    <div class="hero-actions">
      <a href="/contact" class="btn btn-teal">Schedule a Discovery Call</a>
      <a href="/services" class="btn btn-outline">See Our Services</a>
    </div>
  </div>
</section>
```

---

### Feature / Capability Cards

- Grid: 3 columns on desktop, 1 column on mobile.
- Card background: `--color-surface` (white).
- Page background behind grid: `--color-bg` (cool off-white).
- **Accent bar:** 3px tall, 32px wide, `--radius-sm`, top of card. Color varies per card:
  - Card 1: `--color-blue`
  - Card 2: `--color-teal`
  - Card 3: `--color-blue-mid`
  - Never repeat teal on adjacent cards.
- Card heading: `--text-xl`, `--color-slate`, `font-weight: 700`
- Card body: `--text-base`, `--color-slate-gray`, `line-height: 1.65`
- Shadow: `--shadow-md`. On hover: `--shadow-lg` with `transform: translateY(-2px)`. Transition: `0.2s ease`.
- Border: `1px solid --color-blue-pale` at 40% opacity.

---

### Stats Bar

- Background: `--color-blue` (full-width, strong brand moment).
- 4 stats maximum. Separated by 1px vertical dividers at 20% white opacity.
- Stat number: `--text-3xl` or `--text-4xl`, `font-weight: 700`, white.
- Stat label: `--text-xs`, white at 70% opacity, `text-transform: uppercase`, `letter-spacing: 0.1em`.
- No icons — numbers speak for themselves in regulated industry context.

```astro
<!-- Stats structure -->
<section class="stats-bar">
  <div class="container">
    <div class="stat">
      <span class="stat-num">100%</span>
      <span class="stat-label">Audit Pass Rate</span>
    </div>
    <!-- divider -->
    <div class="stat-divider"></div>
    <div class="stat">
      <span class="stat-num">15+</span>
      <span class="stat-label">Validated Migrations</span>
    </div>
    <!-- etc -->
  </div>
</section>
```

---

### CTA Section

Two variants. Use one per page maximum.

**Variant A — Light (mid-funnel)**
- Background: `--color-teal-light`
- Heading: `--color-slate`, `--text-3xl`
- Body: `--color-slate-gray`
- Button: `--color-teal`

**Variant B — Dark (bottom of page, primary conversion)**
- Background: `--color-slate`
- Heading: white, `--text-3xl`
- Body: `--color-blue-pale`
- Button: `--color-teal`
- Optional: KSM logo mark (triangle SVG only, no text) at low opacity as background texture.

---

### Footer

- Background: `#152433` (one step darker than `--color-slate`).
- Logo: white version (SVG with white fills).
- Link columns: `--text-sm`, white at 60% opacity, hover white at 100%.
- Divider: white at 10% opacity.
- Bottom bar: `--font-mono`, `--text-xs`, white at 35% opacity.
- **No teal in the footer.** The footer is a quiet exit, not a conversion moment.

---

## Buttons

```css
/* Base */
.btn {
  display: inline-flex;
  align-items: center;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-family: var(--font-heading);
  font-size: var(--text-sm);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.18s ease;
  border: 2px solid transparent;
}

/* Teal — primary action */
.btn-teal {
  background: var(--color-teal);
  color: white;
}
.btn-teal:hover {
  background: #0C9488; /* 8% darker */
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

/* Outline — secondary action, on dark backgrounds */
.btn-outline {
  background: transparent;
  color: white;
  border-color: rgba(255,255,255,0.4);
}
.btn-outline:hover {
  border-color: white;
  background: rgba(255,255,255,0.08);
}

/* Ghost blue — tertiary, on light backgrounds */
.btn-ghost {
  background: transparent;
  color: var(--color-blue);
  border-color: var(--color-blue-pale);
}
.btn-ghost:hover {
  background: var(--color-bg);
  border-color: var(--color-blue);
}
```

---

## Layout

```css
.container {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}
```

Sections use `padding: var(--space-20) 0` on desktop, `padding: var(--space-12) 0` on mobile.

---

## Do / Don't

| ✅ Do | ❌ Don't |
|---|---|
| Use `--color-slate` for all dark UI surfaces | Use `#000000` or `#111111` as dark colors |
| Use teal for one action element per section | Use teal as a decorative or background color |
| Use `--color-blue-pale` for dividers and borders | Use gray for borders — stay in the blue family |
| Use `DM Mono` for overlines, tags, and labels | Use serif or display fonts — KSM is technical |
| Keep hero backgrounds dark slate | Use hero imagery unless explicitly requested |
| Use `letter-spacing: -0.03em` on headings | Use default tracking on headings |
| Derive shadows from `--color-slate` | Use black-based box shadows |
| Use section overlines in teal mono for hierarchy | Use multiple heading levels without overlines |

---

## Accessibility

- All text on `--color-blue` backgrounds must be white. Never `--color-slate-gray` on blue.
- Teal (`#0EA898`) on white passes WCAG AA at `font-weight: 600` and above only. Don't use teal for small body text.
- Dark slate (`#1D2F3D`) on `--color-bg` passes WCAG AAA.
- Always include `:focus-visible` styles on interactive elements using `outline: 2px solid --color-teal`.