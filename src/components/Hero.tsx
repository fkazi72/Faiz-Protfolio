
import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { effectiveTheme } = useTheme();

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-32 mb-20 ${
      effectiveTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
    }`}>
      {/* Background Elements */}
      <div className={`absolute inset-0 ${
        effectiveTheme === 'dark' 
          ? 'bg-gradient-to-br from-purple-900/5 via-pink-900/5 to-blue-900/5' 
          : 'bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20'
      }`}></div>
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${
        effectiveTheme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-500/25'
      } rounded-full blur-3xl animate-pulse`}></div>
      <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 ${
        effectiveTheme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-500/25'
      } rounded-full blur-3xl animate-pulse animation-delay-1000`}></div>
      
      <div className="text-center z-10 max-w-5xl mx-auto px-4">
        <div className="mb-8 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <Sparkles className={`${
              effectiveTheme === 'dark' ? 'text-purple-400' : 'text-purple-500'
            } animate-pulse`} size={32} />
          </div>
          
          {/* Profile Image */}
          <div className="mb-8 flex justify-center relative">
            <div className="relative">
              {/* Glowing effect in background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-30 animate-pulse z-0"></div>
              
              {/* Image container */}
              <div className="relative z-10">
                <img
                  src="/Faiz Profile.jpeg"
                  alt="Faiz Kazi"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
              Faiz Kazi
            </span>
          </h1>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animation-delay-300">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h2>
          
          <div className="relative">
            <p className={`text-2xl md:text-3xl mb-8 animate-fade-in animation-delay-600 font-light ${
              effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Crafting digital experiences with
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold"> passion </span>
              and
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold"> precision</span>
            </p>
          </div>
          
          <p className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto animate-fade-in animation-delay-900 leading-relaxed ${
            effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I build scalable web applications, integrate cutting-edge APIs, and solve complex problems 
            with modern technologies. Let's create something extraordinary together.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12 animate-fade-in animation-delay-1200">
          <a
            href="#contact"
            className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">Let's Work Together</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#projects"
            className={`group relative overflow-hidden border-2 ${
              effectiveTheme === 'dark' 
                ? 'border-purple-400 text-purple-400 hover:text-white' 
                : 'border-purple-600 text-purple-600 hover:text-white'
            } px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg`}
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
        </div>

        <div className="flex justify-center space-x-8 animate-fade-in animation-delay-1500">
          {[
            { icon: Github, color: effectiveTheme === 'dark' ? 'hover:text-purple-400' : 'hover:text-purple-600', href: 'https://github.com/fkazi72' },
            { icon: Linkedin, color: effectiveTheme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600', href: 'https://linkedin.com/in/faizkazioies' },
            { icon: Twitter, color: effectiveTheme === 'dark' ? 'hover:text-cyan-400' : 'hover:text-cyan-600', href: '#' }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target={social.href !== '#' ? '_blank' : undefined}
              rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
              className={`group relative ${
                effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              } ${social.color} transition-all duration-300 hover:scale-125 transform`}
            >
              <social.icon size={28} />
              <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-300"></div>
            </a>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="relative">
            <ArrowDown className={`${
              effectiveTheme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            } drop-shadow-lg`} size={28} />
            <div className={`absolute inset-0 ${
              effectiveTheme === 'dark' ? 'bg-purple-400' : 'bg-purple-600'
            } blur-xl opacity-30 animate-pulse`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
