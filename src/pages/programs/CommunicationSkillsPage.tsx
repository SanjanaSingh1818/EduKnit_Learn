
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Users, BookOpen, Clock, Trophy, Calendar, BarChart, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import SectionHeader from '@/components/ui/SectionHeader';

const CommunicationSkillsPage = () => {
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

        {/* Program Overview */}
        <section className="py-16">
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
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="edu-container">
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
        </section>

        {/* Program Structure */}
        <section className="py-16">
          <div className="edu-container">
            <SectionHeader 
              title="Program Structure" 
              subtitle="A flexible curriculum designed to fit your schedule"
            />
            
            <div className="mt-10 space-y-8">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Module 1: Foundations of Communication</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3"></div>
                      <span>Communication models and theories</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3"></div>
                      <span>Verbal and non-verbal communication</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3"></div>
                      <span>Communication styles assessment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Module 2: Business Writing</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3"></div>
                      <span>Emails, memos, and professional documents</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3"></div>
                      <span>Clarity, conciseness, and tone</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3"></div>
                      <span>Writing for different audiences</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Module 3: Presentation Skills</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3"></div>
                      <span>Structuring impactful presentations</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3"></div>
                      <span>Delivery techniques and visual aids</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3"></div>
                      <span>Handling Q&A and difficult situations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Module 4: Final Project</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3"></div>
                      <span>Comprehensive communication strategy</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3"></div>
                      <span>Recorded presentation with peer feedback</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3"></div>
                      <span>Professional portfolio piece</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

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
