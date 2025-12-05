import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Container from '../ui/Container.jsx';
import SectionWrapper from '../ui/SectionWrapper.jsx';

const faqs = [
  {
    question: 'How does the free trial work?',
    answer: 'You get full access to all features for 14 days with no credit card required. After the trial ends, you can choose a plan that fits your needs or continue with our free tier.'
  },
  {
    question: 'Can I change my plan later?',
    answer: "Absolutely! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately, and we'll prorate any charges or credits accordingly."
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. Enterprise customers can also request invoice billing.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, security is our top priority. We use bank-level encryption, are SOC 2 Type II compliant, and regularly undergo third-party security audits. Your data is encrypted both in transit and at rest.'
  },
  {
    question: 'Do you offer refunds?',
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days, contact our support team for a full refund, no questions asked."
  },
  {
    question: 'Can I integrate with other tools?',
    answer: 'Yes! We offer integrations with 100+ popular tools including Slack, GitHub, Jira, and more. We also provide a robust API and webhooks for custom integrations.'
  }
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-blue-600 transition-colors"
      >
        <span className="text-lg font-semibold text-gray-900 pr-8">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <SectionWrapper background="gray">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our platform and billing.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              Contact our support team →
            </button>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
