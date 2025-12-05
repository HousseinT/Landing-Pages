import { Check } from 'lucide-react';
import Button from '../ui/Button.jsx';
import Container from '../ui/Container.jsx';
import SectionWrapper from '../ui/SectionWrapper.jsx';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 10 team members',
      '50GB storage',
      'Basic analytics',
      'Email support',
      'API access',
      'Mobile app access'
    ],
    highlighted: false
  },
  {
    name: 'Pro',
    price: '$79',
    description: 'Best for growing teams and businesses',
    features: [
      'Unlimited team members',
      '500GB storage',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Mobile app access',
      'Custom integrations',
      'SSO authentication',
      'Advanced security'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with specific needs',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'Dedicated support',
      'Custom contracts',
      'SLA guarantee',
      'Advanced permissions',
      'Audit logs',
      'On-premise deployment'
    ],
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <SectionWrapper background="gray">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'shadow-2xl scale-105 border-2 border-blue-500 relative'
                  : 'shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-gray-600 mb-2">/month</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? 'primary' : 'outline'}
                className="w-full"
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-12">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </Container>
    </SectionWrapper>
  );
}
