import { Star } from 'lucide-react';
import Container from '../ui/Container.jsx';
import SectionWrapper from '../ui/SectionWrapper.jsx';
import Card from '../ui/Card.jsx';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStart',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    text: 'This platform completely transformed how we build products. We shipped our MVP in just 3 weeks instead of 3 months. The ROI has been incredible.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager at Growth Co',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    text: 'The best investment we made this year. Our team productivity increased by 40%, and our customers love the new features we can now deliver quickly.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'CTO at Innovate Labs',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    text: 'I was skeptical at first, but the results speak for themselves. We reduced our infrastructure costs by 60% while improving performance. Highly recommended!',
    rating: 5
  },
  {
    name: 'David Kim',
    role: 'Founder at StartupXYZ',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    text: 'Game-changer for our startup. The scalability and ease of use allowed us to focus on what matters most - building great products for our customers.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <SectionWrapper background="white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Loved by thousands of teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hover={true}>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="48"
                  height="48"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
