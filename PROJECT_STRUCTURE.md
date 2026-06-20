# HAVONE MOBILITY - Project Structure

```
havone/
│
├── 📁 app/                              # Next.js App Router
│   ├── 📁 about/
│   │   └── 📄 page.tsx                  # About Us page (main page)
│   ├── 📄 layout.tsx                    # Root layout with fonts & metadata
│   ├── 📄 page.tsx                      # Home page (redirects to /about)
│   └── 📄 globals.css                   # Global styles & Tailwind directives
│
├── 📁 components/                       # React Components
│   │
│   ├── 📁 layout/                       # Layout Components (shared)
│   │   ├── 📄 Header.tsx                # Navigation header with mobile menu
│   │   └── 📄 Footer.tsx                # Site footer with links
│   │
│   ├── 📁 sections/                     # Page Section Components
│   │   ├── 📄 HeroSection.tsx           # Mission statement & hero image
│   │   ├── 📄 JourneySection.tsx        # Company timeline (2019-Today)
│   │   ├── 📄 RDSection.tsx             # R&D focus areas (3 cards)
│   │   ├── 📄 CareersSection.tsx        # Job openings & benefits
│   │   ├── 📄 LeadershipSection.tsx     # Team members grid
│   │   └── 📄 CTASection.tsx            # Call-to-action banner
│   │
│   ├── 📁 ui/                           # Reusable UI Components
│   │   ├── 📄 JourneyCard.tsx           # Timeline milestone card
│   │   ├── 📄 FocusCard.tsx             # R&D area card with progress bar
│   │   ├── 📄 CareerCard.tsx            # Job listing card
│   │   └── 📄 LeaderCard.tsx            # Team member card (2 variants)
│   │
│   └── 📄 Speedometer.tsx               # Animated scroll speed indicator
│
├── 📁 stitch_precision_driverless_systems/  # Original Design Files
│   ├── 📄 code.html                     # Original HTML implementation
│   ├── 📄 DESIGN.md                     # Design system specification
│   └── 🖼️ screen.png                    # Design screenshot
│
├── ⚙️ Configuration Files
│   ├── 📄 next.config.ts                # Next.js config (image domains)
│   ├── 📄 tailwind.config.ts            # Tailwind config (design tokens)
│   ├── 📄 tsconfig.json                 # TypeScript config
│   ├── 📄 postcss.config.mjs            # PostCSS config
│   ├── 📄 .eslintrc.json                # ESLint config
│   └── 📄 .gitignore                    # Git ignore rules
│
├── 📄 package.json                      # Dependencies & scripts
├── 📄 README.md                         # Setup & usage guide
├── 📄 CONVERSION_SUMMARY.md             # Detailed conversion notes
└── 📄 PROJECT_STRUCTURE.md              # This file

```

## Component Hierarchy

```
AboutPage
├── Speedometer (fixed position)
├── Header
│   └── Navigation + Mobile Menu
├── Main
│   ├── HeroSection
│   │   └── Hero Image
│   ├── JourneySection
│   │   └── JourneyCard (×3)
│   ├── RDSection
│   │   └── FocusCard (×3)
│   ├── CareersSection
│   │   └── CareerCard (×4)
│   ├── LeadershipSection
│   │   └── LeaderCard (×3)
│   └── CTASection
└── Footer
    └── Navigation Links
```

## File Purposes

### App Router Files
| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout, loads fonts, sets metadata |
| `app/page.tsx` | Home page, redirects to `/about` |
| `app/about/page.tsx` | About page composition |
| `app/globals.css` | Tailwind directives, global styles |

### Layout Components
| Component | Purpose |
|-----------|---------|
| `Header.tsx` | Fixed navigation bar, mobile menu, logo |
| `Footer.tsx` | Site footer, copyright, links, animated truck |
| `Speedometer.tsx` | Scroll velocity indicator (fixed bottom-left) |

### Section Components
| Section | Purpose |
|---------|---------|
| `HeroSection.tsx` | Mission statement + large hero image |
| `JourneySection.tsx` | Company timeline with 3 milestones |
| `RDSection.tsx` | R&D focus areas (Edge Sensing, Neural Predict, Eco-Dynamics) |
| `CareersSection.tsx` | Why Havone? + 4 job listings |
| `LeadershipSection.tsx` | Meet the team (3 leaders) |
| `CTASection.tsx` | Join the revolution banner |

### UI Components
| Component | Props | Purpose |
|-----------|-------|---------|
| `JourneyCard.tsx` | year, title, description, highlight | Timeline milestone |
| `FocusCard.tsx` | icon, title, description, progress | R&D focus area |
| `CareerCard.tsx` | title, location | Job listing |
| `LeaderCard.tsx` | name, role, description, image, featured | Team member |

## Data Flow

```
Static Data (in components)
    ↓
Props Interface (TypeScript)
    ↓
Component Rendering
    ↓
Tailwind Classes (styling)
    ↓
Browser (HTML + CSS)
```

Currently all data is static. Future: can be replaced with CMS or API calls.

## Styling Architecture

```
tailwind.config.ts (Design Tokens)
    ↓
    ├─→ Colors (62 custom colors)
    ├─→ Typography (6 text styles)
    ├─→ Spacing (8px grid system)
    └─→ Border Radius (4 sizes)
    ↓
Utility Classes in Components
    ↓
PostCSS Processing
    ↓
Optimized CSS Output
```

## Routes

| URL | Page | Status |
|-----|------|--------|
| `/` | Home (redirects) | ✅ Created |
| `/about` | About Us | ✅ Created |
| `/technology` | Technology | 🔜 To be created |
| `/solutions` | Solutions | 🔜 To be created |
| `/newsletter` | Newsletter | 🔜 To be created |

## Key Technologies

- **Framework**: Next.js 15.1.0
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.4.17
- **Fonts**: Inter + Space Grotesk (Google Fonts)
- **Icons**: Material Symbols Outlined
- **Images**: Next.js Image component
- **Runtime**: React 19.0.0

## Component Props Summary

### JourneyCard
```typescript
{
  year: string;        // e.g., "2019 — THE PROTOTYPE"
  title: string;       // e.g., "Accuracy Milestone"
  description: string; // Full description text
  highlight?: boolean; // Dark variant (default: false)
}
```

### FocusCard
```typescript
{
  icon: string;        // Material Symbol name
  title: string;       // e.g., "Edge Sensing"
  description: string; // Full description text
  progress: number;    // 0-100 for progress bar
}
```

### CareerCard
```typescript
{
  title: string;    // Job title
  location: string; // Office location
}
```

### LeaderCard
```typescript
{
  name: string;        // Full name
  role: string;        // Job title
  description: string; // Bio text
  image: string;       // Image URL
  featured?: boolean;  // Large featured card (default: false)
}
```

## Next.js Features Used

✅ App Router
✅ Server Components (default)
✅ Client Components (`"use client"` for interactivity)
✅ Next.js Image (remote patterns configured)
✅ Next.js Font (Google Fonts optimization)
✅ Metadata API
✅ TypeScript support
✅ Fast Refresh

## Development Commands

```bash
# Install dependencies
npm install

# Run dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Environment

- Node.js: 18+ required
- Package Manager: npm, yarn, or pnpm
- Browser: Modern browsers (Chrome, Firefox, Safari, Edge)
