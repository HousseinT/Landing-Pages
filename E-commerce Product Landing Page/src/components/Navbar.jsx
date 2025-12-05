import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState, memo } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1A2F]/90 backdrop-blur-md border-b border-white/10" role="navigation" aria-label="Primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">
              Watch<span className="text-[#FF7A1A]">Ultra</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-300 hover:text-[#FF7A1A] transition-colors duration-200 text-sm font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('specs')}
                className="text-gray-300 hover:text-[#FF7A1A] transition-colors duration-200 text-sm font-medium"
              >
                Specs
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-gray-300 hover:text-[#FF7A1A] transition-colors duration-200 text-sm font-medium"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="bg-gradient-to-r from-[#FF7A1A] to-[#FF9500] text-white px-6 py-2 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-[#FF7A1A]/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                Buy Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onKeyDown={(e) => {
                if (e.key === 'Escape') setIsOpen(false);
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-[#0A1A2F]/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-gray-300 hover:text-[#FF7A1A] transition-colors duration-200 py-2 text-sm font-medium"
              aria-label="Go to Features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('specs')}
              className="block w-full text-left text-gray-300 hover:text-[#FF7A1A] transition-colors duration-200 py-2 text-sm font-medium"
              aria-label="Go to Specifications"
            >
              Specs
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="block w-full text-left text-gray-300 hover:text-[#FF7A1A] transition-colors duration-200 py-2 text-sm font-medium"
              aria-label="Go to Reviews"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="w-full bg-gradient-to-r from-[#FF7A1A] to-[#FF9500] text-white px-6 py-2 rounded-full font-semibold text-sm mt-2"
              aria-label="Go to Pricing"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default memo(Navbar);
