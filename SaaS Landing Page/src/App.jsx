import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import Navbar from './components/sections/Navbar.jsx';
import Hero from './components/sections/Hero.jsx';

const FeaturesLazy = lazy(() => import('./components/sections/Features.jsx'));
const CTABlockLazy = lazy(() => import('./components/sections/CTABlock.jsx'));
const PricingLazy = lazy(() => import('./components/sections/Pricing.jsx'));
const TestimonialsLazy = lazy(() => import('./components/sections/Testimonials.jsx'));
const FAQLazy = lazy(() => import('./components/sections/FAQ.jsx'));
const FooterLazy = lazy(() => import('./components/sections/Footer.jsx'));

function LazySection({ children, height = 600 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref}>
      {visible ? (
        <Suspense fallback={<div style={{ minHeight: height }} />}>{children}</Suspense>
      ) : (
        <div style={{ minHeight: height }} />
      )}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="features">
        <LazySection height={800}>
          <FeaturesLazy />
        </LazySection>
      </div>
      <LazySection height={500}>
        <CTABlockLazy />
      </LazySection>
      <div id="pricing">
        <LazySection height={900}>
          <PricingLazy />
        </LazySection>
      </div>
      <div id="testimonials">
        <LazySection height={900}>
          <TestimonialsLazy />
        </LazySection>
      </div>
      <div id="faq">
        <LazySection height={800}>
          <FAQLazy />
        </LazySection>
      </div>
      <LazySection height={400}>
        <FooterLazy />
      </LazySection>
    </div>
  );
}

export default App;
