import { CheckCircle2, TrendingUp, Shield, Zap } from 'lucide-react';

const benefits = [
  {

    icon: TrendingUp,
    title: 'Transform Your Fitness Journey',
    description: 'Stop guessing about your progress. Get real-time insights into your workouts, recovery, and performance metrics. Make every session count with data-driven training.',
    stats: '95% of users report better fitness results',
  },
  {
    icon: Shield,
    title: 'Take Control of Your Health',
    description: 'Early detection saves lives. Monitor your heart rate, blood oxygen, and stress levels 24/7. Receive instant alerts when something needs attention.',
    stats: 'Detect health issues up to 2 weeks earlier',
  },
  {
    icon: Zap,
    title: 'Never Miss What Matters',
    description: 'Stay connected without being chained to your phone. Receive calls, messages, and notifications on your wrist. Focus on the moment while staying informed.',
    stats: 'Save 2+ hours daily from phone distractions',
  },
];

const Benefits = () => {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20 space-y-4">
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold inline-block">
            Benefits
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
            Why Choose
            <span className="block text-blue-600">SmartWatch Pro</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            More than just a watch. It's your personal health coach, fitness trainer, and life assistant.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-16 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg ${isEven ? '' : 'lg:ml-auto'}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="text-lg text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>

                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>{benefit.stats}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-12 shadow-xl border border-slate-200">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                      <div className="text-8xl">
                        {index === 0 ? '💪' : index === 1 ? '❤️' : '📲'}
                      </div>
                    </div>

                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full opacity-20 blur-2xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full opacity-20 blur-2xl"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 lg:p-12 text-center shadow-2xl">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Join 50,000+ Happy Customers
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Experience the difference a truly smart watch can make in your daily life.
          </p>
          <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
