# Quick Start Guide - SmartWatch Pro Landing Page

## 🚀 Get Started in 3 Minutes

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# 1. Install all dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open your browser to http://localhost:5173
```

That's it! Your landing page is now running locally.

## 📁 Project Structure

```
project/
├── src/
│   ├── components/        # All landing page components
│   │   ├── Hero.tsx      # Main hero section
│   │   ├── Features.tsx  # Features grid
│   │   ├── Gallery.tsx   # Product gallery
│   │   ├── Benefits.tsx  # Benefits section
│   │   ├── Pricing.tsx   # Pricing card
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx       # FAQ accordion
│   │   └── Footer.tsx    # Footer section
│   ├── App.tsx           # Main component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles + animations
├── index.html            # HTML template
├── tailwind.config.js    # Tailwind configuration
└── vite.config.ts        # Vite configuration
```

## 🎨 Customization Guide

### Change Colors

**Method 1: Update Tailwind Classes**
Edit component files and replace color classes:
- `blue-600` → `emerald-600` (for green theme)
- `cyan-600` → `teal-600`
- `slate-900` → `gray-900`

**Method 2: Extend Tailwind Config**
Add custom colors in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#2563eb',
        secondary: '#0891b2',
      }
    }
  }
}
```

### Change Text Content

1. Open the component file you want to edit
2. Find the text you want to change
3. Update directly in the JSX

Example - Change hero headline in `Hero.tsx`:
```tsx
<h1 className="text-5xl...">
  Your Life,  {/* ← Change this */}
  <span className="block...">
    Elevated  {/* ← and this */}
  </span>
</h1>
```

### Change Product Name

Replace "SmartWatch Pro" throughout:
1. `index.html` - Page title and meta description
2. `Hero.tsx` - Hero section
3. `Footer.tsx` - Footer branding
4. All component files where product name appears

### Add/Remove Sections

In `App.tsx`, comment out or add components:
```tsx
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      {/* <Gallery /> */}  ← Comment out to hide
      <Benefits />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
```

### Update Images

Current setup uses emoji placeholders. To use real images:

1. Add images to `public/images/` folder
2. Update component imports:
   ```tsx
   <img src="/images/product.jpg" alt="Product" />
   ```

### Change Pricing

Edit `Pricing.tsx`:
```tsx
<span className="text-5xl...">
  $299  {/* ← Your price */}
</span>
<span className="text-3xl... line-through">
  $429  {/* ← Original price */}
</span>
```

### Modify Features

Edit the `features` array in `Features.tsx`:
```tsx
const features = [
  {
    icon: Heart,              // Icon component
    title: 'Your Feature',    // Feature name
    description: '...',       // Feature description
    gradient: 'from-red-500 to-pink-500', // Icon color
  },
  // Add more features...
];
```

### Update Testimonials

Edit the `testimonials` array in `Testimonials.tsx`:
```tsx
{
  name: 'Customer Name',
  role: 'Job Title',
  image: '👤',  // Emoji or image path
  rating: 5,
  text: 'Customer testimonial text...',
  color: 'from-blue-500 to-cyan-500',
}
```

### Customize FAQ

Edit the `faqs` array in `FAQ.tsx`:
```tsx
{
  question: 'Your question?',
  answer: 'Detailed answer to the question...',
}
```

## 🎯 Development Commands

```bash
# Start development server (auto-reload on changes)
npm run dev

# Build for production (creates optimized bundle)
npm run build

# Preview production build locally
npm run preview

# Type check (find TypeScript errors)
npm run typecheck

# Lint code (find code issues)
npm run lint
```

## 📱 Testing Responsiveness

1. **Browser DevTools**
   - Open DevTools (F12)
   - Click device toolbar icon
   - Test different screen sizes

2. **Common Breakpoints to Test**
   - Mobile: 375px (iPhone SE)
   - Mobile: 390px (iPhone 12/13)
   - Tablet: 768px (iPad)
   - Desktop: 1280px (Laptop)
   - Large: 1920px (Desktop)

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel
```

### Deploy to Netlify
```bash
# 1. Build the project
npm run build

# 2. Drag and drop the 'dist' folder to netlify.com/drop
```

### Deploy to GitHub Pages
```bash
# 1. Update vite.config.ts with base path
base: '/your-repo-name/'

# 2. Build
npm run build

# 3. Deploy dist folder to gh-pages branch
```

## 🎨 Design Customization Tips

### Change Font
1. Update Google Fonts link in `index.html`
2. Update font family in `index.css`

### Add More Animations
Add to `index.css`:
```css
@keyframes yourAnimation {
  from { /* start state */ }
  to { /* end state */ }
}

.animate-your-animation {
  animation: yourAnimation 1s ease-in-out;
}
```

### Adjust Spacing
Global padding for sections is in each component:
```tsx
className="py-20 lg:py-32"
// py-20 = 80px mobile
// lg:py-32 = 128px desktop
```

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Vite will auto-increment to :5174, :5175, etc.
# Or specify a port:
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### Styling Not Updating
```bash
# Restart dev server
# Ctrl+C to stop
npm run dev
```

### Icons Not Showing
- Check lucide-react is installed: `npm list lucide-react`
- Verify icon import: `import { IconName } from 'lucide-react'`

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [Lucide Icons](https://lucide.dev)

## 💡 Pro Tips

1. **Hot Reload**: Changes auto-refresh in dev mode
2. **Component Isolation**: Test components individually
3. **Mobile First**: Always check mobile view first
4. **Performance**: Run `npm run build` to check bundle size
5. **Accessibility**: Use semantic HTML and ARIA labels
6. **SEO**: Update meta tags in `index.html`

## 🆘 Need Help?

Common issues and solutions:

**Q: Page is blank**
- Check browser console for errors (F12)
- Verify all components are exported correctly
- Check for TypeScript errors

**Q: Styles not working**
- Ensure Tailwind classes are spelled correctly
- Check if custom animations are defined in index.css
- Verify postcss and tailwindcss are installed

**Q: Icons missing**
- Confirm lucide-react is installed
- Check icon names match Lucide icon library
- Verify imports at top of component files

---

**You're all set! Start building your high-converting landing page.** 🎉
