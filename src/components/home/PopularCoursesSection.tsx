
import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Code, Database, Palette, ChartBar, Globe, Lightbulb, MessageSquare, Briefcase } from 'lucide-react';

const programs = [
  {
    title: "Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, React, and Node.js to build modern, responsive web applications from scratch.",
    level: "Beginner to Advanced",
    duration: "12 weeks",
    icon: Code,
    color: "eduBlue"
  },
  {
    title: "Data Science Essentials",
    description: "Learn Python, statistics, machine learning, and data visualization to analyze complex datasets and extract valuable insights.",
    level: "Intermediate",
    duration: "16 weeks",
    icon: Database,
    color: "eduOrange"
  },
  {
    title: "UI/UX Design Fundamentals",
    description: "Develop your design thinking, wireframing, prototyping, and user testing skills to create intuitive, beautiful interfaces.",
    level: "Beginner",
    duration: "8 weeks",
    icon: Palette,
    color: "eduBlue"
  },
  {
    title: "Business Analytics",
    description: "Learn to use data analytics tools like Excel, SQL, Tableau, and Power BI to drive business decisions and strategy.",
    level: "Beginner to Intermediate",
    duration: "10 weeks",
    icon: ChartBar,
    color: "eduOrange"
  },
  {
    title: "Digital Marketing Mastery",
    description: "Explore SEO, social media marketing, content strategy, email campaigns, and analytics to grow online presence.",
    level: "All Levels",
    duration: "8 weeks",
    icon: Globe,
    color: "eduBlue"
  },
  {
    title: "Product Management",
    description: "Develop skills in market research, product strategy, roadmapping, and stakeholder management for successful product launches.",
    level: "Intermediate",
    duration: "12 weeks",
    icon: Lightbulb,
    color: "eduOrange"
  },
  {
    title: "Communication Skills",
    description: "Enhance your public speaking, presentation, writing, and interpersonal communication for professional success.",
    level: "All Levels",
    duration: "6 weeks",
    icon: MessageSquare,
    color: "eduBlue"
  },
  {
    title: "Project Management Professional",
    description: "Prepare for PMP certification while mastering project planning, execution, monitoring, and team leadership.",
    level: "Advanced",
    duration: "14 weeks",
    icon: Briefcase,
    color: "eduOrange"
  }
];

const PopularCoursesSection = () => {
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="edu-container">
        <SectionHeader 
          title="Explore Our Programs" 
          subtitle="Discover courses designed to help you achieve your career goals"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className={`h-2 ${program.color === "eduBlue" ? "bg-eduBlue-500" : "bg-eduOrange-500"}`}></div>
              <CardContent className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg mr-3 ${program.color === "eduBlue" ? "bg-eduBlue-100 text-eduBlue-600 dark:bg-eduBlue-900 dark:text-eduBlue-300" : "bg-eduOrange-100 text-eduOrange-600 dark:bg-eduOrange-900 dark:text-eduOrange-300"}`}>
                    {React.createElement(program.icon, { className: "h-5 w-5" })}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{program.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{program.level}</span>
                  <span>{program.duration}</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 border-t border-gray-100 dark:border-gray-800">
                <Button className="w-full bg-eduBlue-500 hover:bg-eduBlue-600 text-white">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-eduOrange-500 hover:bg-eduOrange-600 text-white px-8 py-6 text-lg">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularCoursesSection;
