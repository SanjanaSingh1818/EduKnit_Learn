
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import CourseCard from '@/components/ui/CourseCard';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

// Course data including images from placeholder collection
const courses = [
  {
    title: "Communication Skills",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    path: "/programs/communication-skills",
    duration: "1-2 months",
    timeCommitment: "5-10 hrs/week"
  },
  {
    title: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    path: "/programs/digital-marketing",
    duration: "2-3 months",
    timeCommitment: "5-10 hrs/week"
  },
  {
    title: "Basics of AI",
    image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1",
    path: "/programs/basics-of-ai",
    duration: "1-2 months",
    timeCommitment: "5-10 hrs/week"
  },
  {
    title: "AI Prompt Crafting",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    path: "/programs/ai-prompt-crafting",
    duration: "1-2 months",
    timeCommitment: "5-10 hrs/week"
  },
  {
    title: "Data Analytics",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    path: "/programs/data-analytics",
    duration: "2-3 months",
    timeCommitment: "8-12 hrs/week"
  },
  {
    title: "BioSkills",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
    path: "/programs/bioskills",
    duration: "3-4 months",
    timeCommitment: "5-10 hrs/week"
  },
  {
    title: "Decision-Making Skills",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    path: "/programs/decision-making",
    duration: "1-2 months",
    timeCommitment: "5-8 hrs/week"
  },
  {
    title: "Mathematics",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    path: "/programs/mathematics",
    duration: "3-4 months",
    timeCommitment: "6-12 hrs/week"
  },
  {
    title: "Job Search Program",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    path: "/programs/job-search",
    duration: "1-2 months",
    timeCommitment: "3-5 hrs/week",
    comingSoon: true
  }
];

const ProgramsPage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="edu-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-1 mb-6 text-gray-900 dark:text-white">
                Our Skill-Building Programs
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                At EduKnit, we believe students shouldn't have to choose between academic preparation and
                career development.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Every program is flexible, beginner-friendly, and career-focused — built to give you a head-start
                while others are still waiting for results.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="edu-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {courses.map((course, index) => (
                <Link key={index} to={course.path} className="block transform transition-all duration-300">
                  <CourseCard 
                    title={course.title}
                    image={course.image}
                    duration={course.duration}
                    timeCommitment={course.timeCommitment}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16">
          <div className="edu-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-2 mb-8 text-gray-900 dark:text-white">
                Why Choose EduKnit?
              </h2>
              <ul className="space-y-4 text-left max-w-xl mx-auto mb-12">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3" />
                  Designed for Class 11, 12 & early college students
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3" />
                  100% practical, mentor-led learning
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3" />
                  Skills that align with today's job market
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3" />
                  Learn at your own pace, with full support
                </li>
              </ul>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Choose Your Program. Shape Your Future.
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  No more waiting till after college.<br />
                  With EduKnit, your career starts right now.
                </p>
                <Button className="bg-eduOrange-500 hover:bg-eduOrange-600 text-white px-8 py-6 text-lg">
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProgramsPage;
