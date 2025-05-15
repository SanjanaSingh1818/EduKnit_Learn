
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, BookOpen, Play, FileText } from 'lucide-react';

interface ProgramModule {
  id: string;
  title: string;
  description: string;
  lessons: {
    id: string;
    title: string;
    duration: string;
    type: 'video' | 'reading' | 'quiz';
  }[];
}

interface CareerPath {
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export interface ProgramPageProps {
  icon: React.ReactNode;
  iconBgClass: string;
  iconTextClass: string;
  title: string;
  tagline: string;
  videoSrc: string;
  overview: string[];
  careerOutlook: {
    description: string[];
    paths: CareerPath[];
  };
  curriculum: {
    description: string;
    modules: ProgramModule[];
  };
  support: {
    description: string[];
    features: {
      title: string;
      description: string;
    }[];
  };
  faqs: FAQ[];
}

const ProgramPageTemplate: React.FC<ProgramPageProps> = ({
  icon,
  iconBgClass,
  iconTextClass,
  title,
  tagline,
  videoSrc,
  overview,
  careerOutlook,
  curriculum,
  support,
  faqs
}) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
        {/* Hero Section with Video */}
        <section className="pt-16 pb-8">
          <div className="edu-container">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${iconBgClass}`}>
                    {icon}
                  </div>
                  <h1 className="heading-1 text-gray-900 dark:text-white">{title}</h1>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  {tagline}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button className="bg-eduBlue-600 hover:bg-eduBlue-700 text-white">
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="border-eduBlue-600 text-eduBlue-600 hover:bg-eduBlue-50">
                    Download Syllabus
                  </Button>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <AspectRatio ratio={16 / 9}>
                    <video 
                      src={videoSrc} 
                      controls 
                      poster={`https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80`}
                      className="w-full h-full object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Content Tabs */}
        <section className="py-8">
          <div className="edu-container">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="border-b border-gray-200 dark:border-gray-700">
                <TabsList className="w-full justify-start bg-transparent h-auto p-0 mb-[-1px]">
                  <TabsTrigger 
                    value="overview" 
                    className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-eduBlue-600 data-[state=active]:text-eduBlue-600 bg-transparent"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger 
                    value="career" 
                    className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-eduBlue-600 data-[state=active]:text-eduBlue-600 bg-transparent"
                  >
                    Career Outlook
                  </TabsTrigger>
                  <TabsTrigger 
                    value="curriculum" 
                    className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-eduBlue-600 data-[state=active]:text-eduBlue-600 bg-transparent"
                  >
                    Curriculum
                  </TabsTrigger>
                  <TabsTrigger 
                    value="support" 
                    className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-eduBlue-600 data-[state=active]:text-eduBlue-600 bg-transparent"
                  >
                    Support
                  </TabsTrigger>
                  <TabsTrigger 
                    value="faq" 
                    className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-eduBlue-600 data-[state=active]:text-eduBlue-600 bg-transparent"
                  >
                    FAQ
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Overview Tab */}
              <TabsContent value="overview" className="py-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Program Overview</h2>
                <div className="space-y-4 max-w-3xl mb-8">
                  {overview.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {curriculum.modules.slice(0, 3).map((module) => (
                    <Card key={module.id} className="border-0 shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className={`h-6 w-6 mt-1 ${iconTextClass} flex-shrink-0`} />
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{module.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{module.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <Button 
                    onClick={() => setActiveTab("curriculum")}
                    className="bg-eduBlue-600 hover:bg-eduBlue-700 text-white"
                  >
                    Explore Full Curriculum <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              {/* Career Outlook Tab */}
              <TabsContent value="career" className="py-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Career Opportunities</h2>
                
                <div className="space-y-4 max-w-3xl mb-8">
                  {careerOutlook.description.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">Career Paths</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {careerOutlook.paths.map((path, index) => (
                    <Card key={index} className="border-0 shadow">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2">{path.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{path.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Curriculum Tab */}
              <TabsContent value="curriculum" className="py-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Program Curriculum</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
                  {curriculum.description}
                </p>

                <div className="space-y-6 mb-8">
                  {curriculum.modules.map((module) => (
                    <Accordion key={module.id} type="single" collapsible className="border rounded-lg overflow-hidden">
                      <AccordionItem value={module.id} className="border-0">
                        <AccordionTrigger className="px-6 py-4 bg-gray-50 dark:bg-gray-800 hover:no-underline hover:bg-gray-100 dark:hover:bg-gray-700">
                          <div className="flex items-center">
                            <h3 className="text-lg font-medium">{module.title}</h3>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4">
                          <p className="mb-4 text-gray-600 dark:text-gray-300">{module.description}</p>
                          <div className="space-y-3">
                            {module.lessons.map((lesson) => (
                              <div key={lesson.id} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                                <div className="flex items-center gap-3">
                                  {lesson.type === 'video' ? (
                                    <Play className="h-5 w-5 text-eduBlue-500" />
                                  ) : lesson.type === 'reading' ? (
                                    <FileText className="h-5 w-5 text-eduBlue-500" />
                                  ) : (
                                    <BookOpen className="h-5 w-5 text-eduBlue-500" />
                                  )}
                                  <span>{lesson.title}</span>
                                </div>
                                <span className="text-sm text-gray-500">{lesson.duration}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
              </TabsContent>

              {/* Support Tab */}
              <TabsContent value="support" className="py-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Student Support</h2>
                <div className="space-y-4 max-w-3xl mb-8">
                  {support.description.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {support.features.map((feature, index) => (
                    <Card key={index} className="border-0 shadow">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* FAQ Tab */}
              <TabsContent value="faq" className="py-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Frequently Asked Questions</h2>
                
                <div className="space-y-4 mb-8">
                  {faqs.map((faq, index) => (
                    <Accordion key={index} type="single" collapsible className="border rounded-lg overflow-hidden">
                      <AccordionItem value={`item-${index}`} className="border-0">
                        <AccordionTrigger className="px-6 py-4 bg-gray-50 dark:bg-gray-800 hover:no-underline hover:bg-gray-100 dark:hover:bg-gray-700 text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 text-gray-600 dark:text-gray-300">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
          <div className="edu-container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to advance your career with {title}?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join students across the globe who are building their future today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-eduBlue-600 hover:bg-eduBlue-700 text-white px-8 py-2 text-lg">
                Enroll Now
              </Button>
              <Button variant="outline" className="border-eduBlue-600 text-eduBlue-600 hover:bg-eduBlue-50 px-8 py-2 text-lg">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProgramPageTemplate;
