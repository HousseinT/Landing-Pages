import React from 'react';
import { Star, Quote } from 'lucide-react';
import { memo } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Marcus Chen',
      role: 'Professional Triathlete',
      rating: 5,
      text: 'The Ultra 2 has completely transformed my training. The dual-GPS accuracy is unmatched, and the battery life gets me through the longest races without worry.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Ocean Explorer',
      rating: 5,
      text: 'As a dive instructor, I need equipment I can trust. The depth gauge and water temperature sensor are incredibly accurate. This watch is a true dive computer on my wrist.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'David Torres',
      role: 'Mountain Guide',
      rating: 5,
      text: "I've taken the Ultra 2 to Everest base camp and beyond. The titanium build handles extreme conditions, and the action button is a game-changer for quick access to waypoints.",
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Ultra Runner',
      rating: 5,
      text: 'The health monitoring features are phenomenal. Real-time heart rate zones, blood oxygen tracking, and temperature sensing help me optimize every training session.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'James Wilson',
      role: 'Adventure Photographer',
      rating: 5,
      text: 'Durability meets elegance. The titanium finish looks premium while surviving harsh outdoor shoots. The bright display is perfectly readable even in direct sunlight.',
      image: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Nina Patel',
      role: 'Fitness Coach',
      rating: 5,
      text: 'My clients love tracking their progress with Ultra 2. The detailed workout metrics and recovery insights make it the perfect tool for serious athletes.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  return (
    <motion.section id="reviews" className="py-20 sm:py-24 bg-gradient-to-b from-[#0A1A2F] via-[#0F2847] to-[#0A1A2F] relative overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-40 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16 space-y-4" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Trusted by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A1A] to-[#FF9500]"> Professionals</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of athletes and adventurers who rely on Ultra 2 every day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <Quote className="absolute top-6 right-6 text-[#FF7A1A]/20 group-hover:text-[#FF7A1A]/40 transition-colors" size={40} />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#FF7A1A]/50"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 30vw, 16vw"
                />
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#FF7A1A] text-[#FF7A1A]" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-12 py-8">
            <div>
              <div className="text-4xl font-bold text-white">4.9</div>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#FF7A1A] text-[#FF7A1A]" />
                ))}
              </div>
            </div>
            <div className="h-16 w-px bg-white/20"></div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">12,500+</div>
              <div className="text-sm text-gray-400">Verified Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default memo(Testimonials);
