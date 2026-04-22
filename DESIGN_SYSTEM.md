# Design System — Intellectual Minimalism

## Principles

1. Typography is the design. Hierarchy comes from type scale, weight, and spacing — not color or decoration.
2. Content is sacred. Design serves the information, never competes with it.
3. Quiet confidence. The work speaks for itself.
4. Scannable structure. Researchers parse in seconds. Group and differentiate.
5. Respect the reader. Comfortable measure, proper leading, accessible contrast.

---

## Typography

### Type Scale (5 steps, 4px grid)

| Token | Size | Use |
|-------|------|-----|
| `--text-xs` | 12px / 0.75rem | Section labels, footer |
| `--text-sm` | 14px / 0.875rem | Metadata, interests, actions, co-authors |
| `--text-base` | 16px / 1rem | Credentials, venue, abstract body, research statement |
| `--text-lg` | 20px / 1.25rem | Paper titles |
| `--text-xl` | 28px / 1.75rem | Name |

### Fonts

| Family | Role | Weights used |
|--------|------|-------------|
| Source Serif 4 | Title voice — name, paper titles | 600, 700 |
| Hanken Grotesk | Body voice — everything else | 400, 500 |

### Line Heights (3 values)

| Token | Value | Use |
|-------|-------|-----|
| `--leading-tight` | 1.2 | Name |
| `--leading-relaxed` | 1.5 | Credentials, venue, metadata |
| `--leading-loose` | 1.6 | Abstract body, research statement |

Paper titles use 1.35 (optical adjustment for serif at 20px).

### Weight Rules

- 700: Name only (h1)
- 600: Paper titles only
- 500: Role, section labels
- 400: Everything else (minimum weight — never use 300)

### Capitalization

- Section titles (labels, headings): UPPERCASE via `text-transform` + `letter-spacing: 0.06em`
- Everything else: Sentence case as authored

---

## Color

### Palette (monochrome, neutral)

| Token | Value | Role | Contrast vs bg |
|-------|-------|------|---------------|
| `--color-bg` | `#fff` (light) / `oklch(15% 0 0)` (dark) | Background | — |
| `--color-text` | `oklch(25% 0 0)` / `oklch(90% 0 0)` | Primary text | ~12.8:1 ✓ AA |
| `--color-text-secondary` | `oklch(42% 0 0)` / `oklch(65% 0 0)` | Metadata, supporting | ~6.5:1 ✓ AA |
| `--color-rule` | `oklch(78% 0 0)` / `oklch(30% 0 0)` | Primary decorative border | Decorative |
| `--color-rule-light` | `oklch(88% 0 0)` / `oklch(22% 0 0)` | Secondary decorative border | Decorative |

### Color Assignment

- Primary color: Name, role, paper titles, research statement
- Secondary color: Venue, co-authors, interests, actions, abstract body, footer, section labels
- No accent color. Hierarchy is purely typographic.

---

## Spacing

### Scale (4px grid)

| Token | Value | Use |
|-------|-------|-----|
| `--space-2xs` | 4px | Within tight clusters (venue↔co-authors, action items) |
| `--space-xs` | 8px | Title↔venue, icon gaps, label↔rule |
| `--space-sm` | 12px | Context↔action break, abstract padding, rule↔content |
| `--space-md` | 16px | Page container padding, footer rule↔text |
| `--space-lg` | 24px | Between sidebar groups, section label↔first entry, photo↔bio |
| `--space-xl` | 32px | Tablet content top margin |
| `--space-2xl` | 48px | Between paper entries, between major content blocks |
| `--space-3xl` | 64px | Page top margin, between paper groups (sections) |

### Spacing Rules

| Semantic relationship | Spacing | Examples |
|-----------------------|---------|----------|
| Within a tight cluster | 4px (`--space-2xs`) | Venue↔co-authors, action↔action |
| Element introduces its context | 8px (`--space-xs`) | Title↔venue, name↔credentials |
| Between different kinds of content | 12px (`--space-sm`) | Context cluster↔action, rule↔content |
| Between groups within a section | 24px (`--space-lg`) | Credentials↔interests, interests↔actions |
| Between sibling content blocks | 48px (`--space-2xl`) | Paper entry↔paper entry, statement↔first section |
| Between major sections | 64px (`--space-3xl`) | Publications↔Working Papers, page top |

---

## Interactive States

All links and buttons follow the same pattern:

| State | Treatment |
|-------|-----------|
| Rest | Inherit hierarchy styling, no underline |
| Hover | Underline |
| Focus-visible | 2px solid outline, `--color-text`, 2px offset |
| Active | Opacity 0.7 |
| Visited | Same as rest (no purple) |

---

## Icons

- Style: Inline SVG, 14×14px, stroke-based (1.5px stroke width)
- Color: `currentColor` with `opacity: 0.6`
- Use: Sidebar actions only (email, CV, Scholar). Accepted checkmark (filled, not stroke).
- No icon fonts. No decorative icons on content.

---

## Content Patterns

### Paper Entry

```
[Title]                    serif 600, 20px, primary
  ↕ 8px
[✓ Venue · Journal]       sans 400, 16px, secondary (✓ icon on accepted only)
  ↕ 4px
[with Co-authors]          sans 400, 14px, secondary
  ↕ 12px
[Read abstract ▾]          sans 400, 14px, secondary, own line
  ↕ 12px (when open)
[Abstract text]            sans 400, 16px, secondary, 24px left indent
```

Entries with appendix links: `(Online appendix)` flows inline after the title text.

### Sidebar Identity Card

```
[Photo]                    200px wide, 6px border-radius
  ↕ 24px
[Name]                     serif 700, 28px, primary, nowrap
  ↕ 4px
[Role]                     sans 500, 16px, primary
[Affiliation line 1]       sans 400, 16px, secondary
[Affiliation line 2]       sans 400, 16px, secondary
  ↕ 24px
[Interest 1]               sans 400, 14px, secondary
[Interest 2]               sans 400, 14px, secondary
  ↕ 24px + rule
[📧 Email]                 sans 400, 14px, secondary, icon
[🌐 Google Scholar]        sans 400, 14px, secondary, icon
[📄 Curriculum Vitae]      sans 400, 14px, secondary, icon
```

### Section Group

```
SECTION LABEL              sans 500, 12px, uppercase, secondary, rule below
  ↕ 24px
[Entry 1]
  ↕ 48px
[Entry 2]
  ↕ 48px
[Entry 3]

  ↕ 64px

NEXT SECTION LABEL
```

---

## Responsive

| Breakpoint | Changes |
|------------|---------|
| ≤991px (tablet) | Sidebar stacks above content. Photo 180px. Top margin 32px. |
| ≤576px (mobile) | Name 24px, titles 18px. Photo 160px. Entry gap 32px. Top margin 24px. |

---

## Accessibility

- Heading hierarchy: h1 (name) → h2 (section labels). No skipped levels.
- `aria-expanded` and `aria-controls` on all toggle buttons.
- `<noscript>` fallback shows all abstracts when JS disabled.
- `prefers-reduced-motion` disables all transitions.
- `prefers-color-scheme: dark` automatic dark mode.
- `text-wrap: pretty` prevents orphan words.
- All SVG icons have `aria-hidden="true"`.
- Focus-visible outlines on all interactive elements.
- Semantic HTML: `<aside>`, `<main>`, `<footer>`, `<address>`, `<section>`.
