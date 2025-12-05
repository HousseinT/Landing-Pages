import React from 'react';
import { Check, ShoppingCart, Zap, Shield, Truck } from 'lucide-react';
import { memo, useMemo } from 'react';

const Pricing = () => {
  const benefits = useMemo(() => [
    { icon: Zap, text: 'Free 2-day shipping' },
    { icon: Shield, text: '2-year warranty included' },
    { icon: Truck, text: 'Free returns within 30 days' },
  ], []);

  const included = useMemo(() => [
    'Apple Watch Ultra 2 (49mm)',
    'Orange Ocean Band',
    'Magnetic USB-C Charging Cable',
    '2-Year Limited Warranty',
    'Technical Support & Setup',
    'Cellular Connectivity Ready',
  ], []);

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-[#0A1A2F] to-[#0F2847] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-[#FF7A1A] rounded-full filter blur-[150px]"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Own the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A1A] to-[#FF9500]"> Ultimate</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Invest in precision engineering and unmatched performance.
          </p>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Apple Watch Ultra 2
                </h3>
                <p className="text-gray-400">Titanium with Orange Ocean Band</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-white">$799</span>
                  <span className="text-gray-400 text-lg line-through">$899</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-[#FF7A1A]/20 border border-[#FF7A1A]/50 rounded-full px-4 py-2 mt-4">
                  <Zap size={16} className="text-[#FF7A1A]" />
                  <span className="text-sm text-[#FF7A1A] font-semibold">Limited Time Offer - Save $100</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#FF7A1A] to-[#FF9500] text-white px-8 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#FF7A1A]/50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 mb-6 group" aria-label="Add Apple Watch Ultra 2 to cart">
                <ShoppingCart size={24} />
                Add to Cart
                <div className="w-0 group-hover:w-2 h-2 bg-white rounded-full transition-all duration-300"></div>
              </button>

              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <div className="w-10 h-10 bg-[#FF7A1A]/20 rounded-lg flex items-center justify-center">
                      <benefit.icon size={20} className="text-[#FF7A1A]" />
                    </div>
                    <span className="font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-white mb-6">What's Included</h4>
              <ul className="space-y-4">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#FF7A1A] to-[#FF9500] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">256</div>
                <div className="text-sm text-gray-400">Payment Options</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">SSL</div>
                <div className="text-sm text-gray-400">Secure Checkout</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-gray-400">Customer Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Questions? Contact our sales team at{' '}
            <a href="mailto:sales@watchultra.com" className="text-[#FF7A1A] hover:underline">
              sales@watchultra.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(Pricing);
