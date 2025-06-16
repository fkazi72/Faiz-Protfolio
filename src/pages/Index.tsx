
import React, { useState, useEffect } from 'react';
import AnimatedGradientBlobs from '../components/AnimatedGradientBlobs';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BrandsSection from '../components/BrandsSection';
import ProjectsSection from '../components/ProjectsSection';
import AchievementsSection from '../components/AchievementsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const IndexContent = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { effectiveTheme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedGradientBlobs mousePosition={mousePosition} theme={effectiveTheme} />
      
      {/* Gradient Overlay */}
      <div className={`fixed inset-0 pointer-events-none z-5 ${
        effectiveTheme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900/40 via-purple-900/20 to-blue-900/40' 
          : 'bg-gradient-to-br from-white/60 via-purple-50/40 to-blue-50/60'
      }`}></div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <BrandsSection />
        <ProjectsSection />
        <AchievementsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Enhanced Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Faiz Kazi - Full Stack Developer
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Crafting exceptional digital experiences with cutting-edge technology
            </p>
            <p className="text-gray-400 text-sm">
              © 2024 Faiz Kazi Portfolio. Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Index = () => {
  return (
    <ThemeProvider>
      <IndexContent />
    </ThemeProvider>
  );
};

export default Index;
