---
name: Obsidian Terminal
colors:
  surface: '#121317'
  surface-dim: '#121317'
  surface-bright: '#37393d'
  surface-container-lowest: '#0c0e11'
  surface-container-low: '#1a1c1f'
  surface-container: '#1e2023'
  surface-container-high: '#282a2d'
  surface-container-highest: '#333538'
  on-surface: '#e2e2e6'
  on-surface-variant: '#c2cab0'
  inverse-surface: '#e2e2e6'
  inverse-on-surface: '#2f3034'
  outline: '#8c947c'
  outline-variant: '#424936'
  surface-tint: '#94da28'
  primary: '#ffffff'
  on-primary: '#203600'
  primary-container: '#aff746'
  on-primary-container: '#476f00'
  inverse-primary: '#436900'
  secondary: '#ffb955'
  on-secondary: '#452b00'
  secondary-container: '#c48313'
  on-secondary-container: '#3c2500'
  tertiary: '#ffffff'
  on-tertiary: '#3d2b39'
  tertiary-container: '#f7daed'
  on-tertiary-container: '#745e6e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#aff746'
  primary-fixed-dim: '#94da28'
  on-primary-fixed: '#112000'
  on-primary-fixed-variant: '#314f00'
  secondary-fixed: '#ffddb4'
  secondary-fixed-dim: '#ffb955'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#633f00'
  tertiary-fixed: '#f7daed'
  tertiary-fixed-dim: '#dabfd1'
  on-tertiary-fixed: '#271623'
  on-tertiary-fixed-variant: '#554150'
  background: '#121317'
  on-background: '#e2e2e6'
  surface-variant: '#333538'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
  label-nav:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-meta:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the intersection of high-precision developer tooling and restrained editorial design. Crafted specifically for an engineering portfolio, the aesthetic delivers an atmosphere that is calm, technical, uncompromisingly structured, and razor-sharp. 

The emotional signature is focused and authoritative. It strips away ornamental distractions—eschewing playful micro-illustrations and ambient multi-colored blurs—in favor of structural clarity, confident typography, and functional hierarchy. The interface communicates deep mastery of systems engineering and modern software craft.

Key visual pillars:
- **Terminal Precision:** Structural data grids, fixed tracking, monospaced metadata labels, and high-legibility terminal outputs.
- **Editorial Polish:** Confident, tightly kerned Space Grotesk display typography counterbalanced with generous, controlled negative space and neutral gray scales.
- **Disciplined Contrast:** Deep, absolute-void black foundations punctuated strictly by surgical neon-lime and amber focal points.

## Colors

The system is strictly dark-mode-only. The palette relies on deep low-reflection basalt tones combined with high-contrast functional highlights. There are strictly no tertiary blues, purples, or synthetic gradients permitted anywhere in the layout.

### Color Tokens & Roles

- **Canvas Background (`#0A0C0F`):** Deep foundation tone representing infinite terminal depth. Used for full-page viewports and root backdrops.
- **Card / Container (`#12161B`):** Level-1 surface for content blocks, card bodies, and layout modules.
- **Raised Surfaces (`#181D24`):** Level-2 surface for interactive hover states, active modules, flyouts, and inputs.
- **Primary Text (`#E8ECEF`):** Maximum contrast foreground for headings, body copy, and active controls.
- **Muted Text (`#98A2B0`):** Secondary foreground for captions, metadata, inactive links, and structural column headings.
- **Structural Border (`rgba(255, 255, 255, 0.08)`): Crisp 1px division line applied across all containers, inputs, and section boundaries.

### Accents & Semantic Roles

- **Primary Lime Accent (`#B6FF4D`):** High-energy phosphor-terminal green. Reserved exclusively for primary interactive states, links, primary CTA buttons, code syntax highlights, featured engineering projects ("What I Build"), and interactive focus rings.
- **Amber Accent (`#FFB547`):** Warm utility phosphor. Strictly reserved for NIAT affiliations, formal education credentials, certification tags, status chips, and real-time live tickers.

## Typography

The typographic hierarchy enforces a disciplined balance between editorial impact and technical precision.

1. **Headings (Space Grotesk):** Renders all section markers and display titles. Characterized by brutal, tight line-heights (`1.05` to `1.15`) and negative tracking. Headings should feel dense, confident, and architectural.
2. **Body Copy (Inter):** Fixed at a baseline of `17px` with an expansive `28px` leading (`1.65`). This preserves optimal ocular comfort across technical long-form case studies, architecture breakdowns, and editorial project descriptions.
3. **Monospace & Metadata (JetBrains Mono):** Mandated for all navigation bars, tab controls, tech-stack tags, system telemetry, and code blocks. The minimum permissible font size for interactive elements and navigation is `14px` to safeguard touch-target legibility and visual crispness.

## Layout & Spacing

The layout is built around a standard desktop frame width of **1440px** containing a centered **1200px max-width content container**. 

### Grid & Baseline
- **Desktop (1024px – 1440px+):** 12-column symmetrical fluid grid. Column gutters are fixed at `24px` (`1.5rem`), outer canvas padding at `32px` (`2rem`).
- **Tablet (768px – 1023px):** 8-column layout. Gutters scale down to `20px`, margins maintain `24px`.
- **Mobile (320px – 767px):** 4-column layout. Gutters compress to `16px` (`1rem`) and outer section margins to `20px` (`1.25rem`). All horizontal multi-column grids collapse to vertical stacks (`grid-cols-1`).

### Canvas Grid Lines
The entire viewport background is overlaid with a subtle, non-intrusive structural engineering grid:
- Size: `48px` by `48px` square intervals.
- Stroke: `1px solid rgba(255, 255, 255, 0.04)`.
- Behavior: Static background attached to the root document canvas (`background-size: 48px 48px`), unaffected by scroll offsets.

## Elevation & Depth

Visual hierarchy is communicated through planar surface color contrast and razor-sharp border boundaries rather than heavy drop shadows.

- **Surface Layering:**
  - Base layer: `#0A0C0F` (Ground canvas).
  - Resting cards & structures: `#12161B` with `1px solid rgba(255, 255, 255, 0.08)`.
  - Raised elements & hover states: `#181D24` with `1px solid rgba(255, 255, 255, 0.14)`.
- **Glassmorphism Exceptions:**
  - Glass blur is strictly restricted to two components: the **Global Header / Nav** and the **Terminal Window Header**.
  - Glass parameters: `background: rgba(10, 12, 15, 0.75)`, `backdrop-filter: blur(12px)`, `-webkit-backdrop-filter: blur(12px)`, and bottom border `1px solid rgba(255, 255, 255, 0.08)`.
  - All other cards, modals, popovers, and containers are **100% opaque solid surfaces**.
- **Shadows:** Standard box-shadows are forbidden on resting cards. High-elevation overlays (modal dialogs, drawers) use an ambient, low-diffuse technical shadow: `box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.8)`.
- **Focus Indication:** All focused inputs, interactive cards, and buttons feature an un-blurred focus ring: `outline: 2px solid #B6FF4D; outline-offset: 2px;`.

## Shapes

The geometric architecture pairs precise curvature with sharp internal elements. 

- **Primary Cards & Containers:** Standardized at a consistent corner radius of `20px` (`rounded-[20px]`). This creates an architectural, contained frame against the strict `48px` background grid.
- **Terminal Windows:** Outer boundary maintains `20px` radius; the interior terminal body and code canvases conform seamlessly to the interior clip.
- **Interactive Controls (Buttons, Inputs, Badges, Chips):** Use a tighter, functional radius of `6px` to `8px` (`0.375rem` - `0.5rem`) to ensure they read visually as actionable devices rather than passive layout tiles.

## Components

### Buttons
- **Primary Button:** Solid `#B6FF4D` background, `#0A0C0F` text (Space Grotesk or JetBrains Mono, weight 600, 14px), 8px border-radius, no border. Padding: 12px 20px. Hover: brightness(1.08), transform translateY(-1px). Active: translateY(0). Focus-visible: 2px solid `#B6FF4D`, 2px offset.
- **Secondary Button:** Surface `#12161B`, text `#E8ECEF`, 1px solid `rgba(255, 255, 255, 0.08)`. Hover: background `#181D24`, border-color `rgba(255, 255, 255, 0.2)`.
- **Text / Inline Link:** `#B6FF4D` text with standard underline on hover, accompanied by a monospaced trailing arrow `→`.

### Cards & Modular Containers
- Solid `#12161B` surface with `20px` corner radius and `1px solid rgba(255, 255, 255, 0.08)`.
- Padding: `24px` to `32px`.
- Interactive hover: Subtle transition to `#181D24` background and `rgba(255, 255, 255, 0.16)` border. No colored glow.

### Terminal Window
- Dedicated UI window containing command-line demos or code walkthroughs.
- Header: Glass frosted (`rgba(10, 12, 15, 0.75)`, blur `12px`), height 44px, bottom border `1px solid rgba(255, 255, 255, 0.08)`. Includes three monochrome circular window dots (`rgba(255, 255, 255, 0.2)`).
- Body: Solid `#0A0C0F`, monospaced typography (JetBrains Mono, 14px), prompt symbol `$` tinted `#B6FF4D`.

### Chips & Badges
- **General Tech Stack:** Surface `#181D24`, text `#98A2B0`, border `1px solid rgba(255, 255, 255, 0.08)`, 6px radius, font JetBrains Mono 12px.
- **NIAT / Education / Live Tickers:** Surface `rgba(255, 181, 71, 0.08)`, text `#FFB547`, border `1px solid rgba(255, 181, 71, 0.3)`. Real-time indicators use a pulsing 6px `#FFB547` circular indicator.

### Input Fields
- Surface `#12161B`, text `#E8ECEF`, placeholder `#98A2B0`, 1px solid `rgba(255, 255, 255, 0.08)`, 8px radius, padding 12px 16px. JetBrains Mono 14px. Focus: border `#B6FF4D`, outline `2px solid #B6FF4D`.

### Form Controls (Checkboxes & Radios)
- Checkboxes: 18x18px square with 4px radius, surface `#12161B`, border `1px solid rgba(255, 255, 255, 0.16)`. Checked: `#B6FF4D` fill with `#0A0C0F` checkmark icon.
- Radios: 18x18px circle with matching active states.