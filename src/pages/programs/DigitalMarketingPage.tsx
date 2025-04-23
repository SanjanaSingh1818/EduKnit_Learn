
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Megaphone } from 'lucide-react';

const DigitalMarketingPage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 min-h-screen py-20">
        <div className="edu-container">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-lg bg-eduOrange-100 text-eduOrange-600">
              <Megaphone className="h-8 w-8" />
            </div>
            <h1 className="heading-1 text-gray-900 dark:text-white">Digital Marketing</h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Learn how businesses grow in the real world — and how you can, too.
          </p>
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">What You'll Learn</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="h-6 w-6 rounded-full bg-eduOrange-100 text-eduOrange-600 flex items-center justify-center mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-300">Social media strategy</p>
                  <p className="text-gray-600 dark:text-gray-400">Learn to build and manage effective social media campaigns across platforms</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="h-6 w-6 rounded-full bg-eduOrange-100 text-eduOrange-600 flex items-center justify-center mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-300">Performance marketing</p>
                  <p className="text-gray-600 dark:text-gray-400">Master the art of data-driven marketing campaigns that deliver real results</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="h-6 w-6 rounded-full bg-eduOrange-100 text-eduOrange-600 flex items-center justify-center mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-300">Branding & campaign planning</p>
                  <p className="text-gray-600 dark:text-gray-400">Create compelling brand stories and plan effective marketing campaigns</p>
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

export default DigitalMarketingPage;
