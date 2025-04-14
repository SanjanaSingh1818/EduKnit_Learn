
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DashboardOverviewCards from '@/components/dashboard/overview/DashboardOverviewCards';
import CourseList from '@/components/dashboard/courses/CourseList';
import NotificationList from '@/components/dashboard/notifications/NotificationList';
import DashboardCalendar from '@/components/dashboard/calendar/DashboardCalendar';
import StatisticsCards from '@/components/dashboard/statistics/StatisticsCards';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Book, FileText, Play, BarChart, Video } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, CalendarIcon, Clock } from 'lucide-react';

const StudentDashboardPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  // Mock data for student dashboard
  const enrolledCourses = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      progress: 65,
      instructor: 'Dr. Sarah Johnson',
      nextLesson: 'CSS Flexbox Layout',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
      status: 'In Progress',
      lastAccessed: '2 days ago',
      nextSessionDate: '2025-04-18T15:30:00',
      zoomLink: 'https://zoom.us/j/123456789'
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      progress: 32,
      instructor: 'Prof. Michael Chen',
      nextLesson: 'Statistical Analysis with Python',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
      status: 'In Progress',
      lastAccessed: '5 days ago',
      nextSessionDate: '2025-04-20T10:00:00',
      zoomLink: 'https://zoom.us/j/987654321'
    },
    {
      id: 3,
      title: 'Digital Marketing Mastery',
      progress: 89,
      instructor: 'Jessica Williams, MBA',
      nextLesson: 'Social Media Campaign Planning',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      status: 'Almost Complete',
      lastAccessed: 'Today',
      nextSessionDate: '2025-04-19T14:00:00',
      zoomLink: 'https://zoom.us/j/567891234'
    }
  ];

  const upcomingDeadlines = [
    {
      id: 1,
      title: 'JavaScript Project Submission',
      course: 'Introduction to Web Development',
      dueDate: '2025-04-20',
      priority: 'High'
    },
    {
      id: 2,
      title: 'Data Visualization Assignment',
      course: 'Data Science Fundamentals',
      dueDate: '2025-04-25',
      priority: 'Medium'
    },
    {
      id: 3,
      title: 'Marketing Plan Draft',
      course: 'Digital Marketing Mastery',
      dueDate: '2025-04-22',
      priority: 'Low'
    }
  ];

  const liveSessionsToday = [
    {
      id: 1,
      title: 'Advanced CSS Techniques',
      course: 'Introduction to Web Development',
      time: '15:30 - 17:00',
      instructor: 'Dr. Sarah Johnson',
      zoomLink: 'https://zoom.us/j/123456789'
    },
    {
      id: 2,
      title: 'Python Data Analysis Workshop',
      course: 'Data Science Fundamentals',
      time: '18:00 - 19:30',
      instructor: 'Prof. Michael Chen',
      zoomLink: 'https://zoom.us/j/987654321'
    }
  ];

  const notifications = [
    {
      id: 1,
      title: 'Assignment Graded',
      message: 'Your "JavaScript Basics" assignment has been graded. Score: 92/100',
      time: '20 minutes ago',
      type: 'success'
    },
    {
      id: 2,
      title: 'New Course Material',
      message: 'New materials have been added to "Data Science Fundamentals"',
      time: '2 hours ago',
      type: 'info'
    },
    {
      id: 3,
      title: 'Upcoming Deadline',
      message: 'JavaScript Project Submission is due in 2 days',
      time: '3 hours ago',
      type: 'warning'
    }
  ];

  const renderPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'High':
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">{priority}</Badge>;
      case 'Medium':
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">{priority}</Badge>;
      case 'Low':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">{priority}</Badge>;
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Student Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">Welcome back! Track your progress and manage your learning journey.</p>
        </div>

        {/* Overview Cards */}
        <DashboardOverviewCards
          enrolledCourses={enrolledCourses}
          upcomingDeadlines={upcomingDeadlines}
          liveSessionsToday={liveSessionsToday}
        />

        {/* Course Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content - Left and Middle columns */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="my-courses" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="my-courses">My Courses</TabsTrigger>
                <TabsTrigger value="deadlines">Upcoming Deadlines</TabsTrigger>
                <TabsTrigger value="live-sessions">Live Sessions</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>
              
              <TabsContent value="my-courses" className="space-y-6">
                <CourseList courses={enrolledCourses} />
                <Button 
                  variant="ghost" 
                  className="w-full border border-dashed border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
                >
                  Explore More Courses
                </Button>
              </TabsContent>
              
              <TabsContent value="deadlines">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Upcoming Deadlines</CardTitle>
                    <CardDescription>Stay on track with your assignments</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-4">
                      {upcomingDeadlines.map(deadline => (
                        <div key={deadline.id} className="flex items-center justify-between p-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium text-gray-900 dark:text-gray-100">{deadline.title}</h3>
                              {renderPriorityBadge(deadline.priority)}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{deadline.course}</p>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              <span>Due: {formatDate(deadline.dueDate)}</span>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full text-eduBlue-500 hover:bg-eduBlue-50 dark:hover:bg-eduBlue-900/20">
                      View All Assignments
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="live-sessions">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Today's Live Sessions</CardTitle>
                    <CardDescription>Interactive learning with instructors</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-4">
                      {liveSessionsToday.map(session => (
                        <div key={session.id} className="p-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium text-gray-900 dark:text-gray-100">{session.title}</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{session.course}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Instructor: {session.instructor}</p>
                              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <Clock className="mr-2 h-4 w-4" />
                                <span>{session.time}</span>
                              </div>
                            </div>
                            <Button
                              className="bg-eduOrange-500 hover:bg-eduOrange-600"
                              onClick={() => window.open(session.zoomLink, '_blank')}
                            >
                              <Video className="mr-2 h-4 w-4" /> Join Now
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full text-eduBlue-500 hover:bg-eduBlue-50 dark:hover:bg-eduBlue-900/20">
                      View All Sessions
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="achievements">
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-6 mb-4">
                    <Award className="h-16 w-16 text-gray-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">No Achievements Yet</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
                    Complete your courses and assignments to earn certificates and badges. Your achievements will be displayed here.
                  </p>
                  <Button className="mt-6 bg-eduBlue-500 hover:bg-eduBlue-600">
                    Explore Courses
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
            
            <StatisticsCards />
          </div>
          
          {/* Right column - Calendar and Notifications */}
          <div className="space-y-6">
            <DashboardCalendar date={date} onSelect={setDate} />
            <NotificationList notifications={notifications} />
            
            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start">
                    <Book className="mr-2 h-4 w-4" /> Course Catalog
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <FileText className="mr-2 h-4 w-4" /> My Certificates
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <BarChart className="mr-2 h-4 w-4" /> Performance
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Play className="mr-2 h-4 w-4" /> Tutorial Videos
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboardPage;
