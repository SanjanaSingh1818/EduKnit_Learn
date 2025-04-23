
import React from 'react';
import Layout from '@/components/layout/Layout';
import { MessageCircle } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

const SupportFeatureCard = ({ title, description, features }: { title: string; description: string; features: string[] }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <span className="text-gray-700 dark:text-gray-200">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SupportPage = () => {
  return (
    <Layout>
      <div className="edu-container section-padding">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <SectionHeader
            title="Support That Powers Your Success — Every Single Day"
            subtitle="At EduKnit, we don't just give you content and say 'figure it out.' We walk with you. Talk with you. Support you — like no other platform does."
          />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Whether you're feeling stuck, need advice, or just want someone to listen — we're right here, ready to help you move forward. Always.
          </p>
        </div>

        {/* Support Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <SupportFeatureCard
            title="1-on-1 Mentorship Calls — Real Talk, Real Results"
            description="You'll never be 'just another student' here. With personal Google Meet sessions, you get a real mentor who listens, solves, guides, and inspires — one call at a time."
            features={[
              "Book support calls easily",
              "Academic, mindset & career clarity",
              "Zero judgment, 100% commitment"
            ]}
          />

          <SupportFeatureCard
            title="Exclusive Discord Community — You're Not Alone Anymore"
            description="Imagine a place where everyone's aiming higher — and helping each other get there. That's our Discord tribe."
            features={[
              "Daily doubt-solving",
              "Motivation from peers & mentors",
              "Live career talks, challenges & fun",
              "Surprise giveaways & growth sprints"
            ]}
          />

          <SupportFeatureCard
            title="Live Chat Support — Doubts Don't Wait, Neither Do We"
            description="Stuck with login? Course access? Confused about the next step? Our support team is lightning-fast, student-friendly, and always just a click away."
            features={[
              "Instant answers — no bots, just real people",
              "Available 10 AM – 7 PM (Mon–Sat)",
              "Super helpful, always respectful"
            ]}
          />

          <SupportFeatureCard
            title="24/7 AI Chatbot — Smart. Swift. Super Useful."
            description="Meet your round-the-clock learning buddy — our smart, in-built AI chatbot. It never sleeps and is always ready to help."
            features={[
              "Instant help for FAQs, courses & progress tracking",
              "Available 24/7 — even at 2 AM",
              "Always improving to serve you better"
            ]}
          />
        </div>

        {/* Final CTA Section */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-6">EduKnit Support = Your Secret Weapon</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
            <div className={cn(
              "flex items-center gap-2",
              "text-lg font-medium text-gray-700 dark:text-gray-200"
            )}>
              <span className="text-green-500">✅</span>
              <span>You'll never feel lost</span>
            </div>
            <div className={cn(
              "flex items-center gap-2",
              "text-lg font-medium text-gray-700 dark:text-gray-200"
            )}>
              <span className="text-green-500">✅</span>
              <span>You'll always find help</span>
            </div>
            <div className={cn(
              "flex items-center gap-2",
              "text-lg font-medium text-gray-700 dark:text-gray-200"
            )}>
              <span className="text-green-500">✅</span>
              <span>You'll move forward — faster, smoother, stronger</span>
            </div>
          </div>
          <p className="text-lg mb-4">This isn't "support." This is your personal success engine — and it's built into everything we do.</p>
          <p className="text-lg font-medium">Because when you rise, we rise.</p>
          <p className="text-xl font-bold mt-6">Let's grow. Together.</p>
        </div>
      </div>
    </Layout>
  );
};

export default SupportPage;
