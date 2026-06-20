---
name: Autonomous Design System
colors:
  surface: '#f6faf8'
  surface-dim: '#d7dbd9'
  surface-bright: '#f6faf8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f4f2'
  surface-container: '#ebefed'
  surface-container-high: '#e5e9e7'
  surface-container-highest: '#dfe3e1'
  on-surface: '#181c1c'
  on-surface-variant: '#434846'
  inverse-surface: '#2d3130'
  inverse-on-surface: '#eef2f0'
  outline: '#747876'
  outline-variant: '#c3c7c5'
  surface-tint: '#5b5f5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#181c1b'
  on-primary-container: '#818583'
  inverse-primary: '#c4c7c5'
  secondary: '#316b00'
  on-secondary: '#ffffff'
  secondary-container: '#7cfc01'
  on-secondary-container: '#347000'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#151d1b'
  on-tertiary-container: '#7d8682'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e3e1'
  primary-fixed-dim: '#c4c7c5'
  on-primary-fixed: '#181c1b'
  on-primary-fixed-variant: '#444846'
  secondary-fixed: '#82ff1a'
  secondary-fixed-dim: '#6ee000'
  on-secondary-fixed: '#0a2000'
  on-secondary-fixed-variant: '#245100'
  tertiary-fixed: '#dbe5e1'
  tertiary-fixed-dim: '#bfc9c5'
  on-tertiary-fixed: '#151d1b'
  on-tertiary-fixed-variant: '#404946'
  background: '#f6faf8'
  on-background: '#181c1c'
  surface-variant: '#dfe3e1'
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-tech:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 64px
---

## Brand & Style

This design system is built for a future defined by autonomous mobility and machine intelligence. The brand personality is **visionary, precise, and uncompromisingly safe**. It communicates technical authority through a sophisticated, high-contrast aesthetic that balances "Human-Centricity" with "Machine Accuracy."

The visual style follows a **Corporate Minimalism** approach with a high-tech edge. It utilizes generous whitespace to signify clarity of thought and premium positioning, while the "Signal Green" accent evokes movement, energy, and the "Go" state of autonomous systems. The design mimics the ergonomics of modern automotive interfaces—sleek, responsive, and highly legible under any condition.

## Colors

The palette is anchored by **Deep Charcoal**, providing a foundation of intelligence and depth. This is contrasted against a **Light Grey** background to maintain a professional, airy atmosphere. 

**Lawn Green** serves as the "Signal" color. It is used sparingly but with high impact for calls to action, active states, and success indicators, simulating the glow of high-tech sensors. **Slate Grey** is utilized for secondary information and borders, providing the "Precision" required for technical documentation and data visualizations.

## Typography

The design system utilizes **Inter** as the primary typeface for its exceptional legibility and neutral, systematic character. Headings are set with heavy weights and tight tracking to project a bold, corporate presence.

For technical data, telemetry readouts, and captions, **Space Grotesk** is introduced. Its geometric and futuristic construction complements the automotive theme, making raw data feel engineered and intentional. All type should prioritize vertical rhythm and clear hierarchy, ensuring complex technical information remains accessible.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop experiences (1440px max-width) and a fluid, 4-column grid for mobile. A strict 8px spacing rhythm ensures consistency across all components and page layouts.

Generous margins and large padding blocks are used to isolate key information, reflecting the "Safety Buffer" concept in autonomous driving. Elements should span 4, 6, or 12 columns to maintain a clean, organized structure. Whitespace is not empty space; it is a functional tool used to reduce cognitive load for the user.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Low-Contrast Outlines** rather than heavy shadows. 

1.  **Level 0 (Background):** Light Grey (#E8ECEA).
2.  **Level 1 (Surfaces):** Pure White (#FFFFFF) cards with a 1px Slate Grey (#5A6360) border at 20% opacity.
3.  **Level 2 (Active/Floating):** Subtle ambient shadows (0px 4px 20px rgba(11, 15, 14, 0.05)) are used only for components that require immediate interaction, like dropdowns or active modals.

This flat, layered approach ensures the UI feels like a seamless part of a digital cockpit, emphasizing precision over decorative depth.

## Shapes

The design system uses a **Rounded** shape language. A base radius of 8px (0.5rem) is applied to buttons, input fields, and small cards to balance technical precision with the organic, aerodynamic forms of modern vehicle design. 

Larger containers and hero sections may use a 16px (1rem) radius to soften the layout. This consistency in rounding helps the UI feel approachable and "friendly," mitigating the coldness often associated with high-tech automation.

## Components

### Buttons
*   **Primary:** Deep Charcoal background with White text. On hover, the "Signal Green" appears as a 2px bottom border or a subtle glow.
*   **CTA:** Signal Green background with Deep Charcoal text. This is reserved for high-priority actions (e.g., "Start Pilot," "Book Demo").
*   **Ghost:** Transparent background with a 1px Slate Grey border.

### Input Fields & Controls
Fields should have a White background and a 1px Slate Grey border. When focused, the border transitions to Deep Charcoal with a subtle Signal Green glow. Checkboxes and Radios use Signal Green for the "checked" state to clearly indicate active parameters.

### Cards
Cards are the primary container for data. They feature a White background, 8px rounded corners, and generous internal padding (24px). Headers within cards should use the `label-tech` typography style for a diagnostic feel.

### Specialized Components
*   **Telemetry Chips:** Small, high-contrast badges used to display real-time sensor data (e.g., "LIDAR: ACTIVE").
*   **Progress Indicators:** Thin, horizontal bars using Signal Green to show system processing or battery levels.
*   **Data Grids:** Clean, borderless tables with alternating row highlights in a very faint grey for maximum readability of technical specs.