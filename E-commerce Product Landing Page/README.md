# E‑Commerce Product Landing Page — Production‑Grade React + Vite

High‑performance, conversion‑focused product landing page engineered with React, Vite, and Tailwind CSS. Designed for speed, accessibility, and SEO, with a 3D product hero, mobile‑first interactions, and robust testing.

## Highlights
- 3D product hero with CSS `preserve-3d`, perspective, lighting, and hover motion
- Mobile carousel/video UX with touch, keyboard, and accessible controls
- Performance‑optimized assets, code splitting, and bundle analysis
- Accessibility‑first implementation with ARIA semantics and keyboard navigation
- SEO‑ready markup, OpenGraph/Twitter tags, and product JSON‑LD

## Tech Stack
- React 18 + Vite 5
- Tailwind CSS 3
- Lucide React icons
- Vitest + Testing Library (JS + JSDOM)

## Getting Started
- Requirements: Node.js ≥ 18
- Install: `npm install`
- Develop: `npm run dev` and open `http://localhost:5173`
- Lint: `npm run lint`
- Test: `npm run test`
- Build: `npm run build`
- Preview: `npm run preview`

## Project Structure
```
src/
  assets/                # Static images and media
  components/            # Page sections (Hero, Gallery, Pricing, etc.)
  App.jsx                # App entry and route composition
  main.jsx               # Vite bootstrap
index.html               # Root HTML and meta tags
tailwind.config.js       # Tailwind configuration
vite.config.js           # Vite and plugins
```

## Feature Details

### 3D Product Hero
- Full‑cover image inside a circular container using `object-cover`
- CSS 3D: `perspective` and `transform-style: preserve-3d`
- Layered lighting, inner shadows, and responsive glow effects
- Smooth hover transitions (`scale`, `rotateX`, `rotateY`) with easing

### Mobile Carousel + Video
- Touch gestures for swipe navigation
- Native media controls on touch; overlay controls on desktop
- Keyboard support: ArrowLeft/ArrowRight for navigation, Space for play/pause
- Mobile buttons with elevated `z-index` for consistent tap targets

### Performance
- Route/section code splitting via `React.lazy`
- Memoization with `React.memo` / `useMemo`
- Optimized assets: lazy images, `decoding="async"`, `sizes`/`srcSet`
- Bundle visualizer (`rollup-plugin-visualizer`) → `dist/stats.html`

### Accessibility
- Landmarks and roles for carousel regions and status
- Keyboard‑first interactions across media and controls
- Clear, descriptive labels via `aria-label`

### SEO
- Semantic layout with `<main>` and relevant headings
- Canonical link, OpenGraph/Twitter social previews
- Product structured data via JSON‑LD for rich results

### Testing & QA
- Unit/interaction tests with Vitest + Testing Library
- `jsdom` environment for component behavior
- Example tests: App renders, Hero keyboard navigation

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Test: `npm run test`
- Preview build: `npm run preview`
- Lighthouse: `npm run lighthouse` (run while dev server is active)
- Visualize bundle: open `dist/stats.html` after build

## Deployment
- Build with `npm run build`
- Deploy the `dist/` folder to your static host (Netlify, Vercel, S3, etc.)
- Ensure appropriate cache headers for CSS/JS and immutable assets

## Benchmarking
- Measure performance with Lighthouse (`npm run lighthouse`)
- Record bundle composition with `rollup-plugin-visualizer` → `dist/stats.html`

## Professional Identity
Senior Front‑End Developer focused on performance, accessibility, and product growth. I design and build conversion‑oriented interfaces with modern React tooling, ship maintainable code, and validate quality with testing and metrics.

- Focus: React, Vite, Tailwind CSS, Web Performance, Accessibility, SEO
- Principles: measurable impact, clean architecture, and developer experience
- Highlights: mobile UX, scalable styling, CI‑ready testing, analytics‑driven iteration

## License
Licensed under the MIT License. See `LICENSE` for details.
