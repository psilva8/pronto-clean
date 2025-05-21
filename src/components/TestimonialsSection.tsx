import React from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  position?: string;
  content: string;
  image?: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  cityName?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  title = "What Our Customers Say",
  subtitle = "Read testimonials from our satisfied customers",
  cityName = ""
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              {testimonial.rating && (
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating! ? "text-yellow-400" : "text-gray-300"}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}
              
              <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                {testimonial.image && (
                  <div className="mr-4">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      width={48} 
                      height={48} 
                      className="rounded-full"
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  {testimonial.position && (
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 