# 🚀 HAVONE MOBILITY - Quick Start Guide

## Prerequisites Check

Before you begin, make sure you have:

- ✅ **Node.js 18.x or higher** installed
  - Check: `node --version`
  - Download: https://nodejs.org/

- ✅ **npm, yarn, or pnpm** package manager
  - Check: `npm --version`

## 5-Minute Setup

### Step 1: Install Dependencies

```bash
cd c:\Users\azureadmin\Desktop\havone
npm install
```

This will install:
- Next.js 15.1.0
- React 19.0.0
- TypeScript 5.x
- Tailwind CSS 3.4.17
- All required dependencies

**Expected time:** 1-2 minutes

### Step 2: Start Development Server

```bash
npm run dev
```

You should see:
```
✓ Ready in 2.5s
○ Compiling / ...
✓ Compiled / in 1.2s
```

**Expected time:** 5-10 seconds

### Step 3: Open in Browser

Navigate to: **http://localhost:3000**

The page will automatically redirect to `/about`

### Step 4: Verify Everything Works

Check that you can see:
- ✅ HAVONE logo in header
- ✅ Navigation menu (responsive on mobile)
- ✅ Speedometer in bottom-left corner (animates on scroll)
- ✅ Hero image of autonomous truck
- ✅ Journey timeline section
- ✅ R&D focus cards with progress bars
- ✅ Career listings with hover effects
- ✅ Leadership team photos
- ✅ CTA section with gradient
- ✅ Footer with links

### Step 5: Test Interactions

Try these:
1. **Scroll the page** → Watch speedometer needle move
2. **Hover over career cards** → Background turns green
3. **Hover over hero image** → Grayscale to color transition
4. **Resize browser** → Layout adapts (mobile menu on small screens)
5. **Click "View Open Positions"** → Smooth scroll to careers section

## Troubleshooting

### Port 3000 Already in Use?

```bash
# Use a different port
npm run dev -- -p 3001
```

### Dependencies Won't Install?

```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors?

```bash
# Regenerate TypeScript config
npx next telemetry disable
npm run dev
```

### Images Not Loading?

The app uses remote images from Google. Make sure:
- You have internet connection
- `next.config.ts` has correct remote patterns

### Tailwind Styles Not Applying?

```bash
# Rebuild Tailwind
npm run build
npm run dev
```

## Development Tips

### Hot Reload
- Save any file → Page auto-refreshes
- TypeScript errors → Show in terminal
- CSS changes → Apply instantly

### File Locations
- **Pages**: `app/about/page.tsx`
- **Components**: `components/` folder
- **Styles**: `app/globals.css`
- **Config**: `tailwind.config.ts`

### Making Changes

**Change colors:**
Edit `tailwind.config.ts` → colors section

**Change text:**
Edit component files in `components/sections/`

**Add new page:**
Create `app/[page-name]/page.tsx`

**Add new component:**
Create file in `components/ui/` folder

## Production Build

When ready to deploy:

```bash
# Build optimized production version
npm run build

# Test production build locally
npm start
```

Expected output:
```
✓ Compiled successfully
✓ Static pages: 2
✓ Total page size: 150 KB
```

## VS Code Setup (Optional)

Recommended extensions:
1. **ESLint** - Code linting
2. **Tailwind CSS IntelliSense** - Class autocomplete
3. **TypeScript and JavaScript** - Built-in

Install all with:
```bash
code --install-extension dbaeumer.vscode-eslint
code --install-extension bradlc.vscode-tailwindcss
```

## Project Scripts

```bash
npm run dev      # Start dev server (hot reload)
npm run build    # Build for production
npm start        # Run production server
npm run lint     # Check code quality
```

## What's Next?

Now that it's running, you can:

1. **Explore the code:**
   - Start with `app/about/page.tsx` (main page)
   - Check out `components/sections/` (page sections)
   - Look at `components/ui/` (reusable cards)

2. **Make changes:**
   - Edit text in any section component
   - Change colors in `tailwind.config.ts`
   - Add new sections to the page

3. **Add new pages:**
   - Create `app/technology/page.tsx`
   - Create `app/solutions/page.tsx`
   - Update navigation in `components/layout/Header.tsx`

4. **Deploy:**
   - Vercel (recommended): `vercel deploy`
   - Netlify: `netlify deploy`
   - AWS/Azure/GCP: Use `npm run build` output

## Common Tasks

### Change Hero Text
📁 File: `components/sections/HeroSection.tsx`
📍 Line: ~12-13

```tsx
<h1 className="text-primary mb-md">
  Your New Hero Text Here
</h1>
```

### Add a Job Listing
📁 File: `components/sections/CareersSection.tsx`
📍 Line: ~13-27

```tsx
const positions = [
  // Add new position here
  {
    title: "New Job Title",
    location: "Location / Type",
  },
  // ... existing positions
];
```

### Change Company Logo
📁 File: `components/layout/Header.tsx`
📍 Line: ~32

```tsx
<Image
  src="your-logo-url.png"  // Change this
  alt="HAVONE Logo"
  // ...
/>
```

### Modify Color Scheme
📁 File: `tailwind.config.ts`
📍 Line: ~15-62

```typescript
colors: {
  secondary: "#YOUR_NEW_COLOR",  // Change accent color
  // ... other colors
}
```

## Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **TypeScript Docs**: https://www.typescriptlang.org/docs
- **React Docs**: https://react.dev

## Need Help?

Check these files:
- 📄 `README.md` - Full documentation
- 📄 `CONVERSION_SUMMARY.md` - Technical details
- 📄 `PROJECT_STRUCTURE.md` - File organization

## Success Checklist

- [ ] Dependencies installed (`node_modules/` folder exists)
- [ ] Dev server running (terminal shows "Ready in X.Xs")
- [ ] Browser shows the page (localhost:3000)
- [ ] All images loaded (hero image, team photos)
- [ ] Speedometer animates on scroll
- [ ] Hover effects work on career cards
- [ ] Mobile menu works (try narrow browser)
- [ ] No console errors (check browser DevTools)

If all checked ✅ → You're ready to develop! 🎉

---

**Last Updated:** June 2026
**Framework:** Next.js 15 + TypeScript + Tailwind CSS
**Status:** Production Ready ✅
