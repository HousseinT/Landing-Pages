import { Heart, Moon, Droplet, Bluetooth, Battery, Activity } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Heart Rate Monitor',
    description: 'Real-time heart rate tracking with advanced sensors for accurate health insights.',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    icon: Moon,
    title: 'Sleep Tracking',
    description: 'Comprehensive sleep analysis to help you wake up refreshed and energized.',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Droplet,
    title: '5ATM Waterproof',
    description: 'Swim, shower, and dive with confidence. Tested for 50 meters underwater.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Bluetooth,
    title: 'Bluetooth 5.0',
    description: 'Seamless connectivity with your devices for calls, music, and notifications.',
    gradient: 'from-teal-500 to-emerald-500',
  },
  {
    icon: Battery,
    title: '7-Day Battery',
    description: 'Extended battery life means less charging and more tracking your goals.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Activity,
    title: '100+ Sport Modes',
    description: 'From running to yoga, track every activity with precision and detail.',
    gradient: 'from-green-500 to-lime-500',
  },
];

const Features = () => {
  return (
    <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20 space-y-4">
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold inline-block">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
            Everything You Need,
            <span className="block text-blue-600">On Your Wrist</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Packed with cutting-edge technology to keep you healthy, active, and connected.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
