
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Lightbulb } from 'lucide-react';

const DecisionMakingPage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 min-h-screen py-20">
        <div className="edu-container">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-lg bg-eduBlue-100 text-eduBlue-600">
              <Lightbulb className="h-8 w-8" />
            </div>
            <h1 className="heading-1 text-gray-900 dark:text-white">Decision-Making Skills</h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Learn how top leaders think.
          </p>
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">What You'll Learn</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="h-6 w-6 rounded-full bg-eduBlue-100 text-eduBlue-600 flex items-center justify-center mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-300">Critical thinking</p>
                  <p className="text-gray-600 dark:text-gray-400">Develop analytical skills to evaluate information effectively</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="h-6 w-6 rounded-full bg-eduBlue-100 text-eduBlue-600 flex items-center justify-center mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-300">Problem solving</p>
                  <p className="text-gray-600 dark:text-gray-400">Master methodical approaches to tackle complex problems</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="h-6 w-6 rounded-full bg-eduBlue-100 text-eduBlue-600 flex items-center justify-center mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-300">Real-life decision simulations</p>
                  <p className="text-gray-600 dark:text-gray-400">Practice decision-making in realistic scenarios with feedback</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="text-gray-600 dark:text-gray-300">
            <p className="mb-4">More content coming soon as we expand this program page.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DecisionMakingPage;
