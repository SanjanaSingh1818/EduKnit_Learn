
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import CourseCard from '../ui/CourseCard';
import { Button } from '@/components/ui/button';

// Sample course data
const courses = [
  {
    id: "1",
    title: "Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, React and Node.js in this comprehensive bootcamp designed for beginners.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    instructor: "John Smith",
    duration: "12 weeks",
    studentsCount: 1534,
    rating: 4.8,
    category: "Technology",
    price: 12999,
    isFeatured: true
  },
  {
    id: "2",
    title: "Digital Marketing Fundamentals",
    description: "Learn SEO, SEM, social media marketing, and content strategy to grow your business online.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    instructor: "Emily Johnson",
    duration: "8 weeks",
    studentsCount: 2156,
    rating: 4.7,
    category: "Business",
    price: 8999,
    isFeatured: false
  },
  {
    id: "3",
    title: "Public Speaking Mastery",
    description: "Overcome stage fright and develop compelling presentation skills for professional success.",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHB1YmxpYyUyMHNwZWFraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    instructor: "David Chen",
    duration: "6 weeks",
    studentsCount: 1289,
    rating: 4.9,
    category: "Communication",
    price: 6999,
    isFeatured: false
  },
  {
    id: "4",
    title: "Data Science Essentials",
    description: "Learn Python, statistics, data analysis, and machine learning for a career in data science.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    instructor: "Sarah Williams",
    duration: "10 weeks",
    studentsCount: 1876,
    rating: 4.6,
    category: "Technology",
    price: 14999,
    isFeatured: false
  }
];

const PopularCoursesSection = () => {
  return (
    <section className="section-padding">
      <div className="edu-container">
        <SectionHeader 
          title="Popular Courses" 
          subtitle="Explore our most sought-after courses chosen by thousands of students"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {courses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild>
            <Link to="/programs" className="flex items-center justify-center">
              View All Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularCoursesSection;
