import React from 'react';
import { ShoppingCart, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const MobileStickyCTA = () => {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      role="toolbar"
      aria-label="Sticky purchase options"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0A1A2F]/95 backdrop-blur-md border-t border-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
        <div className="text-white font-semibold mr-auto">$799</div>
        <button
          onClick={scrollToPricing}
          aria-label="Buy Now — $799"
          className="bg-gradient-to-r from-[#FF7A1A] to-[#FF9500] text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2"
        >
          <CreditCard size={16} /> Buy Now
        </button>
        <button
          onClick={scrollToPricing}
          aria-label="Add to Cart"
          className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2"
        >
          <ShoppingCart size={16} /> Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default MobileStickyCTA;
