import { Zap, Shield, Globe, BarChart, Users, Smartphone } from 'lucide-react';
import Container from '../ui/Container.jsx';
import SectionWrapper from '../ui/SectionWrapper.jsx';
import Card from '../ui/Card.jsx';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built for speed with optimized performance and edge caching. Your users will love the experience.'
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Enterprise-grade security with SOC 2 compliance, encryption at rest, and regular audits.'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy to 30+ regions worldwide with automatic failover and 99.99% uptime guarantee.'
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics',
    description: 'Real-time insights and detailed reporting to understand your users and grow faster.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with built-in collaboration tools and role-based permissions.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    description: 'Fully responsive design that works perfectly on any device, from desktop to mobile.'
  }
];

export default function Features() {
  return (
    <SectionWrapper background="white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to help you build, launch, and scale your product faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} hover={true}>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
