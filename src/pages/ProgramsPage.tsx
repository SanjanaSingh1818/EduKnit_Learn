import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Brain, Megaphone, Bot, Database, FlaskConical, GraduationCap, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const programs = [
  {
    title: "Communication Skills",
    description: "Speak smart. Think sharp. Lead with confidence.",
    features: ["Personality development", "Interview & GD training", "Presentation & corporate etiquette"],
    icon: Users,
    gradient: "from-eduBlue-100 to-eduBlue-50",
    path: "/programs/communication-skills"
  },
  {
    title: "Digital Marketing",
    description: "Learn how businesses grow in the real world — and how you can, too.",
    features: ["Social media strategy", "Performance marketing", "Branding & campaign planning"],
    icon: Megaphone,
    gradient: "from-eduOrange-100 to-eduOrange-50",
    path: "/programs/digital-marketing"
  },
  {
    title: "Basics of AI",
    description: "AI is not just the future — it's your future.",
    features: ["Machine learning concepts", "AI in real life", "Ethical and practical AI use"],
    icon: Brain,
    gradient: "from-eduBlue-100 to-eduBlue-50",
    path: "/programs/basics-of-ai"
  },
  {
    title: "AI Prompt Crafting",
    description: "Don't just use ChatGPT — command it like a pro.",
    features: ["Prompt engineering", "AI + human collaboration", "Hands-on mini-projects"],
    icon: Bot,
    gradient: "from-eduOrange-100 to-eduOrange-50",
    path: "/programs/ai-prompt-crafting"
  },
  {
    title: "Data Analytics",
    description: "Make decisions like a CEO — with data.",
    features: ["Excel, Sheets & visualization tools", "Industry use-cases", "Intro to Python for analysis"],
    icon: Database,
    gradient: "from-eduBlue-100 to-eduBlue-50",
    path: "/programs/data-analytics"
  },
  {
    title: "BioSkills",
    description: "Get beyond textbooks. Build industry-relevant biology skills.",
    features: ["Applied biology thinking", "Case-based learning", "Career paths in biosciences"],
    icon: FlaskConical,
    gradient: "from-eduOrange-100 to-eduOrange-50",
    path: "/programs/bioskills"
  },
  {
    title: "Decision-Making Skills",
    description: "Learn how top leaders think.",
    features: ["Critical thinking", "Problem solving", "Real-life decision simulations"],
    icon: Lightbulb,
    gradient: "from-eduBlue-100 to-eduBlue-50",
    path: "/programs/decision-making"
  },
  {
    title: "Job Search Program",
    description: "Your step-by-step guide to land internships & jobs.",
    features: ["Resume & LinkedIn building", "Interview simulations", "Freelancing guidance"],
    icon: GraduationCap,
    gradient: "from-eduOrange-100 to-eduOrange-50",
    comingSoon: true
  }
];

const ProgramsPage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="edu-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-1 mb-6 text-gray-900 dark:text-white">
                Our Skill-Building Programs
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                At EduKnit, we believe students shouldn't have to choose between academic preparation and
                career development.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Every program is flexible, beginner-friendly, and career-focused — built to give you a head-start
                while others are still waiting for results.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="edu-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card 
                  key={index}
                  className={cn(
                    "transform transition-all duration-300 hover:scale-105 overflow-hidden border-0 shadow-lg",
                    program.comingSoon && "opacity-75"
                  )}
                >
                  <div className={cn("h-2 w-full bg-gradient-to-r", program.gradient)} />
                  <CardHeader className="space-y-1 pb-4">
                    <div className="flex items-center space-x-4">
                      <div className={cn(
                        "p-2 rounded-lg",
                        program.gradient.includes("eduBlue") ? "bg-eduBlue-100 text-eduBlue-600" : "bg-eduOrange-100 text-eduOrange-600"
                      )}>
                        <program.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold flex items-center gap-2">
                          {program.title}
                          {program.comingSoon && (
                            <span className="text-sm font-normal px-2 py-1 bg-eduOrange-100 text-eduOrange-600 rounded">
                              Coming Soon
                            </span>
                          )}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      {program.description}
                    </p>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                          <span className={cn(
                            "mr-2 h-1.5 w-1.5 rounded-full",
                            program.gradient.includes("eduBlue") ? "bg-eduBlue-500" : "bg-eduOrange-500"
                          )} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={cn(
                        "w-full mt-4",
                        program.gradient.includes("eduBlue") 
                          ? "bg-eduBlue-500 hover:bg-eduBlue-600" 
                          : "bg-eduOrange-500 hover:bg-eduOrange-600"
                      )}
                      disabled={program.comingSoon}
                      asChild
                    >
                      <Link to={program.path || "#"}>
                        {program.comingSoon ? "Coming Soon" : "Learn More"}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16">
          <div className="edu-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-2 mb-8 text-gray-900 dark:text-white">
                Why Choose EduKnit?
              </h2>
              <ul className="space-y-4 text-left max-w-xl mx-auto mb-12">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3" />
                  Designed for Class 11, 12 & early college students
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3" />
                  100% practical, mentor-led learning
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3" />
                  Skills that align with today's job market
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-eduBlue-500 mr-3" />
                  Learn at your own pace, with full support
                </li>
              </ul>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Choose Your Program. Shape Your Future.
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  No more waiting till after college.<br />
                  With EduKnit, your career starts right now.
                </p>
                <Button className="bg-eduOrange-500 hover:bg-eduOrange-600 text-white px-8 py-6 text-lg">
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProgramsPage;
