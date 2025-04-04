
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import PopularCoursesSection from '@/components/home/PopularCoursesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';
import OverviewSection from '@/components/home/OverviewSection';

const Index = () => {
  return (
    <Layout>
      <div id="overview">
        <HeroSection />
        <OverviewSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="programs">
        <PopularCoursesSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="cta">
        <CtaSection />
      </div>
    </Layout>
  );
};

export default Index;
