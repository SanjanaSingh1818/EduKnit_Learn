
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, Users, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-eduBlue-500 to-eduBlue-700 text-white">
      <div className="edu-container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform Your Future with <span className="text-eduOrange-400">EduKnit</span>
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-lg">
              Unlock your potential with our expert-led courses designed to build real-world skills that employers demand.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-eduOrange-500 hover:bg-eduOrange-600 text-white" asChild>
                <Link to="/programs" className="flex items-center">
                  Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-2 md:gap-4">
              <div className="flex flex-col items-center bg-white/10 rounded-lg p-4">
                <Book className="h-8 w-8 text-eduOrange-400 mb-2" />
                <span className="font-bold text-2xl">100+</span>
                <span className="text-sm text-center">Expert Courses</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 rounded-lg p-4">
                <Users className="h-8 w-8 text-eduOrange-400 mb-2" />
                <span className="font-bold text-2xl">50K+</span>
                <span className="text-sm text-center">Active Students</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 rounded-lg p-4">
                <Award className="h-8 w-8 text-eduOrange-400 mb-2" />
                <span className="font-bold text-2xl">98%</span>
                <span className="text-sm text-center">Success Rate</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-eduOrange-500 rounded-full opacity-20"></div>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Students learning" 
                  className="w-full h-96 object-cover object-center"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-lg font-bold text-gray-900">Learn from Industry Experts</h3>
                  <p className="text-gray-600 mt-2">
                    Get personalized guidance from professionals who've excelled in their fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
