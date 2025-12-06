import React from 'react';
import { Mountain, Droplets, Battery, Gauge, Heart, MapPin } from 'lucide-react';
import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = useMemo(() => [
    {
      icon: Mountain,
      title: 'Adventure Ready',
      description: 'Built for extreme conditions with military-grade durability and enhanced GPS for precise tracking in any terrain.',
    },
    {
      icon: Droplets,
      title: '100M Water Resistant',
      description: 'Dive deeper with WR100 certification. Perfect for recreational scuba diving, water sports, and swimming.',
    },
    {
      icon: Battery,
      title: 'Extended Battery',
      description: 'Up to 36 hours of normal use or 72 hours in Low Power Mode. Adventure without limits.',
    },
    {
      icon: Gauge,
      title: 'Precision Dual-GPS',
      description: 'L1 and L5 GPS delivers the most accurate location tracking for outdoor workouts and navigation.',
    },
    {
      icon: Heart,
      title: 'Advanced Health',
      description: 'Track heart rate, blood oxygen, ECG, temperature, and sleep stages with clinical-grade sensors.',
    },
    {
      icon: MapPin,
      title: 'Action Button',
      description: 'Customizable button for instant access to workouts, flashlight, waypoints, and dive computer.',
    },
  ], []);

  return (
    <motion.section id="features" className="py-20 sm:py-24 bg-gradient-to-b from-[#0A1A2F] to-[#0F2847] relative overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-20 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16 space-y-4" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Engineered for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A1A] to-[#FF9500]"> Extremes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every feature designed to push boundaries and elevate performance in the most demanding environments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#FF7A1A]/20   hover:border-[#FF7A1A]/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF7A1A] to-[#FF9500]  rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default memo(Features);
