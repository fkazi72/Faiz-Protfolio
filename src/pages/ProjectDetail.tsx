import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Code, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import MouseGradientCard from '../components/MouseGradientCard';
import { ThemeProvider } from '../contexts/ThemeContext';
import AnimatedGradientBlobs from '../components/AnimatedGradientBlobs';

const ProjectDetailContent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { effectiveTheme } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageTransition, setImageTransition] = useState(false);

  // Project data
  const projects = {
    '1': {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with integrated payment system',
      longDescription: 'A comprehensive e-commerce platform built with PHP and MySQL, providing a seamless shopping experience with modern features and secure payment processing.',
      images: [
        '/e-comm Login.png',
        '/e-comm Categories section.png',
        '/e-comm Product page.png',
        '/Home page.png'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'REST API', 'Payment Gateway'],
      languages: ['PHP', 'JavaScript', 'HTML', 'CSS', 'SQL'],
      duration: '3 months',
      team: 'Single developer',
      features: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart and checkout process',
        'Payment integration with Stripe',
        'Admin dashboard for product management',
        'Order tracking and history',
        'Responsive design for all devices',
        'Real-time notifications'
      ],
      challenges: [
        'Implementing secure payment processing',
        'Optimizing database queries for large product catalogs',
        'Creating a responsive design that works on all devices',
        'Managing state across complex user flows'
      ],
      tips: [
        'Always validate user input on both frontend and backend',
        'Use environment variables for sensitive configuration',
        'Implement proper error handling and user feedback',
        'Consider performance implications of large datasets',
        'Test payment flows thoroughly in sandbox environments'
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
    '2': {
      title: 'Task Management App',
      description: 'Collaborative project management tool',
      longDescription: 'A modern task management application with real-time collaboration features. Built with React, TypeScript, and Socket.io for seamless team coordination.',
      images: [
        '/Application Main Tasks Shot.jpeg',
        '/Tasks Full.jpeg',
        '/Report.jpeg',
        '/Achievements.jpeg'
      ],
      technologies: ['Dart', 'Flutter', 'Socket.io', 'Express', 'PostgreSQL', 'Redis', 'Material-UI'],
      languages: ['Java', 'Dart', 'SQL', 'HTML', 'CSS'],
      duration: '4 months',
      team: 'Single developer',
      features: [
        'Real-time collaboration with Socket.io',
        'Drag-and-drop task management',
        'Team member management and permissions',
        'Project timeline and progress tracking',
        'File attachments and comments',
        'Notification system',
        'Advanced filtering and search',
        'Time tracking and reporting'
      ],
      challenges: [
        'Implementing real-time synchronization across multiple users',
        'Managing complex state with drag-and-drop functionality',
        'Optimizing performance with large datasets',
        'Creating intuitive user interfaces for complex workflows'
      ],
      tips: [
        'Use TypeScript for better code maintainability',
        'Implement optimistic updates for better user experience',
        'Consider offline functionality for mobile users',
        'Use proper database indexing for search performance',
        'Implement proper error boundaries for React components'
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
    '3': {
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking application',
      longDescription: 'A beautiful weather dashboard that provides real-time weather data, forecasts, and interactive maps. Features location-based services and beautiful data visualizations.',
      images: [
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1200&h=600&fit=crop',
        'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&h=600&fit=crop',
        'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&h=600&fit=crop',
      ],
      technologies: ['React', 'Redux', 'Weather API', 'Chart.js', 'Tailwind CSS', 'Mapbox', 'PWA'],
      languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
      duration: '2 months',
      team: '2 developers',
      features: [
        'Real-time weather data from multiple sources',
        'Interactive weather maps',
        '7-day weather forecast',
        'Location-based weather alerts',
        'Beautiful data visualizations with Chart.js',
        'Progressive Web App (PWA) capabilities',
        'Offline functionality',
        'Customizable dashboard widgets'
      ],
      challenges: [
        'Integrating multiple weather API sources',
        'Creating responsive and interactive maps',
        'Implementing offline functionality',
        'Optimizing performance for real-time data updates'
      ],
      tips: [
        'Cache weather data to reduce API calls',
        'Use service workers for offline functionality',
        'Implement proper error handling for API failures',
        'Consider user location privacy and permissions',
        'Use debouncing for search functionality'
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-purple-600 hover:text-purple-700">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setImageTransition(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      setImageTransition(false);
    }, 300);
  };

  const prevImage = () => {
    setImageTransition(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      setImageTransition(false);
    }, 300);
  };

  const selectImage = (index: number) => {
    if (index !== currentImageIndex) {
      setImageTransition(true);
      setTimeout(() => {
        setCurrentImageIndex(index);
        setImageTransition(false);
      }, 300);
    }
  };

  return (
    <div className={`min-h-screen relative ${
      effectiveTheme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <AnimatedGradientBlobs mousePosition={{ x: 0, y: 0 }} theme={effectiveTheme} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        {/* Back Button */}
        <Link
          to="/"
          className={`inline-flex items-center space-x-2 mb-8 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
            effectiveTheme === 'dark' 
              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-purple-700/30' 
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-purple-200 shadow-sm'
          }`}
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </Link>

        {/* Enhanced Image Slider */}
        <MouseGradientCard className={`rounded-xl mb-8 overflow-hidden ${
          effectiveTheme === 'dark' 
            ? 'bg-gray-800 border-purple-700/30' 
            : 'bg-white border-purple-100'
        }`}>
          <div className="relative w-full overflow-hidden" style={{ minHeight: "200px" }}>
            <img
              src={project.images[currentImageIndex]}
              alt={project.title}
              className={`w-full h-auto max-h-[80vh] transition-all duration-300 ease-in-out ${
                imageTransition ? 'opacity-0 blur-md scale-110' : 'opacity-100 blur-0 scale-100'
              }`}
              style={{ objectFit: "contain" }}
            />
            
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-200 hover:scale-110 z-10 ${
                    effectiveTheme === 'dark' 
                      ? 'bg-gray-900/80 hover:bg-gray-800/90 text-gray-200 border border-purple-600/30' 
                      : 'bg-white/90 hover:bg-white text-gray-700 border border-purple-200 shadow-lg'
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-200 hover:scale-110 z-10 ${
                    effectiveTheme === 'dark' 
                      ? 'bg-gray-900/80 hover:bg-gray-800/90 text-gray-200 border border-purple-600/30' 
                      : 'bg-white/90 hover:bg-white text-gray-700 border border-purple-200 shadow-lg'
                  }`}
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
              <p className="text-xl opacity-90">{project.description}</p>
            </div>
          </div>
          
          {/* Thumbnail Navigation */}
          {project.images.length > 1 && (
            <div className="p-4">
              <div 
                className="flex space-x-3 overflow-x-auto scrollbar-hide" 
                style={{ 
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none',
                  WebkitOverflowScrolling: 'touch',
                  maxHeight: '120px'
                }}>
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => selectImage(index)}
                    className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      index === currentImageIndex 
                        ? effectiveTheme === 'dark' ? 'border-purple-400 scale-105' : 'border-purple-500 scale-105'
                        : effectiveTheme === 'dark' ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ height: '100px', width: 'auto', maxWidth: '200px' }}
                  >
                    <img
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      className="h-full w-auto object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </MouseGradientCard>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <MouseGradientCard className={`p-6 rounded-xl ${
              effectiveTheme === 'dark' 
                ? 'bg-gray-800 border-purple-700/30' 
                : 'bg-white border-purple-100'
            }`}>
              <h2 className={`text-2xl font-bold mb-4 ${
                effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>Project Overview</h2>
              <p className={`text-lg leading-relaxed ${
                effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>{project.longDescription}</p>
            </MouseGradientCard>

            {/* Features */}
            <MouseGradientCard className={`p-6 rounded-xl ${
              effectiveTheme === 'dark' 
                ? 'bg-gray-800 border-purple-700/30' 
                : 'bg-white border-purple-100'
            }`}>
              <h2 className={`text-2xl font-bold mb-4 ${
                effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>Key Features</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className={`flex items-start space-x-2 ${
                    effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </MouseGradientCard>

            {/* Challenges */}
            <MouseGradientCard className={`p-6 rounded-xl ${
              effectiveTheme === 'dark' 
                ? 'bg-gray-800 border-purple-700/30' 
                : 'bg-white border-purple-100'
            }`}>
              <h2 className={`text-2xl font-bold mb-4 ${
                effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>Technical Challenges</h2>
              <div className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className={`flex items-start space-x-2 ${
                    effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </MouseGradientCard>

            {/* Tips */}
            <MouseGradientCard className={`p-6 rounded-xl ${
              effectiveTheme === 'dark' 
                ? 'bg-gray-800 border-purple-700/30' 
                : 'bg-white border-purple-100'
            }`}>
              <h2 className={`text-2xl font-bold mb-4 flex items-center ${
                effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>
                <Lightbulb className="mr-2 text-yellow-500" size={24} />
                Development Tips
              </h2>
              <div className="space-y-3">
                {project.tips.map((tip, index) => (
                  <div key={index} className={`flex items-start space-x-2 ${
                    effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </MouseGradientCard>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <MouseGradientCard className={`p-6 rounded-xl ${
              effectiveTheme === 'dark' 
                ? 'bg-gray-800 border-purple-700/30' 
                : 'bg-white border-purple-100'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${
                effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>Project Details</h3>
              <div className="space-y-3">
                <div className={`flex items-center space-x-2 ${
                  effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <Calendar size={16} />
                  <span>Duration: {project.duration}</span>
                </div>
                <div className={`flex items-center space-x-2 ${
                  effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <Code size={16} />
                  <span>Team: {project.team}</span>
                </div>
              </div>
            </MouseGradientCard>

            {/* Technologies */}
            <MouseGradientCard className={`p-6 rounded-xl ${
              effectiveTheme === 'dark' 
                ? 'bg-gray-800 border-purple-700/30' 
                : 'bg-white border-purple-100'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${
                effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>Technologies</h3>
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

            {/* Languages */}
            <MouseGradientCard className={`p-6 rounded-xl ${
              effectiveTheme === 'dark' 
                ? 'bg-gray-800 border-purple-700/30' 
                : 'bg-white border-purple-100'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${
                effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>Languages</h3>
              <div className="flex flex-wrap gap-2">
                {project.languages.map((lang) => (
                  <span
                    key={lang}
                    className={`px-3 py-1 text-sm rounded-full ${
                      effectiveTheme === 'dark' 
                        ? 'bg-blue-900/50 text-blue-300 border border-blue-700/30' 
                        : 'bg-blue-100 text-blue-700 border border-blue-200'
                    }`}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </MouseGradientCard>

            {/* Actions */}
            <MouseGradientCard className={`p-6 rounded-xl ${
              effectiveTheme === 'dark' 
                ? 'bg-gray-800 border-purple-700/30' 
                : 'bg-white border-purple-100'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${
                effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>Links</h3>
              <div className="space-y-3">
                <a
                  href={project.liveUrl}
                  className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                    effectiveTheme === 'dark' 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg' 
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
                  }`}
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                    effectiveTheme === 'dark' 
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Github size={16} />
                  <span>Source Code</span>
                </a>
              </div>
            </MouseGradientCard>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectDetail: React.FC = () => {
  return (
    <ThemeProvider>
      <ProjectDetailContent />
    </ThemeProvider>
  );
};

export default ProjectDetail;
