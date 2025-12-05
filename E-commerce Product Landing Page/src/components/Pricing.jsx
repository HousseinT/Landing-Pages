import { Check, Star, Shield, Truck, Award } from 'lucide-react';

const pricingFeatures = [
  '1.4" AMOLED Display',
  'Heart Rate & SpO2 Monitor',
  'Sleep Tracking & Analysis',
  '5ATM Waterproof Rating',
  '7-Day Battery Life',
  'Bluetooth 5.0 Connectivity',
  '100+ Sport Modes',
  'GPS Navigation',
  'Music Control',
  'Phone Notifications',
  'Weather Updates',
  'Find My Phone Feature',
];

const trustBadges = [
  { icon: Shield, text: '2-Year Warranty' },
  { icon: Truck, text: 'Free Shipping' },
  { icon: Award, text: '30-Day Returns' },
];

const Pricing = () => {
  return (
    <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTk2RjMiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold inline-block">
            Limited Time Offer
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
            Premium Quality,
            <span className="block text-blue-600">Unbeatable Price</span>
          </h2>
          <p className="text-xl text-slate-600">
            Get 30% off your SmartWatch Pro today
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-500 relative">
          <div className="absolute top-0 right-0 bg-gradient-to-br from-red-500 to-orange-500 text-white px-6 py-2 rounded-bl-3xl font-bold shadow-lg">
            SAVE $130
          </div>

          <div className="p-8 lg:p-12">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  SmartWatch Pro
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-slate-600 font-medium">4.9/5 (12,450 reviews)</span>
                </div>
              </div>
            </div>

            <div className="mb-8 pb-8 border-b border-slate-200">
              <div className="flex items-end gap-3 mb-2">
                <span className="text-5xl lg:text-6xl font-bold text-slate-900">
                  $299
                </span>
                <span className="text-3xl text-slate-400 line-through mb-2">
                  $429
                </span>
              </div>
              <p className="text-slate-600 text-lg">
                One-time payment. No subscriptions. No hidden fees.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                What's Included:
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-bold text-xl shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 hover:scale-105 mb-6">
              Get 30% Off Now - $299
            </button>

            <div className="grid sm:grid-cols-3 gap-4">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 justify-center p-3 bg-slate-50 rounded-xl"
                  >
                    <Icon className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-slate-700">
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="text-center text-slate-500 text-sm mt-6">
              🔥 Only 47 units left at this price! Offer ends in 48 hours.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Trusted by leading brands</p>
          <div className="flex items-center justify-center gap-8 grayscale opacity-50">
            <div className="text-2xl font-bold">TECH</div>
            <div className="text-2xl font-bold">HEALTH</div>
            <div className="text-2xl font-bold">SPORT</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
