
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from '../contexts/ThemeContext';
import { useSmoothScroll } from '../hooks/use-smooth-scroll';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { effectiveTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const { scrollToElement } = useSmoothScroll();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? effectiveTheme === 'dark'
          ? 'bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-purple-700/30' 
          : 'bg-white/80 backdrop-blur-md shadow-lg border-b border-purple-100'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              FK
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToElement(e, item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group ${
                    effectiveTheme === 'dark' 
                      ? 'text-gray-300 hover:text-purple-400' 
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Theme Switcher, Download CV and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Download CV Button - Desktop */}
            <a
              href="/Faiz Kazi CV.pdf"
              download
              className={`hidden md:inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                effectiveTheme === 'dark'
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-purple-500 text-white hover:bg-purple-600'
              }`}
            >
              Download CV
            </a>
            
            <ThemeSwitcher />
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  effectiveTheme === 'dark' 
                    ? 'text-gray-300 hover:text-purple-400' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`md:hidden border-t transition-colors duration-200 ${
            effectiveTheme === 'dark' 
              ? 'bg-gray-900/95 backdrop-blur-md border-purple-700/30' 
              : 'bg-white/95 backdrop-blur-md border-purple-100'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    scrollToElement(e, item.href);
                    setIsMobileMenuOpen(false); // Close mobile menu after clicking
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    effectiveTheme === 'dark' 
                      ? 'text-gray-300 hover:text-purple-400 hover:bg-gray-800/50' 
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              {/* Download CV Button - Mobile */}
              <div className="px-2 pt-4 pb-2">
                <a
                  href="/Faiz Kazi CV.pdf"
                  download
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-center px-4 py-2 rounded-md text-base font-semibold transition-all duration-200 ${
                    effectiveTheme === 'dark'
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-purple-500 text-white hover:bg-purple-600'
                  }`}
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
