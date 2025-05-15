
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Users, BookOpen, Clock, Trophy, Calendar, BarChart, CheckCircle, Briefcase, GraduationCap, Building, HelpCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import SectionHeader from '@/components/ui/SectionHeader';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Data for curriculum modules
const curriculumModules = [
  {
    id: 1,
    title: "Foundations of Communication",
    description: "Build a strong understanding of communication models and theories",
    topics: [
      "Communication models and theories",
      "Verbal and non-verbal communication",
      "Communication styles assessment",
      "Active listening techniques"
    ],
    duration: "2 weeks",
    assignments: 3
  },
  {
    id: 2,
    title: "Business Writing",
    description: "Master professional writing for various business contexts",
    topics: [
      "Emails, memos, and professional documents",
      "Clarity, conciseness, and tone",
      "Writing for different audiences",
      "Document formatting best practices"
    ],
    duration: "2 weeks",
    assignments: 4
  },
  {
    id: 3,
    title: "Presentation Skills",
    description: "Learn to deliver compelling presentations with confidence",
    topics: [
      "Structuring impactful presentations",
      "Delivery techniques and visual aids",
      "Handling Q&A and difficult situations",
      "Public speaking confidence building"
    ],
    duration: "3 weeks",
    assignments: 3
  },
  {
    id: 4,
    title: "Final Project",
    description: "Apply your skills in a comprehensive communication project",
    topics: [
      "Comprehensive communication strategy",
      "Recorded presentation with peer feedback",
      "Professional portfolio piece",
      "Final assessment and evaluation"
    ],
    duration: "1 week",
    assignments: 1
  }
];

// Data for FAQ section
const faqItems = [
  {
    question: "Do I need any prior experience to take this program?",
    answer: "No prior experience is needed. This program is designed for beginners and will start with the fundamentals before progressing to more advanced concepts."
  },
  {
    question: "How much time will I need to commit each week?",
    answer: "The program requires approximately 5-10 hours per week. The schedule is flexible, allowing you to learn at your own pace within the program timeline."
  },
  {
    question: "Will I receive a certificate upon completion?",
    answer: "Yes, upon successful completion of all modules and the final project, you will receive a verified digital certificate that you can share on your resume and LinkedIn profile."
  },
  {
    question: "How soon will I be able to apply these skills?",
    answer: "The program is designed to be immediately applicable. You'll start practicing real-world communication skills from week one, with each module building on the previous one."
  },
  {
    question: "Is there direct interaction with instructors?",
    answer: "Yes, you'll have access to instructors through weekly office hours and our dedicated program forum where you can ask questions and receive feedback."
  }
];

// Data for career outlook
const careerOutlookData = {
  skills: ["Clear Written Communication", "Public Speaking", "Active Listening", "Negotiation", "Cross-Cultural Communication"],
  careers: ["Corporate Communications", "Public Relations", "Marketing", "Human Resources", "Customer Service Leadership"],
  companies: ["Google", "Microsoft", "IBM", "Deloitte", "Amazon"],
  statistics: [
    { label: "Hiring managers who value communication skills", value: "91%" },
    { label: "Salary premium for strong communicators", value: "20-40%" },
    { label: "Projects that fail due to poor communication", value: "30%" }
  ]
};

const CommunicationSkillsPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  const enrollNow = () => {
    toast({
      title: "Enrollment successful",
      description: "You've been enrolled in the Communication Skills program",
    });
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
        {/* Hero Section */}
        <div className="bg-eduBlue-600 text-white py-16">
          <div className="edu-container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 rounded-lg bg-white/20">
                    <Users className="h-6 w-6" />
                  </div>
                  <span className="uppercase text-sm font-bold tracking-wide">Career-ready skills</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Communication Skills</h1>
                <p className="text-xl">
                  Master the art of clear and effective communication in professional settings.
                  Speak smart. Think sharp. Lead with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-eduBlue-600 hover:bg-gray-100"
                    onClick={enrollNow}
                  >
                    Enroll Now
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10"
                  >
                    Download Syllabus
                  </Button>
                </div>
                <div className="flex flex-wrap gap-6 pt-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-eduOrange-300" />
                    <span>1-2 months</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-eduOrange-300" />
                    <span>5-10 hrs/week</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-eduOrange-300" />
                    <span>Certificate included</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                  alt="Communication Skills" 
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Program Navigation */}
        <div className="sticky top-[70px] z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="edu-container">
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="flex w-full h-16 bg-transparent border-b-0 overflow-x-auto">
                <TabsTrigger 
                  value="overview"
                  className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-eduBlue-500 data-[state=active]:text-eduBlue-600 data-[state=active]:shadow-none rounded-none text-base px-2"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="career"
                  className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-eduBlue-500 data-[state=active]:text-eduBlue-600 data-[state=active]:shadow-none rounded-none text-base px-2"
                >
                  Career Outlook
                </TabsTrigger>
                <TabsTrigger 
                  value="curriculum"
                  className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-eduBlue-500 data-[state=active]:text-eduBlue-600 data-[state=active]:shadow-none rounded-none text-base px-2"
                >
                  Curriculum
                </TabsTrigger>
                <TabsTrigger 
                  value="support"
                  className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-eduBlue-500 data-[state=active]:text-eduBlue-600 data-[state=active]:shadow-none rounded-none text-base px-2"
                >
                  Support
                </TabsTrigger>
                <TabsTrigger 
                  value="faq"
                  className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-eduBlue-500 data-[state=active]:text-eduBlue-600 data-[state=active]:shadow-none rounded-none text-base px-2"
                >
                  FAQ
                </TabsTrigger>
              </TabsList>
              
              {/* Overview Tab Content */}
              <TabsContent value="overview" className="mt-0 pt-10">
                <div className="edu-container">
                  <SectionHeader 
                    title="Program Overview" 
                    subtitle="Effective communication in today's digital and in-person environments"
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-eduBlue-100 text-eduBlue-600 mb-4">
                          <Users className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Professional Communication</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Learn to communicate effectively in workplace settings, from emails to presentations.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-eduBlue-100 text-eduBlue-600 mb-4">
                          <BarChart className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Data Storytelling</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Turn complex information into compelling narratives that drive decision-making.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-eduBlue-100 text-eduBlue-600 mb-4">
                          <Calendar className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Learn at your own pace with live sessions and on-demand content.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* What You'll Learn */}
                  <div className="py-16">
                    <SectionHeader 
                      title="What You'll Learn" 
                      subtitle="Master key communication skills that employers value most"
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="mt-1">
                            <CheckCircle className="h-6 w-6 text-eduOrange-500" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-2">Written Communication</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              Craft clear, concise emails, reports, and documents that get your message across
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="mt-1">
                            <CheckCircle className="h-6 w-6 text-eduOrange-500" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-2">Public Speaking</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              Build confidence in presenting ideas to groups of any size
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="mt-1">
                            <CheckCircle className="h-6 w-6 text-eduOrange-500" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-2">Active Listening</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              Master the art of understanding others with empathy and attention
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="mt-1">
                            <CheckCircle className="h-6 w-6 text-eduOrange-500" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-2">Negotiation Skills</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              Learn to navigate difficult conversations and achieve win-win outcomes
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="mt-1">
                            <CheckCircle className="h-6 w-6 text-eduOrange-500" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-2">Digital Communication</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              Navigate communication across platforms from email to social media
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="mt-1">
                            <CheckCircle className="h-6 w-6 text-eduOrange-500" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-2">Cross-Cultural Communication</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              Develop awareness and skills for global workplace interactions
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Career Outlook Tab Content */}
              <TabsContent value="career" className="mt-0 pt-10">
                <div className="edu-container">
                  <SectionHeader 
                    title="Career Outlook" 
                    subtitle="How communication skills will advance your career prospects"
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-semibold mb-4 flex items-center text-eduBlue-600">
                          <Briefcase className="mr-2 h-6 w-6" /> Top Skills You'll Develop
                        </h3>
                        <ul className="space-y-3">
                          {careerOutlookData.skills.map((skill, index) => (
                            <li key={index} className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-eduOrange-500 mr-3"></div>
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-semibold mb-4 flex items-center text-eduBlue-600">
                          <Building className="mr-2 h-6 w-6" /> Companies That Value These Skills
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {careerOutlookData.companies.map((company, index) => (
                            <span key={index} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                              {company}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-semibold mb-4 flex items-center text-eduBlue-600">
                          <GraduationCap className="mr-2 h-6 w-6" /> Career Paths
                        </h3>
                        <ul className="space-y-3">
                          {careerOutlookData.careers.map((career, index) => (
                            <li key={index} className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-eduOrange-500 mr-3"></div>
                              <span>{career}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-semibold mb-4 flex items-center text-eduBlue-600">
                          <BarChart className="mr-2 h-6 w-6" /> Industry Statistics
                        </h3>
                        <div className="grid gap-4">
                          {careerOutlookData.statistics.map((stat, index) => (
                            <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <div className="text-2xl font-bold text-eduOrange-500">{stat.value}</div>
                              <div className="text-gray-700 dark:text-gray-300">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Curriculum Tab Content */}
              <TabsContent value="curriculum" className="mt-0 pt-10">
                <div className="edu-container">
                  <SectionHeader 
                    title="Program Curriculum" 
                    subtitle="A comprehensive learning journey to develop your communication skills"
                  />
                  
                  <div className="mt-10">
                    <Accordion type="single" collapsible className="w-full">
                      {curriculumModules.map((module) => (
                        <AccordionItem key={module.id} value={`module-${module.id}`} className="border border-gray-200 dark:border-gray-700 rounded-lg mb-4 overflow-hidden">
                          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 dark:hover:bg-gray-800">
                            <div className="text-left flex flex-col">
                              <span className="text-lg font-semibold">{module.title}</span>
                              <span className="text-sm text-gray-500 dark:text-gray-400">{module.description}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-6">
                            <div className="grid md:grid-cols-3 gap-6 mb-4">
                              <div className="flex items-center">
                                <Clock className="h-5 w-5 text-eduBlue-500 mr-2" />
                                <span>{module.duration}</span>
                              </div>
                              <div className="flex items-center">
                                <BookOpen className="h-5 w-5 text-eduBlue-500 mr-2" />
                                <span>{module.assignments} Assignments</span>
                              </div>
                            </div>
                            <h4 className="font-medium mb-2">Topics covered:</h4>
                            <ul className="space-y-2">
                              {module.topics.map((topic, idx) => (
                                <li key={idx} className="flex items-center">
                                  <div className="h-2 w-2 rounded-full bg-eduOrange-500 mr-3"></div>
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                  
                  <div className="mt-10 text-center">
                    <Button 
                      size="lg" 
                      className="bg-eduOrange-500 hover:bg-eduOrange-600"
                      onClick={enrollNow}
                    >
                      Enroll in This Program
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* Support Tab Content */}
              <TabsContent value="support" className="mt-0 pt-10">
                <div className="edu-container">
                  <SectionHeader 
                    title="Student Support" 
                    subtitle="We're with you every step of your learning journey"
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    <Card className="border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-eduBlue-100 text-eduBlue-600 mb-4">
                          <Users className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Learn from industry professionals with years of experience in corporate communications and education.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-eduBlue-100 text-eduBlue-600 mb-4">
                          <Users className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Community Forum</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Connect with your peers, share ideas, and get feedback in our active student community.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-eduBlue-100 text-eduBlue-600 mb-4">
                          <Phone className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">1:1 Coaching</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Get personalized feedback on your communication style through scheduled coaching sessions.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mt-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-center">Our Student Success Guarantee</h3>
                    <p className="text-center max-w-3xl mx-auto mb-6">
                      We're committed to your success. If you complete all program requirements and aren't satisfied with your progress, we'll provide additional coaching at no extra cost.
                    </p>
                    <div className="flex justify-center">
                      <Button variant="outline" className="border-eduBlue-500 text-eduBlue-500">
                        Contact Support Team
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* FAQ Tab Content */}
              <TabsContent value="faq" className="mt-0 pt-10">
                <div className="edu-container">
                  <SectionHeader 
                    title="Frequently Asked Questions" 
                    subtitle="Get answers to common questions about the Communication Skills program"
                  />
                  
                  <div className="mt-10 max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                      {faqItems.map((item, index) => (
                        <AccordionItem key={index} value={`faq-${index}`} className="border-b">
                          <AccordionTrigger className="text-lg py-4 hover:no-underline">
                            <span className="text-left">{item.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="py-4 text-gray-600 dark:text-gray-400">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                    
                    <div className="mt-10 text-center">
                      <h3 className="text-xl font-medium mb-4">Still have questions?</h3>
                      <Button className="bg-eduBlue-500 hover:bg-eduBlue-600">
                        <HelpCircle className="mr-2 h-4 w-4" /> Contact Admissions Team
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-eduBlue-600 text-white">
          <div className="edu-container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Ready to Master Communication Skills?</h2>
              <p className="text-xl">
                Join thousands of students who have transformed their career prospects with our program.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-white text-eduBlue-600 hover:bg-gray-100"
                  onClick={enrollNow}
                >
                  Enroll Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CommunicationSkillsPage;
