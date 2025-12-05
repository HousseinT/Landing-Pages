import { ArrowRight, Play } from 'lucide-react';
import Button from '../ui/Button.jsx';
import Container from '../ui/Container.jsx';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 motion-safe:animate-pulse"></span>
              Now live with AI-powered features
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build, ship, and scale your SaaS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> faster than ever</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The all-in-one platform that helps modern teams build amazing products.
              From idea to launch in days, not months.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="primary">
                Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Play className="mr-2 w-5 h-5" /> Watch Demo
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-8 justify-center lg:justify-start text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No credit card required
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                14-day free trial
              </div>
            </div>
          </div>

          <div className="relative lg:block">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="h-4 bg-gradient-to-r from-blue-400 to-blue-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-teal-400 to-teal-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-400 to-blue-200 rounded w-2/3"></div>
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg"></div>
                      <div className="h-20 bg-gradient-to-br from-teal-100 to-teal-50 rounded-lg"></div>
                      <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg"></div>
                    </div>
                    <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 motion-safe:animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 motion-safe:animate-pulse"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
