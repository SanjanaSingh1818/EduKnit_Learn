
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Users } from 'lucide-react';

const CommunicationSkillsPage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 min-h-screen py-20">
        <div className="edu-container">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-lg bg-eduBlue-100 text-eduBlue-600">
              <Users className="h-8 w-8" />
            </div>
            <h1 className="heading-1 text-gray-900 dark:text-white">Communication Skills</h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Speak smart. Think sharp. Lead with confidence.
          </p>
          {/* Content to be added later */}
          <div className="text-gray-600 dark:text-gray-300">
            <p className="mb-4">Coming soon! This page is under construction.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CommunicationSkillsPage;
