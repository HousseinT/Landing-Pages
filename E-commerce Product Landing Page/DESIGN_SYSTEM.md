# SmartWatch Pro - Design System

## 🎨 Color Palette

### Primary Colors
```css
Deep Navy: #1e293b (slate-900)
Electric Blue: #2563eb (blue-600)
Bright Cyan: #0891b2 (cyan-600)
```

### Secondary Colors
```css
Light Background: #f8fafc (slate-50)
White: #ffffff
Dark Text: #0f172a (slate-900)
Light Text: #64748b (slate-500)
```

### Gradient Combinations
- Hero gradient: `from-slate-900 via-blue-900 to-slate-900`
- CTA gradient: `from-blue-600 to-cyan-600`
- Accent gradients:
  - Red to Pink: `from-red-500 to-pink-500`
  - Purple to Indigo: `from-purple-500 to-indigo-500`
  - Teal to Emerald: `from-teal-500 to-emerald-500`
  - Amber to Orange: `from-amber-500 to-orange-500`

## 📐 Typography

### Font Family
**Primary**: Inter (weights: 400, 500, 600, 700, 800, 900)

### Text Sizes
- **Hero Headline**: `text-5xl sm:text-6xl lg:text-7xl` (48px - 72px)
- **Section Titles**: `text-4xl sm:text-5xl lg:text-6xl` (36px - 60px)
- **Subsection Titles**: `text-3xl lg:text-4xl` (30px - 36px)
- **Card Titles**: `text-2xl` (24px)
- **Body Large**: `text-xl` (20px)
- **Body Regular**: `text-lg` (18px)
- **Body Small**: `text-base` (16px)
- **Caption**: `text-sm` (14px)

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800
- Black: 900

## 🎭 Animation System

### Animation Classes
```css
.animate-fade-in          - Fade in (0.8s)
.animate-fade-in-up       - Fade in with upward motion (0.8s)
.animate-float            - Floating effect (3s infinite)
.animate-blob             - Organic blob animation (7s infinite)
.animate-pulse-slow       - Slow pulse (3s infinite)
```

### Animation Delays
```css
.animation-delay-1000     - 1 second delay
.animation-delay-2000     - 2 second delay
```

### Transition Durations
- Quick: `duration-300` (300ms)
- Standard: `duration-500` (500ms)
- Slow: `duration-1000` (1000ms)

## 📦 Component Patterns

### Card Pattern
```tsx
<div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl
                transition-all duration-500 hover:-translate-y-2
                border border-slate-200">
  {/* Content */}
</div>
```

### Button Pattern - Primary
```tsx
<button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600
                   text-white rounded-full font-semibold text-lg
                   shadow-lg shadow-blue-500/50 hover:shadow-xl
                   hover:shadow-blue-500/60 transition-all duration-300
                   hover:scale-105">
  Button Text
</button>
```

### Button Pattern - Secondary
```tsx
<button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white
                   rounded-full font-semibold text-lg border border-white/20
                   hover:bg-white/20 transition-all duration-300">
  Button Text
</button>
```

### Icon Container Pattern
```tsx
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600
                flex items-center justify-center shadow-lg
                group-hover:scale-110 transition-transform duration-500">
  <Icon className="w-7 h-7 text-white" />
</div>
```

## 📏 Spacing System

### Padding/Margin Scale
- xs: `p-2` (8px)
- sm: `p-4` (16px)
- md: `p-6` (24px)
- lg: `p-8` (32px)
- xl: `p-12` (48px)
- 2xl: `p-16` (64px)

### Section Padding
```css
Mobile: py-20 (80px vertical)
Desktop: lg:py-32 (128px vertical)
```

### Container Width
```css
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

## 🎯 Design Principles

### 1. Hierarchy
- Large, bold headlines draw attention
- Clear visual separation between sections
- Consistent spacing creates rhythm

### 2. Contrast
- Dark backgrounds with light text
- Light backgrounds with dark text
- Colorful accents on neutral base

### 3. Consistency
- Rounded corners: `rounded-2xl`, `rounded-3xl`, `rounded-full`
- Shadows: `shadow-sm`, `shadow-lg`, `shadow-xl`, `shadow-2xl`
- Borders: `border`, `border-2`

### 4. Interactivity
- Hover effects on all clickable elements
- Scale transformations: `hover:scale-105`
- Shadow increases: `hover:shadow-2xl`
- Color transitions: `transition-colors duration-300`

## 📱 Responsive Design

### Breakpoints
```css
sm: 640px   (Tablet)
md: 768px   (Tablet landscape)
lg: 1024px  (Desktop)
xl: 1280px  (Large desktop)
2xl: 1536px (Extra large desktop)
```

### Grid Patterns
```css
Mobile: grid-cols-1
Tablet: md:grid-cols-2
Desktop: lg:grid-cols-3 or lg:grid-cols-4
```

### Text Alignment
```css
Mobile: text-center
Desktop: lg:text-left
```

## 🎪 Special Effects

### Glassmorphism
```css
bg-white/10 backdrop-blur-sm border border-white/20
```

### Gradient Text
```css
bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent
```

### Hover Scale
```css
transform hover:scale-105 transition-transform duration-300
```

### Shadow Glow
```css
shadow-lg shadow-blue-500/50
```

## 🔧 Conversion Optimization

### CTA Hierarchy
1. **Primary CTA**: Gradient background, prominent placement
2. **Secondary CTA**: Outlined or ghost style
3. **Tertiary CTA**: Text link with icon

### Trust Elements
- Star ratings: 5 yellow stars
- Customer count: Large numbers with "+" suffix
- Badges: Circular icons with text
- Testimonials: Real photos and roles

### Urgency Elements
- Countdown indicators
- Limited stock messages
- Discount badges (red/orange gradients)
- Time-sensitive offers

## 📊 Iconography

### Icon Library
**Lucide React** - Consistent, modern icon set

### Icon Sizes
- Small: `w-4 h-4` (16px)
- Regular: `w-5 h-5` (20px)
- Medium: `w-6 h-6` (24px)
- Large: `w-7 h-7` (28px)
- XL: `w-8 h-8` (32px)

### Icon Colors
- Primary action: `text-blue-600`
- Success: `text-green-600`
- Warning: `text-yellow-600`
- Error: `text-red-600`
- Neutral: `text-slate-600`

## 🎨 Visual Hierarchy

### Z-Index Layers
```css
Background patterns: z-0
Base content: z-10
Floating elements: z-20
Modals/overlays: z-30
Tooltips: z-40
```

### Opacity Scale
```css
Disabled: opacity-50
Secondary: opacity-70
Hover background: opacity-80
Active: opacity-100
```

## 💡 Best Practices

1. **Keep it Fast**: Use CSS animations over JavaScript
2. **Mobile First**: Design for mobile, enhance for desktop
3. **Accessibility**: Maintain contrast ratios, use semantic HTML
4. **Consistency**: Reuse patterns and components
5. **Performance**: Lazy load images, minimize bundle size
6. **Readability**: Maintain line height of 150% for body text
7. **White Space**: Don't be afraid of empty space
8. **Focal Points**: Guide the eye with size, color, and contrast

---

**This design system ensures consistency and quality across the entire landing page.**
