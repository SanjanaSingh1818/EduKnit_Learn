
import React from 'react';
import ProgramPageTemplate from '@/components/programs/ProgramPageTemplate';
import { MessageSquare } from 'lucide-react';

const CommunicationSkillsPage = () => {
  return (
    <ProgramPageTemplate
      icon={<MessageSquare className="h-8 w-8" />}
      iconBgClass="bg-eduBlue-100"
      iconTextClass="text-eduBlue-600"
      title="Communication Skills"
      tagline="Transform your ideas into powerful messages that move people."
      videoSrc="https://player.vimeo.com/external/377669055.hd.mp4?s=dc0d6e7e0b4486595c50073257e9514b86b56376"
      overview={[
        "In today's interconnected world, effective communication is more than just speaking clearly—it's about connecting, persuading, and inspiring action. Our Communication Skills program builds the essential foundation you need for success in any field.",
        "Through practical exercises, real-world scenarios, and expert guidance, you'll develop the ability to communicate confidently across different contexts and platforms, from professional presentations to everyday interactions.",
        "Whether you're preparing for college interviews, future careers, or just want to express yourself more effectively, this program offers the tools and techniques to elevate your communication to the next level."
      ]}
      careerOutlook={{
        description: [
          "Strong communication skills consistently rank among the top qualities employers look for across all industries. By mastering these fundamental skills now, you're setting yourself up for success in virtually any career path.",
          "From marketing and public relations to leadership positions in any field, the ability to communicate effectively opens doors and accelerates professional growth."
        ],
        paths: [
          {
            title: "Marketing & Public Relations",
            description: "Create compelling campaigns and manage brand communication strategies."
          },
          {
            title: "Business Leadership",
            description: "Lead teams effectively through clear direction and inspiring vision."
          },
          {
            title: "Human Resources",
            description: "Facilitate workplace communication and resolve conflicts effectively."
          },
          {
            title: "Sales",
            description: "Persuade potential clients and build lasting business relationships."
          }
        ]
      }}
      curriculum={{
        description: "Our curriculum is designed to build your skills progressively, from foundational concepts to advanced techniques. Each module combines theory with plenty of practice.",
        modules: [
          {
            id: "module-1",
            title: "Foundations of Effective Communication",
            description: "Master the core principles that make communication clear, compelling, and effective.",
            lessons: [
              {
                id: "lesson-1-1",
                title: "Communication Models and Principles",
                duration: "20 min",
                type: "video"
              },
              {
                id: "lesson-1-2",
                title: "Active Listening Techniques",
                duration: "35 min",
                type: "video"
              },
              {
                id: "lesson-1-3",
                title: "Overcoming Communication Barriers",
                duration: "15 min",
                type: "reading"
              }
            ]
          },
          {
            id: "module-2",
            title: "Written Communication",
            description: "Learn to write clearly and persuasively across various formats and contexts.",
            lessons: [
              {
                id: "lesson-2-1",
                title: "Principles of Clear Writing",
                duration: "25 min",
                type: "video"
              },
              {
                id: "lesson-2-2",
                title: "Email and Professional Correspondence",
                duration: "30 min",
                type: "video"
              },
              {
                id: "lesson-2-3",
                title: "Writing Practice Exercise",
                duration: "45 min",
                type: "quiz"
              }
            ]
          },
          {
            id: "module-3",
            title: "Public Speaking & Presentations",
            description: "Build confidence and skills for speaking effectively to any audience.",
            lessons: [
              {
                id: "lesson-3-1",
                title: "Structuring Compelling Presentations",
                duration: "30 min",
                type: "video"
              },
              {
                id: "lesson-3-2",
                title: "Managing Speech Anxiety",
                duration: "20 min",
                type: "video"
              },
              {
                id: "lesson-3-3",
                title: "Voice, Body Language, and Delivery",
                duration: "40 min",
                type: "video"
              }
            ]
          },
          {
            id: "module-4",
            title: "Digital Communication",
            description: "Navigate the unique challenges and opportunities of communicating in digital spaces.",
            lessons: [
              {
                id: "lesson-4-1",
                title: "Social Media Communication",
                duration: "25 min",
                type: "video"
              },
              {
                id: "lesson-4-2",
                title: "Virtual Meeting Best Practices",
                duration: "30 min",
                type: "video"
              },
              {
                id: "lesson-4-3",
                title: "Digital Communication Project",
                duration: "60 min",
                type: "quiz"
              }
            ]
          }
        ]
      }}
      support={{
        description: [
          "We believe learning happens best with the right support system in place. That's why our program includes comprehensive resources to help you succeed.",
          "From personalized feedback to live sessions with instructors, you'll have everything you need to master communication skills."
        ],
        features: [
          {
            title: "Expert Feedback",
            description: "Receive personalized guidance on your communication style from industry professionals."
          },
          {
            title: "Live Practice Sessions",
            description: "Participate in small-group sessions to practice and refine your skills in real time."
          },
          {
            title: "24/7 Resource Access",
            description: "Access our digital library of communication resources, templates, and examples anytime."
          },
          {
            title: "Peer Learning Community",
            description: "Connect with fellow students to practice together and share insights."
          }
        ]
      }}
      faqs={[
        {
          question: "How long does it take to complete this program?",
          answer: "The program is designed to be completed in 4-6 weeks, with about 5-10 hours of learning per week. However, you can adjust the pace to fit your schedule, and you'll have access to the materials for 12 months."
        },
        {
          question: "Do I need any prior experience to join this program?",
          answer: "No prior experience is needed! This program is designed to be accessible to beginners while also offering value to those with some communication experience."
        },
        {
          question: "How will I practice the skills I learn?",
          answer: "The program includes various practice opportunities, including interactive exercises, peer feedback sessions, recorded assignments, and live practice with instructors."
        },
        {
          question: "Will I receive a certificate upon completion?",
          answer: "Yes, you'll receive a Certificate of Completion that you can share on your resume and LinkedIn profile to showcase your newly developed skills."
        },
        {
          question: "Can I access the program on mobile devices?",
          answer: "Yes, the program is fully accessible on mobile devices, allowing you to learn and practice on the go."
        }
      ]}
    />
  );
};

export default CommunicationSkillsPage;
