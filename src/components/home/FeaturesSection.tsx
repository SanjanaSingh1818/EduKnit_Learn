
import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { Card, CardContent } from '../ui/card';
import { Laptop, Book, Users, MessageSquare, Award, Clock, Globe, BookOpen } from 'lucide-react';

const features = [
  {
    title: "Personalized Learning Paths",
    description: "Customize your education journey with AI-driven recommendations tailored to your goals, skill level, and learning style.",
    icon: Laptop,
    color: "eduBlue"
  },
  {
    title: "Expert Mentorship",
    description: "Connect with industry professionals who provide personalized guidance, feedback, and career advice to accelerate your growth.",
    icon: Users,
    color: "eduOrange"
  },
  {
    title: "Project-Based Learning",
    description: "Apply your knowledge to real-world projects that build your portfolio and demonstrate your skills to potential employers.",
    icon: Book,
    color: "eduBlue"
  },
  {
    title: "Community Support",
    description: "Join a vibrant network of peers, alumni, and mentors who collaborate, share insights, and motivate each other to succeed.",
    icon: MessageSquare,
    color: "eduOrange"
  },
  {
    title: "Industry-Recognized Certifications",
    description: "Earn credentials that validate your expertise and are respected by leading companies across the globe.",
    icon: Award,
    color: "eduBlue"
  },
  {
    title: "Flexible Learning Schedule",
    description: "Learn at your own pace with on-demand content, allowing you to balance education with your personal and professional commitments.",
    icon: Clock,
    color: "eduOrange"
  },
  {
    title: "Global Access",
    description: "Access quality education from anywhere in the world, eliminating geographical barriers to career advancement.",
    icon: Globe,
    color: "eduBlue"
  },
  {
    title: "Comprehensive Curriculum",
    description: "Master both technical skills and soft skills with our well-rounded programs designed for holistic professional development.",
    icon: BookOpen,
    color: "eduOrange"
  }
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="edu-container">
        <SectionHeader 
          title="Key Features" 
          subtitle="Discover what makes EduKnit the preferred choice for learners worldwide"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {features.map((feature, index) => (
            <Card key={index} className="border-t-4 border-t-eduBlue-500 hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className={`mb-4 p-3 rounded-full w-14 h-14 flex items-center justify-center ${feature.color === "eduBlue" ? "bg-eduBlue-100 text-eduBlue-600" : "bg-eduOrange-100 text-eduOrange-600"}`}>
                  {React.createElement(feature.icon, { className: "h-7 w-7" })}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 flex-grow">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
