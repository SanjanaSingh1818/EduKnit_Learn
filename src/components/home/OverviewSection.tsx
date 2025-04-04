
import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { Layers, Target, BarChart3, Trophy } from 'lucide-react';

const OverviewSection = () => {
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="edu-container">
        <SectionHeader
          title="Overview of EduKnit"
          subtitle="Empowering students through accessible, quality education for career advancement"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              EduKnit is a comprehensive educational platform designed to bridge the gap between traditional learning and industry requirements. Our mission is to provide accessible, quality education that helps students advance their careers and achieve their professional goals.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-eduBlue-100 dark:bg-eduBlue-900 rounded-lg">
                  <Target className="h-6 w-6 text-eduBlue-600 dark:text-eduBlue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-400">To democratize education and make quality learning accessible to everyone regardless of their background.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-eduOrange-100 dark:bg-eduOrange-900 rounded-lg">
                  <Layers className="h-6 w-6 text-eduOrange-600 dark:text-eduOrange-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Learning Approach</h3>
                  <p className="text-gray-600 dark:text-gray-400">We combine theoretical knowledge with hands-on projects to ensure you gain practical skills valued by employers.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-eduBlue-100 dark:bg-eduBlue-900 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-eduBlue-600 dark:text-eduBlue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Career Growth</h3>
                  <p className="text-gray-600 dark:text-gray-400">Our curriculum is designed to help you advance your career with industry-relevant skills and certifications.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <Trophy className="h-5 w-5 text-eduOrange-500" />
              What Sets Us Apart
            </h3>
            
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="flex-none w-6 h-6 rounded-full bg-eduBlue-500 flex items-center justify-center text-white font-medium">1</div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Expert-Led Instruction</h4>
                  <p className="text-gray-600 dark:text-gray-400">Learn from industry professionals who bring real-world experience to the classroom.</p>
                </div>
              </li>
              
              <li className="flex gap-3">
                <div className="flex-none w-6 h-6 rounded-full bg-eduBlue-500 flex items-center justify-center text-white font-medium">2</div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Flexible Learning</h4>
                  <p className="text-gray-600 dark:text-gray-400">Study at your own pace with 24/7 access to course materials and support.</p>
                </div>
              </li>
              
              <li className="flex gap-3">
                <div className="flex-none w-6 h-6 rounded-full bg-eduBlue-500 flex items-center justify-center text-white font-medium">3</div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Community Support</h4>
                  <p className="text-gray-600 dark:text-gray-400">Join a vibrant community of learners, mentors, and industry professionals.</p>
                </div>
              </li>
              
              <li className="flex gap-3">
                <div className="flex-none w-6 h-6 rounded-full bg-eduBlue-500 flex items-center justify-center text-white font-medium">4</div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Industry Recognition</h4>
                  <p className="text-gray-600 dark:text-gray-400">Earn certificates that are recognized and valued by top employers worldwide.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
