# HAVONE MOBILITY - About Us Page

A modern, responsive website built with Next.js 15, TypeScript, and Tailwind CSS, showcasing HAVONE MOBILITY's autonomous driving technology company.

## Features

- **Next.js 15 App Router** - Modern React framework with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework with custom design tokens
- **Responsive Design** - Mobile-first approach with adaptive layouts
- **Reusable Components** - Modular component architecture
- **Design System** - Custom color palette, typography, and spacing system
- **Interactive Elements** - Animated speedometer, hover effects, smooth scrolling

## Design System

Based on the Autonomous Design System specifications:

### Colors
- **Primary**: Deep black (#000000) for corporate authority
- **Secondary**: Signal Green (#8DC313) for CTAs and active states
- **Surface**: Light grey (#f6faf8) background for premium feel
- **Accent Colors**: Comprehensive palette for various UI states

### Typography
- **Inter** - Primary typeface for body text and headings
- **Space Grotesk** - Technical labels and data displays

### Components
- Reusable cards (Journey, Focus, Career, Leadership)
- Interactive navigation with mobile menu
- Animated speedometer showing scroll velocity
- CTA sections with gradient overlays
- Progress indicators and hover states

## Project Structure

```
havone/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── layout.tsx             # Root layout with fonts
│   ├── page.tsx               # Home page (redirects to /about)
│   └── globals.css            # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Navigation header
│   │   └── Footer.tsx         # Site footer
│   ├── sections/
│   │   ├── HeroSection.tsx    # Mission statement & hero image
│   │   ├── JourneySection.tsx # Company timeline
│   │   ├── RDSection.tsx      # R&D focus areas
│   │   ├── CareersSection.tsx # Job openings
│   │   ├── LeadershipSection.tsx # Team members
│   │   └── CTASection.tsx     # Call to action
│   ├── ui/
│   │   ├── JourneyCard.tsx    # Timeline milestone card
│   │   ├── FocusCard.tsx      # R&D focus card
│   │   ├── CareerCard.tsx     # Job listing card
│   │   └── LeaderCard.tsx     # Team member card
│   └── Speedometer.tsx        # Animated scroll speedometer
├── stitch_precision_driverless_systems/
│   ├── code.html              # Original HTML design
│   ├── DESIGN.md              # Design system specs
│   └── screen.png             # Design screenshot
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies

```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Key Features Implementation

### Responsive Design
- Mobile-first approach with breakpoints at `md` (768px) and `lg` (1024px)
- Flexible grid layouts using Tailwind's grid system
- Mobile navigation menu with hamburger icon
- Adaptive image sizing and layout stacking

### Custom Design Tokens
All design system values are configured in `tailwind.config.ts`:
- Custom color palette matching the design specs
- Typography scales for headings and body text
- Spacing system based on 8px grid
- Border radius tokens for consistent shapes

### Interactive Components
- **Speedometer**: Real-time scroll velocity indicator using `requestAnimationFrame`
- **Smooth Scrolling**: Native smooth scroll behavior for anchor links
- **Hover Effects**: Transitions on cards, buttons, and navigation items
- **Image Effects**: Grayscale to color transitions on hover

### Performance Optimizations
- Next.js Image component for optimized image loading
- Font optimization with `next/font`
- Server components for faster initial page loads
- Automatic code splitting

## Customization

### Adding New Pages
Create new pages in the `app/` directory:

```typescript
// app/technology/page.tsx
export default function TechnologyPage() {
  return <div>Technology content</div>;
}
```

### Creating New Components
Follow the existing component structure:

```typescript
// components/ui/NewCard.tsx
interface NewCardProps {
  title: string;
  description: string;
}

export default function NewCard({ title, description }: NewCardProps) {
  return (
    <div className="p-md bg-white rounded-lg">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

### Modifying the Design System
Edit `tailwind.config.ts` to adjust colors, spacing, typography, etc.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2024 HAVONE MOBILITY. All rights reserved.
