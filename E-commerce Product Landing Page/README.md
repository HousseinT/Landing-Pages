# 🛍️ SmartWatch Pro - E-commerce Product Landing Page

A modern, responsive e-commerce landing page for SmartWatch Pro, built with React and Tailwind CSS. This project showcases a complete product presentation with features, pricing, testimonials, and more.

![React](https://img.shields.io/badge/React-18.3.1-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38bdf8.svg)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646cff.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 🎯 Project Overview

SmartWatch Pro Landing Page is a high-converting e-commerce website designed to showcase a premium smartwatch product. Built with modern web technologies, it features smooth animations, responsive design, and an optimized user experience that drives conversions.

### ✨ Key Features

- **Modern Design System**: Comprehensive color palette, typography, and component patterns
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: CSS-based animations for enhanced user experience
- **Component Architecture**: Modular React components for maintainability
- **Performance Optimized**: Built with Vite for fast development and production builds
- **SEO Ready**: Semantic HTML structure and meta tags
- **Accessibility**: ARIA labels and keyboard navigation support

### 🎨 Design Highlights

- **Color Scheme**: Deep navy primary colors with electric blue and bright cyan accents
- **Typography**: Inter font family with consistent sizing and weights
- **Animations**: Fade-in effects, floating elements, and smooth transitions
- **Visual Hierarchy**: Clear content organization with proper spacing and contrast

## 🚀 Technologies Used

### Core Technologies
- **React 18.3.1** - Modern UI library for building user interfaces
- **Tailwind CSS 3.4.1** - Utility-first CSS framework for rapid UI development
- **Vite 5.4.2** - Fast build tool for modern web development
- **PostCSS** - CSS processing and optimization

### Dependencies
- **Lucide React** - Beautiful & consistent icon pack
- **Supabase** - Backend services for data management

### Development Tools
- **ESLint** - Code linting for consistent code quality
- **Autoprefixer** - Automatic vendor prefixing for CSS
- **ESLint React Plugins** - React-specific linting rules

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** (version 7.0 or higher) or **yarn** (version 1.22 or higher)
- **Git** (for version control)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/smartwatch-pro-landing.git
cd smartwatch-pro-landing
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env` file in the root directory and add your environment variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> **Note**: Replace the placeholder values with your actual Supabase credentials.

## 🏃‍♂️ Usage Guide

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build the project for production:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

### Code Linting

Run ESLint to check code quality:

```bash
npm run lint
# or
yarn lint
```

## 📁 Project Structure

```
smartwatch-pro-landing/
├── src/
│   ├── components/          # React components
│   │   ├── Hero.jsx        # Hero section with main CTA
│   │   ├── Features.jsx    # Product features showcase
│   │   ├── Gallery.jsx    # Product image gallery
│   │   ├── Benefits.jsx    # Product benefits section
│   │   ├── Pricing.jsx    # Pricing tiers and plans
│   │   ├── Testimonials.jsx # Customer reviews
│   │   ├── FAQ.jsx       # Frequently asked questions
│   │   └── Footer.jsx    # Footer with links and info
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles and Tailwind imports
├── dist/                 # Production build output
├── public/               # Static assets
├── .env                  # Environment variables
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── eslint.config.js      # ESLint configuration
├── DESIGN_SYSTEM.md      # Design system documentation
├── QUICK_START.md        # Quick start guide
└── LICENSE               # Project license
```

### Component Overview

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| **Hero** | Main landing section | Headline, CTA buttons, product showcase |
| **Features** | Product features | Grid layout, icon integration, hover effects |
| **Gallery** | Product images | Image carousel, responsive layout |
| **Benefits** | Product benefits | Card-based layout, animations |
| **Pricing** | Pricing plans | Tier comparison, feature lists |
| **Testimonials** | Customer reviews | Star ratings, customer photos |
| **FAQ** | Common questions | Accordion-style, expandable items |
| **Footer** | Site footer | Links, contact info, social media |

## 🎨 Design System

This project follows a comprehensive design system documented in `DESIGN_SYSTEM.md`. Key elements include:

### Color Palette
- **Primary**: Deep Navy (#1e293b), Electric Blue (#2563eb), Bright Cyan (#0891b2)
- **Secondary**: Light Background (#f8fafc), White (#ffffff)
- **Gradients**: Hero gradient, CTA gradient, accent gradients

### Typography
- **Font Family**: Inter (weights: 400, 500, 600, 700, 800, 900)
- **Text Sizes**: Responsive scaling from mobile to desktop
- **Hierarchy**: Clear visual hierarchy with consistent spacing

### Animation System
- **Fade Effects**: Fade-in and fade-in-up animations
- **Floating Elements**: Blob animations and hover effects
- **Transitions**: Smooth color and transform transitions

For complete design system documentation, see [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md).

## 🤝 Contribution Guidelines

We welcome contributions! Please follow these guidelines:

### Code Style Requirements

1. **ESLint Configuration**: Follow the project's ESLint rules
2. **Component Structure**: Use functional components with hooks
3. **Naming Conventions**:
   - Components: PascalCase (e.g., `Hero.jsx`)
   - Functions/Variables: camelCase (e.g., `handleClick`)
   - Constants: UPPER_SNAKE_CASE (e.g., `API_URL`)

### Commit Message Conventions

Follow the Conventional Commits specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:
```
feat(hero): add animated headline
fix(pricing): correct pricing calculation
docs(readme): update installation instructions
```

### Pull Request Process

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request with a clear description

### Code Review Checklist

- [ ] Code follows project style guidelines
- [ ] Components are properly documented
- [ ] Responsive design is implemented
- [ ] Animations work smoothly
- [ ] No console errors or warnings
- [ ] Performance is optimized
- [ ] Accessibility standards are met

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tailwind CSS** for the amazing utility-first framework
- **Lucide** for the beautiful icon library
- **Vite** for the lightning-fast build tool
- **React** for the powerful UI library

## 📞 Support

If you have any questions or need help with the project:

1. Check the [Quick Start Guide](QUICK_START.md)
2. Review the [Design System](DESIGN_SYSTEM.md)
3. Open an issue on GitHub
4. Contact the development team

---

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by the SmartWatch Pro Team