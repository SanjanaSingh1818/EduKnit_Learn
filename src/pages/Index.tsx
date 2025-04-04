
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import PopularCoursesSection from '@/components/home/PopularCoursesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';

const Index = () => {
  return (
    <Layout>
      <div id="overview">
        <HeroSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <PopularCoursesSection />
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <CtaSection />
    </Layout>
  );
};

export default Index;
