import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marathon Runner',
    image: '🏃‍♀️',
    rating: 5,
    text: 'This smartwatch completely transformed my training. The accuracy of the heart rate monitor and GPS tracking is incredible. I improved my marathon time by 15 minutes!',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    image: '👨‍💻',
    rating: 5,
    text: 'As someone who sits all day, the activity reminders and stress monitoring have been life-changing. Plus, the battery lasts way longer than my old smartwatch.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Fitness Coach',
    image: '💪',
    rating: 5,
    text: "I recommend this to all my clients. The sleep tracking insights are incredibly detailed, and the waterproof feature means I never have to take it off. It's worth every penny.",
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'David Park',
    role: 'Business Owner',
    image: '👔',
    rating: 5,
    text: 'Staying connected without being glued to my phone has been amazing for work-life balance. The notifications work perfectly and the design looks professional.',
    color: 'from-orange-500 to-red-500',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-50 rounded-full mix-blend-multiply filter blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20 space-y-4">
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold inline-block">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
            Loved by Thousands
            <span className="block text-blue-600">Around the World</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers say.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <Quote className="w-10 h-10 text-blue-600 opacity-20 mb-4" />

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-slate-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Join Our Community
              </h3>
              <p className="text-xl text-slate-600 max-w-xl">
                Be part of a growing community of health-conscious individuals transforming their lives.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <p className="text-4xl font-bold text-blue-600 mb-1">50K+</p>
                <p className="text-slate-600 text-sm">Active Users</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <p className="text-4xl font-bold text-blue-600 mb-1">4.9</p>
                <p className="text-slate-600 text-sm">Average Rating</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <p className="text-4xl font-bold text-blue-600 mb-1">99%</p>
                <p className="text-slate-600 text-sm">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
