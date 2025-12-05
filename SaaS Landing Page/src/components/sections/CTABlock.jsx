import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button.jsx';
import Container from '../ui/Container.jsx';
import SectionWrapper from '../ui/SectionWrapper.jsx';

export default function CTABlock() {
  return (
    <SectionWrapper background="gradient">
      <Container>
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to transform your workflow?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already building amazing products with our platform. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <button className="px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
              Contact Sales
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
