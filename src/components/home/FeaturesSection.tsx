
import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { Book, Users, Award, MessageSquare, Globe, Lightbulb, Clock, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Book className="h-8 w-8 text-eduBlue-500" />,
    title: "Expert-Led Curriculum",
    description: "Learn from industry professionals with courses designed to develop in-demand skills."
  },
  {
    icon: <Users className="h-8 w-8 text-eduBlue-500" />,
    title: "Engaged Community",
    description: "Join a thriving community of learners, mentors, and educators to enhance your learning experience."
  },
  {
    icon: <Clock className="h-8 w-8 text-eduBlue-500" />,
    title: "Flexible Learning",
    description: "Study at your own pace with courses designed to fit around your schedule and commitments."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-eduBlue-500" />,
    title: "Discussion Forums",
    description: "Collaborate with peers and instructors through active discussion forums and live Q&A sessions."
  },
  {
    icon: <Award className="h-8 w-8 text-eduBlue-500" />,
    title: "Recognized Certifications",
    description: "Earn industry-recognized credentials that boost your resume and career prospects."
  },
  {
    icon: <Globe className="h-8 w-8 text-eduBlue-500" />,
    title: "Global Perspective",
    description: "Gain international insights and connect with learners from around the world."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-eduBlue-500" />,
    title: "Practical Projects",
    description: "Apply your knowledge through hands-on projects that demonstrate your skills to employers."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-eduBlue-500" />,
    title: "Dedicated Support",
    description: "Access technical and academic support whenever you need assistance on your learning journey."
  }
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="edu-container">
        <SectionHeader
          title="Why Choose EduKnit"
          subtitle="Discover the key features that make our platform the perfect choice for your educational journey"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 inline-block rounded-lg self-start">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
