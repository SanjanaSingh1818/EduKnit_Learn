import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import CourseModule, { Module } from '@/components/courses/CourseModule';
import { BookOpen, Calendar, Clock, Play, ArrowLeft, Users, FileText, Check } from 'lucide-react';

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams();
  
  // Mock course data - in a real app, this would be fetched from an API
  const course = {
    id: Number(courseId) || 1,
    title: "AI Fundamentals",
    category: "AI CERTIFICATE",
    description: "Learn how to apply AI to your everyday work with tools and best practices that boost productivity, communication skills, and more.",
    instructor: "Dr. Sarah Johnson",
    progress: 65,
    duration: "3-5 hours/week",
    timeframe: "1-2 months",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    overview: "Make AI your coworker, not your competition. Master the fundamental skills needed to leverage AI tools and applications in the workplace.",
    features: [
      {
        title: "Study anytime, anywhere",
        description: "Tailor your education to your schedule, preferences, and lifestyle with our flexible online learning platform.",
        icon: "https://lovable-uploads/ed78e675-8662-497a-826d-f3b5e6e3c093.png"
      },
      {
        title: "Learn from industry experts",
        description: "Unlock professional growth with 1:1 mentorship from an experienced professional in your field of study.",
        icon: "https://lovable-uploads/2e21954b-109a-4c32-8a12-a62e14490b9e.png"
      },
      {
        title: "Build portfolio-ready projects",
        description: "Showcase your skills to employers with hands-on projects that demonstrate your expertise and real-world readiness.",
        icon: "https://lovable-uploads/27d4257b-38cf-42ed-993f-051e47d47e2e.png"
      }
    ],
    skills: [
      "Automate and prioritize tasks",
      "Enhance written communication",
      "Develop prompts for GPT-4, ChatGPT, and LLMs",
      "Integrate AI into your daily workflows",
      "Deepen AI knowledge"
    ],
    modules: [
      {
        id: 1,
        title: "AI Fundamentals and Terminology",
        description: "Discover how artificial intelligence (AI) works, its history, its uses, and how it affects our daily lives.",
        isUnlocked: true,
        progress: 100,
        lessons: [
          {
            id: 1,
            title: "Introduction to AI Concepts",
            duration: "25 min",
            isCompleted: true,
            type: "video"
          },
          {
            id: 2,
            title: "History and Evolution of AI",
            duration: "35 min",
            isCompleted: true,
            type: "reading"
          },
          {
            id: 3,
            title: "Neural Networks and Machine Learning",
            duration: "40 min",
            isCompleted: true,
            type: "video"
          },
          {
            id: 4,
            title: "Module 1 Assessment",
            duration: "20 min",
            isCompleted: true,
            type: "quiz"
          }
        ]
      },
      {
        id: 2,
        title: "AI in Your Life",
        description: "Explore how AI is already integrated into our daily lives and how it's changing various industries.",
        isUnlocked: true,
        progress: 75,
        lessons: [
          {
            id: 5,
            title: "AI in Everyday Technology",
            duration: "30 min",
            isCompleted: true,
            type: "video"
          },
          {
            id: 6,
            title: "AI Impact on Various Industries",
            duration: "45 min",
            isCompleted: true,
            type: "reading"
          },
          {
            id: 7,
            title: "Ethical Considerations in AI",
            duration: "35 min",
            isCompleted: false,
            type: "video"
          },
          {
            id: 8,
            title: "Module 2 Assessment",
            duration: "25 min",
            isCompleted: false,
            type: "quiz"
          }
        ]
      },
      {
        id: 3,
        title: "AI for Writing",
        description: "Learn how to use AI tools to enhance your writing and communication skills.",
        isUnlocked: true,
        progress: 0,
        lessons: [
          {
            id: 9,
            title: "Introduction to AI Writing Tools",
            duration: "30 min",
            isCompleted: false,
            type: "video"
          },
          {
            id: 10,
            title: "Effective Prompting Techniques",
            duration: "40 min",
            isCompleted: false,
            type: "reading"
          },
          {
            id: 11,
            title: "Editing and Refinement with AI",
            duration: "35 min",
            isCompleted: false,
            type: "video"
          },
          {
            id: 12,
            title: "Module 3 Assessment",
            duration: "25 min",
            isCompleted: false,
            type: "quiz"
          }
        ]
      },
      {
        id: 4,
        title: "AI for Tasks",
        description: "Discover how to use AI tools to automate and optimize various tasks in your workflow.",
        isUnlocked: false,
        progress: 0,
        lessons: [
          {
            id: 13,
            title: "Task Automation Fundamentals",
            duration: "35 min",
            isCompleted: false,
            type: "video"
          },
          {
            id: 14,
            title: "AI Tools for Productivity",
            duration: "40 min",
            isCompleted: false,
            type: "reading"
          },
          {
            id: 15,
            title: "Creating Custom Automation Workflows",
            duration: "45 min",
            isCompleted: false,
            type: "video"
          },
          {
            id: 16,
            title: "Module 4 Assessment",
            duration: "30 min",
            isCompleted: false,
            type: "quiz"
          }
        ]
      },
      {
        id: 5,
        title: "AI for Lifelong Learning",
        description: "Learn how to leverage AI tools to continue learning and growing throughout your career.",
        isUnlocked: false,
        progress: 0,
        lessons: [
          {
            id: 17,
            title: "AI-Powered Learning Resources",
            duration: "30 min",
            isCompleted: false,
            type: "video"
          },
          {
            id: 18,
            title: "Personalized Learning Paths",
            duration: "35 min",
            isCompleted: false,
            type: "reading"
          },
          {
            id: 19,
            title: "Final Course Project",
            duration: "60 min",
            isCompleted: false,
            type: "assignment"
          },
          {
            id: 20,
            title: "Final Assessment",
            duration: "45 min",
            isCompleted: false,
            type: "quiz"
          }
        ]
      }
    ]
  };

  const overallProgress = course.modules.reduce((acc, module) => {
    return acc + module.progress;
  }, 0) / course.modules.length;

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Back to dashboard link */}
        <Link to="/student-dashboard" className="inline-flex items-center text-eduBlue-500 mb-6 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Course Hero */}
          <div className="lg:w-2/3">
            <div className="bg-gray-900 text-white rounded-xl overflow-hidden">
              <div className="relative h-60 md:h-80 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <Badge className="bg-eduOrange-500 mb-2">{course.category}</Badge>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{course.title}</h1>
                  <p className="text-gray-200 text-lg max-w-2xl">{course.description}</p>
                </div>
              </div>
              
              <div className="p-6 md:p-8 bg-gray-900 border-t border-gray-800">
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-eduOrange-400 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-eduOrange-400 mr-2" />
                    <span>{course.timeframe}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-eduOrange-400 mr-2" />
                    <span>{course.instructor}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Course Progress</span>
                    <span className="text-sm font-medium">{Math.round(overallProgress)}%</span>
                  </div>
                  <Progress value={overallProgress} className="h-2" />
                </div>
                
                <div className="flex mt-6 gap-4">
                  <Button className="flex-1 bg-eduOrange-500 hover:bg-eduOrange-600">
                    <Play className="mr-2 h-4 w-4" /> Continue Learning
                  </Button>
                  <Button variant="outline" className="flex-1 border-white/20 hover:bg-white/10">
                    <FileText className="mr-2 h-4 w-4" /> Download Syllabus
                  </Button>
                </div>
              </div>
            </div>

            {/* Course Tabs */}
            <div className="mt-8">
              <Tabs defaultValue="curriculum" className="w-full">
                <TabsList className="mb-6 bg-gray-100 dark:bg-gray-800">
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                </TabsList>
                
                <TabsContent value="curriculum" className="space-y-6">
                  <h2 className="text-2xl font-bold">Learn job-ready AI skills for the workplace</h2>
                  
                  <div className="space-y-4">
                    {course.modules.map((module, index) => (
                      <CourseModule key={module.id} module={module as Module} index={index} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="overview" className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Overview</h2>
                    <div className="flex gap-4 items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">Make <span className="text-eduOrange-500">AI your coworker</span>, not your competition</h3>
                        <ul className="space-y-4 mt-6">
                          <li className="flex items-start">
                            <div className="h-5 w-5 rounded-full bg-eduOrange-100 text-eduOrange-600 dark:bg-eduOrange-900 dark:text-eduOrange-300 flex items-center justify-center mr-2 mt-1">
                              <Check className="h-3 w-3" />
                            </div>
                            <p>Master the fundamental skills needed to leverage AI tools and applications in the workplace.</p>
                          </li>
                          <li className="flex items-start">
                            <div className="h-5 w-5 rounded-full bg-eduOrange-100 text-eduOrange-600 dark:bg-eduOrange-900 dark:text-eduOrange-300 flex items-center justify-center mr-2 mt-1">
                              <Check className="h-3 w-3" />
                            </div>
                            <p>Learn to use AI tools to enhance written communication, automate and prioritize tasks, and develop new skills.</p>
                          </li>
                          <li className="flex items-start">
                            <div className="h-5 w-5 rounded-full bg-eduOrange-100 text-eduOrange-600 dark:bg-eduOrange-900 dark:text-eduOrange-300 flex items-center justify-center mr-2 mt-1">
                              <Check className="h-3 w-3" />
                            </div>
                            <p>Combine all your new skills into a final capstone, where you'll develop a proposal on how to leverage AI in your workplace.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {course.features.map((feature, index) => (
                      <Card key={index} className="border border-gray-200 dark:border-gray-700">
                        <CardContent className="pt-6">
                          <div className="flex flex-col items-center text-center">
                            <img src={feature.icon} alt={feature.title} className="h-24 w-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-6">Skills you'll learn</h2>
                    <Card className="bg-orange-50 dark:bg-orange-900/20 border-0">
                      <CardContent className="p-6">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {course.skills.map((skill, index) => (
                            <li key={index} className="flex items-center">
                              <div className="h-5 w-5 rounded-full bg-eduOrange-100 text-eduOrange-600 dark:bg-eduOrange-900 dark:text-eduOrange-300 flex items-center justify-center mr-3">
                                <Check className="h-3 w-3" />
                              </div>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Right Side - Sidebar */}
          <div className="lg:w-1/3">
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 sticky top-20">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">PROGRAM SUPPORTS</h3>
                <h2 className="text-2xl font-bold mb-4">You're in <span className="text-eduOrange-500">good hands</span></h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Get expert support from an academic coach, live chat with experts, and more.
                </p>
                
                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
                    <h4 className="font-bold mb-2">Get instant access to answers, anytime</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Get real-time guidance and feedback around the clock, through tools like Live Chat, AI-powered simulations, and tutoring sessions with industry experts.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">Bridge learning to career success</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Leverage professional development coaching to align program learnings with your career goals while building self-advocacy and communication skills.
                    </p>
                  </div>
                </div>
                
                <Button className="w-full mt-8 bg-eduOrange-500 hover:bg-eduOrange-600">
                  Start Learning Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CourseDetailPage;
