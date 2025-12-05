import React from 'react';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Features = lazy(() => import('./components/Features'));
const Specifications = lazy(() => import('./components/Specifications'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Pricing = lazy(() => import('./components/Pricing'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <main id="main" role="main" className="min-h-screen bg-[#0A1A2F]">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="text-white px-4 py-8">Loading…</div>}>
        <Features />
        <Specifications />
        <Testimonials />
        <Pricing />
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;
