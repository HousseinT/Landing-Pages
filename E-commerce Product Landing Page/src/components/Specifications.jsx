import React from 'react';
import { Check } from 'lucide-react';
import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';

const Specifications = () => {
  const specs = useMemo(() => [
    {
      category: 'Display',
      items: [
        'Always-On Retina LTPO OLED',
        '502 × 410 pixels (49mm)',
        '3000 nits peak brightness',
        'Sapphire crystal front',
      ],
    },
    {
      category: 'Materials',
      items: [
        'Aerospace-grade titanium',
        'Ceramic and sapphire back',
        'Ocean Band (fluoroelastomer)',
        'Corrosion resistant',
      ],
    },
    {
      category: 'Sensors',
      items: [
        'Blood oxygen sensor',
        'ECG app',
        'Third-generation optical heart sensor',
        'Water temperature sensor',
        'Depth gauge',
      ],
    },
    {
      category: 'Performance',
      items: [
        'S9 SiP with custom Apple silicon',
        '64GB storage capacity',
        'W3 wireless chip',
        'U2 chip (Ultra Wideband)',
      ],
    },
    {
      category: 'Connectivity',
      items: [
        'GPS + Cellular',
        'Dual-frequency GPS (L1 and L5)',
        'Wi-Fi 6 (802.11ax)',
        'Bluetooth 5.3',
      ],
    },
    {
      category: 'Battery & Charging',
      items: [
        '36 hours normal use',
        '72 hours Low Power Mode',
        'Fast charging capable',
        'Magnetic USB-C charging',
      ],
    },
  ], []);

  return (
    <motion.section id="specs" className="py-20 sm:py-24 bg-gradient-to-b from-[#0F2847] to-[#0A1A2F] relative overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#FF7A1A] rounded-full filter blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16 space-y-4" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Technical
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6D6D6] to-[#FF7A1A]"> Specifications</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Precision engineering meets cutting-edge technology. Every detail matters.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8  hover:border-[#FF7A1A]/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <h3 className="text-2xl font-bold  text-white mb-6 flex items-center gap-2" >
                <div className="w-1.5 h-8 bg-gradient-to-b from-[#FF7A1A] to-[#FF9500] rounded-full"></div>
                {spec.category}
              </h3>
              <ul className="space-y-3">
                {spec.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <Check size={18} className="text-[#FF7A1A] mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-16 bg-gradient-to-r from-[#FF7A1A]/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Certified for Extreme Conditions
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                MIL-STD 810H certified, IP6X dust resistant, and tested to endure the harshest environments.
                From mountain peaks to ocean depths, Ultra 2 is your ultimate companion.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                  <div className="text-lg font-bold text-white">-20°C</div>
                  <div className="text-xs text-gray-400">Operating Temp</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                  <div className="text-lg font-bold text-white">+55°C</div>
                  <div className="text-xs text-gray-400">Max Temp</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                  <div className="text-lg font-bold text-white">9000m</div>
                  <div className="text-xs text-gray-400">Altitude</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A1A] to-blue-500 rounded-full filter blur-2xl opacity-30"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-[#8B8B8B] via-[#D6D6D6] to-[#A8A8A8] rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-2">MIL-STD</div>
                    <div className="text-lg">810H</div>
                    <div className="text-xs text-gray-300 mt-2">CERTIFIED</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(Specifications);
