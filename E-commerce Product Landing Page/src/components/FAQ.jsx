import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How long does the battery last?',
    answer: 'The SmartWatch Pro offers up to 7 days of battery life on a single charge with typical use. Heavy GPS usage may reduce battery life to 3-4 days. It charges fully in just 2 hours using the included magnetic charger.',
  },
  {
    question: 'Is it compatible with both iOS and Android?',
    answer: 'Yes! The SmartWatch Pro works seamlessly with both iOS 12+ and Android 6.0+ devices. Download our free companion app from the App Store or Google Play to unlock all features and customization options.',
  },
  {
    question: 'Can I swim with the watch?',
    answer: 'Absolutely! With a 5ATM waterproof rating, you can wear your SmartWatch Pro while swimming, showering, or diving up to 50 meters deep. It also includes dedicated swim tracking modes for pool and open water swimming.',
  },
  {
    question: 'What sports and activities can it track?',
    answer: 'The watch includes 100+ sport modes covering everything from running, cycling, and swimming to yoga, hiking, and strength training. It automatically detects common activities and provides detailed metrics for each workout.',
  },
  {
    question: 'Does it have GPS?',
    answer: 'Yes, the SmartWatch Pro features built-in GPS, GLONASS, and Galileo positioning systems for accurate tracking of your outdoor activities without needing your phone. Perfect for runners, cyclists, and hikers.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not completely satisfied, return your SmartWatch Pro in its original condition for a full refund. We also include a 2-year manufacturer warranty covering defects.',
  },
  {
    question: 'Can I receive calls and notifications?',
    answer: 'Yes! When connected to your phone via Bluetooth, you can receive calls, text messages, app notifications, and even control music playback. You can also reject calls or send quick replies directly from the watch.',
  },
  {
    question: 'How accurate is the heart rate monitor?',
    answer: 'Our advanced PPG sensor provides medical-grade accuracy for heart rate monitoring. It tracks your heart rate 24/7, alerts you to abnormal readings, and provides detailed heart rate zone analysis during workouts.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold inline-block">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
            Questions?
            <span className="block text-blue-600">We Have Answers</span>
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about the SmartWatch Pro
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 lg:px-8 py-6 flex items-start justify-between gap-4 text-left group"
                >
                  <span className="text-lg lg:text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors flex-1">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 lg:px-8 pb-6">
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-xl text-slate-300 mb-8">
            Our support team is here to help you 24/7
          </p>
          <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
