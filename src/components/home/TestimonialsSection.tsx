
import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import TestimonialCard from '../ui/TestimonialCard';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Developer",
    company: "TechSolutions India",
    content: "The Web Development Bootcamp transformed my career. I went from knowing basic HTML to building full-stack applications in just 12 weeks. The instructors were incredibly supportive and the community is amazing.",
    rating: 5,
    program: "Web Development Bootcamp",
  },
  {
    name: "Rajesh Patel",
    role: "Marketing Manager",
    company: "Global Brands Ltd",
    content: "EduKnit's Digital Marketing course provided practical knowledge I could immediately apply to my job. Within two months of completing the program, I was able to increase our company's online engagement by 45%.",
    rating: 5,
    program: "Digital Marketing Fundamentals",
  },
  {
    name: "Anika Gupta",
    role: "Project Manager",
    content: "The Communication Skills program helped me overcome my fear of public speaking. Now I confidently lead team meetings and client presentations. This course was truly life-changing for my professional growth.",
    rating: 4,
    program: "Public Speaking Mastery",
  },
  {
    name: "Vikram Singh",
    role: "Data Analyst",
    company: "FinTech Solutions",
    content: "As someone transitioning careers, the Data Science Essentials course gave me exactly what I needed. The curriculum was comprehensive and the hands-on projects prepared me for real-world challenges.",
    rating: 5,
    program: "Data Science Essentials",
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-eduBlue-50 to-eduBlue-100 dark:from-gray-800 dark:to-gray-900">
      <div className="edu-container">
        <SectionHeader 
          title="Student Success Stories" 
          subtitle="Hear from our graduates who have transformed their careers with EduKnit"
          titleClassName="text-eduBlue-800 dark:text-white"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
