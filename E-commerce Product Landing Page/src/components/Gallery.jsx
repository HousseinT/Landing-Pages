import { Maximize2 } from 'lucide-react';

const galleryImages = [
  {
    title: 'Sleek Design',
    description: 'Premium materials meet modern aesthetics',
    color: 'from-slate-700 to-slate-900',
    icon: '⌚',
  },
  {
    title: 'Active Lifestyle',
    description: 'Built for every adventure',
    color: 'from-blue-600 to-cyan-600',
    icon: '🏃',
  },
  {
    title: 'Water Resistant',
    description: 'Take it anywhere, do anything',
    color: 'from-teal-600 to-emerald-600',
    icon: '💧',
  },
  {
    title: 'Always Connected',
    description: 'Stay in touch with what matters',
    color: 'from-purple-600 to-pink-600',
    icon: '📱',
  },
];

const Gallery = () => {
  return (
    <section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20 space-y-4">
          <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-sm font-semibold inline-block">
            Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Designed to Impress,
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Built to Perform
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Every detail crafted with precision for the perfect balance of style and functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${image.color} aspect-[4/3] cursor-pointer transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>

              <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {image.icon}
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">
                  {image.title}
                </h3>
                <p className="text-white/80 text-lg">
                  {image.description}
                </p>

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-3xl transition-colors duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700">
            <p className="text-4xl font-bold text-white mb-2">1.4"</p>
            <p className="text-slate-400">AMOLED Display</p>
          </div>
          <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700">
            <p className="text-4xl font-bold text-white mb-2">42mm</p>
            <p className="text-slate-400">Case Diameter</p>
          </div>
          <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700">
            <p className="text-4xl font-bold text-white mb-2">32g</p>
            <p className="text-slate-400">Ultra Lightweight</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
