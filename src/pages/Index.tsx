
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import PopularCoursesSection from '@/components/home/PopularCoursesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';
import OverviewSection from '@/components/home/OverviewSection';
import DynamicContentSection from '@/components/home/DynamicContentSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <OverviewSection />
      <DynamicContentSection />
      <FeaturesSection />
      <PopularCoursesSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
