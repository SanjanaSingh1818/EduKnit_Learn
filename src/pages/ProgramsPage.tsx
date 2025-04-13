
import React from 'react';
import Layout from '@/components/layout/Layout';
import PopularCoursesSection from '@/components/home/PopularCoursesSection';

const ProgramsPage = () => {
  return (
    <Layout>
      <div className="pt-10">
        <PopularCoursesSection />
      </div>
    </Layout>
  );
};

export default ProgramsPage;
