import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface CourseLayoutProps {
  children: React.ReactNode;
}

const CourseLayout: React.FC<CourseLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        {children}
      </div>
      
      <Footer />
    </div>
  );
};

export default CourseLayout; 