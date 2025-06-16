
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const TestimonialsSection: React.FC = () => {
  const { effectiveTheme } = useTheme();

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CTO, TechStart Inc',
      company: 'TechStart Inc',
      content: 'Exceptional developer who delivered our e-commerce platform ahead of schedule. The integration with payment gateways was flawless and the code quality is outstanding.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Product Manager',
      company: 'Digital Solutions',
      content: 'Working with this developer was a game-changer for our project. They solved complex API integration challenges and delivered a scalable solution that exceeded our expectations.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Founder',
      company: 'StartupXYZ',
      content: 'The attention to detail and problem-solving skills are remarkable. Our real-time collaboration app was built with precision and the performance optimizations were incredible.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'David Kim',
      position: 'Tech Lead',
      company: 'Enterprise Corp',
      content: 'Outstanding technical expertise and communication. The microservices architecture they designed handles our traffic beautifully and the code is maintainable and clean.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className={`py-20 relative ${
      effectiveTheme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900/50 via-purple-900/30 to-blue-900/50' 
        : 'bg-gradient-to-br from-purple-50 to-blue-50'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className={`text-xl ${
            effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            What clients say about working with me
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className={`rounded-2xl shadow-xl p-8 md:p-12 text-center ${
            effectiveTheme === 'dark' 
              ? 'bg-gray-800/80 border border-purple-700/30' 
              : 'bg-white'
          }`}>
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            <blockquote className={`text-lg md:text-xl mb-8 leading-relaxed ${
              effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
            }`}>
              "{currentTestimonial.content}"
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <h4 className={`text-lg font-bold ${
                  effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}>{currentTestimonial.name}</h4>
                <p className={`${
                  effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>{currentTestimonial.position}</p>
                <p className="text-sm text-purple-600 font-semibold">{currentTestimonial.company}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={prevTestimonial}
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 ${
                  effectiveTheme === 'dark' 
                    ? 'bg-gray-800/80 hover:bg-gray-700/80 text-gray-200 border border-purple-700/30' 
                    : 'bg-white hover:bg-gray-50 text-gray-600'
                }`}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 ${
                  effectiveTheme === 'dark' 
                    ? 'bg-gray-800/80 hover:bg-gray-700/80 text-gray-200 border border-purple-700/30' 
                    : 'bg-white hover:bg-gray-50 text-gray-600'
                }`}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-purple-600 scale-125'
                    : effectiveTheme === 'dark' 
                      ? 'bg-gray-600 hover:bg-gray-500' 
                      : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
