
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Eye } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import MouseGradientCard from './MouseGradientCard';

const ProjectsSection: React.FC = () => {
  const { effectiveTheme } = useTheme();

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with integrated payment system',
      longDescription: 'A comprehensive e-commerce platform built with PHP and MySQL. Features include user authentication, product catalog, shopping cart, payment integration, order management, and admin dashboard. The platform offers a seamless shopping experience with features like category navigation, product search, and secure checkout.',
      images: [
        '/Home page.png',
        '/e-comm Categories section.png',
        '/e-comm Product page.png',
        '/e-comm Login.png'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML/CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management Application',
      description: 'Advanced task tracking and management system',
      longDescription: 'A sophisticated task management application that helps users organize and track their tasks effectively. Built with modern web technologies, it features a clean interface, task categorization, progress tracking, and detailed reporting capabilities.',
      images: [
        '/Application Main Tasks Shot.jpeg',
        '/Tasks Full.jpeg',
        '/Report.jpeg'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern and interactive personal portfolio',
      longDescription: 'A responsive portfolio website showcasing my work and skills. Features smooth animations, dark/light mode, contact form with email integration, and a modern design approach. Built with React and styled with Tailwind CSS.',
      images: [
        '/Achievements.jpeg',
        '/Home page.png'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageTransition, setImageTransition] = useState(false);

  const nextImage = () => {
    setImageTransition(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
      setImageTransition(false);
    }, 150);
  };

  const prevImage = () => {
    setImageTransition(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
      setImageTransition(false);
    }, 150);
  };

  const handleProjectChange = (project: typeof projects[0]) => {
    setImageTransition(true);
    setTimeout(() => {
      setSelectedProject(project);
      setCurrentImageIndex(0);
      setImageTransition(false);
    }, 150);
  };

  return (
    <section id="projects" className={`py-20 relative ${
      effectiveTheme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900/50 via-purple-900/30 to-blue-900/50' 
        : 'bg-gradient-to-br from-purple-50/90 to-blue-50/90'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className={`bg-gradient-to-r ${
              effectiveTheme === 'dark' 
                ? 'from-purple-400 to-blue-400' 
                : 'from-purple-600 to-blue-600'
            } bg-clip-text text-transparent`}>
              Featured Projects
            </span>
          </h2>
          <p className={`text-xl ${
            effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Project List */}
          <div className="space-y-4">
            {projects.map((project) => (
              <MouseGradientCard
                key={project.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedProject.id === project.id
                    ? effectiveTheme === 'dark' 
                      ? 'bg-gray-800 shadow-lg scale-105 border-purple-600/30' 
                      : 'bg-white shadow-lg scale-105 border-purple-200'
                    : effectiveTheme === 'dark' 
                      ? 'bg-gray-800/50 hover:bg-gray-800 hover:shadow-md border-purple-700/20' 
                      : 'bg-white/70 hover:bg-white hover:shadow-md border-purple-100'
                }`}
                onClick={() => handleProjectChange(project)}
              >
                <h3 className={`text-xl font-bold mb-2 ${
                  effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}>{project.title}</h3>
                <p className={`mb-4 ${
                  effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm rounded-full ${
                        effectiveTheme === 'dark' 
                          ? 'bg-purple-900/50 text-purple-300 border border-purple-700/30' 
                          : 'bg-purple-100 text-purple-700 border border-purple-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </MouseGradientCard>
            ))}
          </div>

          {/* Project Details */}
          <MouseGradientCard className={`rounded-xl shadow-lg overflow-hidden ${
            effectiveTheme === 'dark' 
              ? 'bg-gray-800 border-purple-700/30' 
              : 'bg-white border-purple-100'
          }`}>
            {/* Image Slider */}
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className={`w-full h-full object-cover transition-all duration-300 ease-in-out ${
                    imageTransition ? 'opacity-0 filter blur-sm scale-105' : 'opacity-100 filter blur-0 scale-100'
                  }`}
                />
              </div>
              
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className={`absolute left-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-200 hover:scale-110 z-10 ${
                      effectiveTheme === 'dark' 
                        ? 'bg-gray-900/80 hover:bg-gray-800/90 text-gray-200 border border-purple-600/30' 
                        : 'bg-white/90 hover:bg-white text-gray-700 border border-purple-200 shadow-lg'
                    }`}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-200 hover:scale-110 z-10 ${
                      effectiveTheme === 'dark' 
                        ? 'bg-gray-900/80 hover:bg-gray-800/90 text-gray-200 border border-purple-600/30' 
                        : 'bg-white/90 hover:bg-white text-gray-700 border border-purple-200 shadow-lg'
                    }`}
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setImageTransition(true);
                          setTimeout(() => {
                            setCurrentImageIndex(index);
                            setImageTransition(false);
                          }, 100);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex 
                            ? effectiveTheme === 'dark' ? 'bg-purple-400 scale-125' : 'bg-white scale-125'
                            : effectiveTheme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="p-6">
              <h3 className={`text-2xl font-bold mb-4 ${
                effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>{selectedProject.title}</h3>
              <p className={`mb-6 ${
                effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>{selectedProject.longDescription}</p>
              
              <div className="flex flex-wrap gap-3">
                <a
                  href={`/project/${selectedProject.id}`}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                    effectiveTheme === 'dark' 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg' 
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
                  }`}
                >
                  <Eye size={16} />
                  <span>View Details</span>
                </a>
                <a
                  href={selectedProject.liveUrl}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                    effectiveTheme === 'dark' 
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
                <a
                  href={selectedProject.githubUrl}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                    effectiveTheme === 'dark' 
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Github size={16} />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </MouseGradientCard>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
