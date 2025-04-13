
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, GraduationCap, BookOpen } from 'lucide-react';

const StudentDashboardPage = () => {
  // Mock data for student dashboard
  const enrolledCourses = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      progress: 65,
      instructor: 'Dr. Sarah Johnson',
      nextLesson: 'CSS Flexbox Layout',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      progress: 32,
      instructor: 'Prof. Michael Chen',
      nextLesson: 'Statistical Analysis with Python',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Digital Marketing Mastery',
      progress: 89,
      instructor: 'Jessica Williams, MBA',
      nextLesson: 'Social Media Campaign Planning',
      image: '/placeholder.svg'
    }
  ];

  const upcomingDeadlines = [
    {
      id: 1,
      title: 'JavaScript Project Submission',
      course: 'Introduction to Web Development',
      dueDate: '2025-04-20'
    },
    {
      id: 2,
      title: 'Data Visualization Assignment',
      course: 'Data Science Fundamentals',
      dueDate: '2025-04-25'
    }
  ];

  return (
    <Layout>
      <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Student Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">Welcome back! Track your progress and manage your learning journey.</p>
          </div>

          {/* Dashboard Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Enrolled Courses</CardTitle>
                <CardDescription>Your active learning paths</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center text-4xl font-bold text-eduBlue-600 dark:text-eduBlue-400">
                  <GraduationCap className="mr-2 h-8 w-8 text-eduBlue-500" />
                  {enrolledCourses.length}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Overall Progress</CardTitle>
                <CardDescription>Your learning journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">62% Complete</span>
                  </div>
                  <Progress value={62} className="h-2 bg-gray-200 dark:bg-gray-700" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
                <CardDescription>Tasks requiring attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center text-4xl font-bold text-eduOrange-600 dark:text-eduOrange-400">
                  <Calendar className="mr-2 h-8 w-8 text-eduOrange-500" />
                  {upcomingDeadlines.length}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Course Content */}
          <div className="mb-8">
            <Tabs defaultValue="my-courses" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="my-courses">My Courses</TabsTrigger>
                <TabsTrigger value="deadlines">Upcoming Deadlines</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>
              
              <TabsContent value="my-courses" className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Enrolled Courses</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enrolledCourses.map(course => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="h-40 bg-gray-200 dark:bg-gray-700 relative">
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription>{course.instructor}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {course.progress}% Complete
                            </span>
                          </div>
                          <Progress 
                            value={course.progress} 
                            className="h-2 bg-gray-200 dark:bg-gray-700" 
                          />
                          <div className="flex items-start space-x-2 mt-4">
                            <BookOpen className="h-5 w-5 text-eduBlue-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium">Next Lesson:</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{course.nextLesson}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-eduBlue-500 hover:bg-eduBlue-600">
                          Continue Learning
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="deadlines">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Upcoming Deadlines</h2>
                
                <div className="space-y-4">
                  {upcomingDeadlines.map(deadline => (
                    <Card key={deadline.id}>
                      <CardHeader>
                        <CardTitle className="text-lg">{deadline.title}</CardTitle>
                        <CardDescription>{deadline.course}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-eduOrange-500" />
                          <span className="text-sm font-medium">
                            Due: {new Date(deadline.dueDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-eduOrange-500 hover:bg-eduOrange-600">
                          View Assignment
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="achievements">
                <div className="p-6 text-center">
                  <GraduationCap className="h-16 w-16 mx-auto text-gray-400" />
                  <h3 className="mt-4 text-lg font-medium">No Achievements Yet</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Complete your courses to earn certificates and badges
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentDashboardPage;
