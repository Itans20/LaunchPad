# LaunchPad — Design System Documentation (Orbital Pulse)

This document contains the design system extracted from the Stitch **LaunchPad** project (`projects/15325208526263569328`).

---

## 🎨 Color Palette

### Theme Overrides & Key Accent Colors
| Role | Color Hex | Description |
| :--- | :--- | :--- |
| **Primary** | `#A855F7` / `#DDB7FF` | Electric Purple / Plasma discharge, high-priority CTAs, focus indicators |
| **Secondary** | `#06B6D4` / `#4CD7F6` | Spectral Cyan / Live telemetry accents, success states, cybernetic highlights |
| **Tertiary** | `#C084FC` / `#DDB8FF` | Ultraviolet / Highlight overlays & auxiliary telemetry |
| **Background / Neutral** | `#0F131F` / `#0A0E1A` | Void-grade Midnight / Canvas foundation |

### Full Named Color Tokens
| Token | Color Hex | Token | Color Hex |
| :--- | :--- | :--- | :--- |
| `background` | `#0f131f` | `on_background` | `#dfe2f3` |
| `surface` | `#0f131f` | `on_surface` | `#dfe2f3` |
| `surface_dim` | `#0f131f` | `surface_bright` | `#353946` |
| `surface_container_lowest` | `#0a0e1a` | `surface_container_low` | `#171b28` |
| `surface_container` | `#1b1f2c` | `surface_container_high` | `#262a37` |
| `surface_container_highest`| `#313442` | `surface_variant` | `#313442` |
| `surface_tint` | `#ddb7ff` | `on_surface_variant` | `#cfc2d6` |
| `inverse_surface` | `#dfe2f3` | `inverse_on_surface` | `#2c303d` |
| `outline` | `#988d9f` | `outline_variant` | `#4d4354` |
| `primary` | `#ddb7ff` | `on_primary` | `#490080` |
| `primary_container` | `#b76dff` | `on_primary_container` | `#400071` |
| `inverse_primary` | `#842bd2` | `primary_fixed` | `#f0dbff` |
| `primary_fixed_dim` | `#ddb7ff` | `on_primary_fixed` | `#2c0051` |
| `on_primary_fixed_variant` | `#6900b3` | | |
| `secondary` | `#4cd7f6` | `on_secondary` | `#003640` |
| `secondary_container` | `#03b5d3` | `on_secondary_container` | `#00424e` |
| `secondary_fixed` | `#acedff` | `secondary_fixed_dim` | `#4cd7f6` |
| `on_secondary_fixed` | `#001f26` | `on_secondary_fixed_variant`| `#004e5c` |
| `tertiary` | `#ddb8ff` | `on_tertiary` | `#490081` |
| `tertiary_container` | `#b175ec` | `on_tertiary_container` | `#400071` |
| `tertiary_fixed` | `#f0dbff` | `tertiary_fixed_dim` | `#ddb8ff` |
| `on_tertiary_fixed` | `#2c0051` | `on_tertiary_fixed_variant` | `#62259b` |
| `error` | `#ffb4ab` | `on_error` | `#690005` |
| `error_container` | `#93000a` | `on_error_container` | `#ffdad6` |

---

## 🔤 Typography

### Primary Font Families
- **Headline Font:** `Space Grotesk` (Geometric, angular, aerospace telemetry style)
- **Body Font:** `Inter` (Neutral, high-legibility sans-serif)
- **Label Font:** `Space Grotesk` (Uppercase, wide letter-spacing)

### Typography Scale & Variants

| Style Name | Font Family | Size | Weight | Line Height |
| :--- | :--- | :--- | :--- | :--- |
| **`display-hero`** | Space Grotesk | 64px | 700 (Bold) | 72px |
| **`display-hero-mobile`** | Space Grotesk | 38px | 700 (Bold) | 44px |
| **`headline-lg`** | Space Grotesk | 48px | 600 (SemiBold) | 56px |
| **`headline-lg-mobile`** | Space Grotesk | 32px | 600 (SemiBold) | 40px |
| **`headline-md`** | Space Grotesk | 32px | 600 (SemiBold) | 40px |
| **`headline-sm`** | Space Grotesk | 24px | 500 (Medium) | 32px |
| **`body-lg`** | Inter | 18px | 400 (Regular) | 28px |
| **`body-md`** | Inter | 16px | 400 (Regular) | 24px |
| **`body-sm`** | Inter | 14px | 400 (Regular) | 20px |
| **`label-lg`** | Space Grotesk | 14px | 600 (SemiBold) | 20px |
| **`label-md`** | Space Grotesk | 12px | 500 (Medium) | 16px |
| **`label-mono`** | Space Grotesk | 11px | 600 (SemiBold) | 14px |

---

## 📐 Shape & Spacing Tokens

### Corner Radii
- **`sm`**: `0.25rem` (4px)
- **`DEFAULT`**: `0.5rem` (8px)
- **`md`**: `0.75rem` (12px)
- **`lg`**: `1.0rem` (16px)
- **`xl`**: `1.5rem` (24px)
- **`full`**: `9999px` (Pill shapes / status indicators)

### Grid & Spacing Scale
- **`margin`**: `2rem` (Desktop) / `1.25rem` (Mobile)
- **`gutter`**: `1.5rem` (Desktop) / `1.0rem` (Mobile)
- **`space-xs`**: `0.25rem` (4px)
- **`space-sm`**: `0.5rem` (8px)
- **`space-md`**: `1.0rem` (16px)
- **`space-lg`**: `1.5rem` (24px)
- **`space-xl`**: `2.5rem` (40px)

---

## ✨ Visual Aesthetics & Glassmorphism Guidelines

### Elevation & Depth Levels
1. **Level 0 (Deep Canvas):** Void tint `#050711` with radial gradients (`radial-gradient(ellipse at 50% 0%, rgba(168, 85, 247, 0.15), transparent 70%)`).
2. **Level 1 (Orbital Glass):** `rgba(13, 17, 39, 0.65)` background with `backdrop-filter: blur(16px)` and 1px hairline gradient border `rgba(255, 255, 255, 0.08)` to `rgba(168, 85, 247, 0.15)`.
3. **Level 2 (High Orbit Cards & Interactive States):** `rgba(18, 24, 54, 0.8)` background with `backdrop-filter: blur(24px)` and soft aura `box-shadow: 0 12px 32px -4px rgba(168, 85, 247, 0.25)`.
4. **Level 3 (Modal Panels & Command Overlays):** `rgba(10, 14, 26, 0.92)` with inset border `inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)` and external cyan/purple glow `0 24px 64px -12px rgba(6, 182, 212, 0.25)`.
