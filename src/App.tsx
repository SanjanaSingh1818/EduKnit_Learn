
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import OverviewPage from "./pages/OverviewPage";
import FeaturesPage from "./pages/FeaturesPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ProgramsPage from "./pages/ProgramsPage";
import StudentDashboardPage from "./pages/StudentDashboardPage";
import CourseDetailPage from "./pages/courses/CourseDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import VerificationPage from "./pages/VerificationPage";
import ChatPage from "./pages/ChatPage";
import SupportPage from "./pages/SupportPage";
import CommunicationSkillsPage from "./pages/programs/CommunicationSkillsPage";
import DigitalMarketingPage from "./pages/programs/DigitalMarketingPage";
import BasicsOfAIPage from "./pages/programs/BasicsOfAIPage";
import AIPromptCraftingPage from "./pages/programs/AIPromptCraftingPage";
import DataAnalyticsPage from "./pages/programs/DataAnalyticsPage";
import BioSkillsPage from "./pages/programs/BioSkillsPage";
import DecisionMakingPage from "./pages/programs/DecisionMakingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/student-dashboard" element={<StudentDashboardPage />} />
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/verify" element={<VerificationPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/programs/communication-skills" element={<CommunicationSkillsPage />} />
            <Route path="/programs/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/programs/basics-of-ai" element={<BasicsOfAIPage />} />
            <Route path="/programs/ai-prompt-crafting" element={<AIPromptCraftingPage />} />
            <Route path="/programs/data-analytics" element={<DataAnalyticsPage />} />
            <Route path="/programs/bioskills" element={<BioSkillsPage />} />
            <Route path="/programs/decision-making" element={<DecisionMakingPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
