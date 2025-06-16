
import React from 'react';
import { Award, Target, Users, Code } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const AchievementsSection: React.FC = () => {
  const { effectiveTheme } = useTheme();

  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: 'Full Stack Excellence',
      description: 'Successfully delivered 50+ projects using modern web technologies',
      metric: '50+ Projects',
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: 'Problem Solver',
      description: 'Optimized application performance by 40% through efficient coding practices',
      metric: '40% Faster',
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Team Leadership',
      description: 'Led development teams of 5+ members on complex enterprise projects',
      metric: '5+ Team Size',
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: 'Code Quality',
      description: 'Maintained 95%+ code coverage with comprehensive testing strategies',
      metric: '95% Coverage',
    },
  ];

  const problemsSolved = [
    {
      title: 'Payment Gateway Integration',
      description: 'Seamlessly integrated multiple payment providers (Stripe, Paytm, Razorpay) with fallback mechanisms',
      impact: 'Increased conversion rate by 25%',
    },
    {
      title: 'Real-time Data Synchronization',
      description: 'Implemented WebSocket-based real-time updates for collaborative applications',
      impact: 'Reduced data inconsistency by 90%',
    },
    {
      title: 'Scalable Architecture',
      description: 'Designed microservices architecture handling 100k+ concurrent users',
      impact: 'Improved system reliability to 99.9%',
    },
    {
      title: 'API Performance Optimization',
      description: 'Optimized database queries and implemented caching strategies',
      impact: 'Reduced response time by 60%',
    },
  ];

  return (
    <section id="achievements" className={`py-20 relative ${
      effectiveTheme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900/50 via-purple-900/30 to-blue-900/50' 
        : 'bg-gradient-to-br from-purple-50/30 via-pink-50/20 to-blue-50/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Achievements */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Achievements & Impact
            </span>
          </h2>
          <p className={`text-xl ${
            effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Measurable results and recognition for technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center ${
                effectiveTheme === 'dark' 
                  ? 'bg-gray-800/80 border border-purple-700/30' 
                  : 'bg-white'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">{achievement.icon}</div>
              <h3 className={`text-lg font-bold mb-2 ${
                effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>{achievement.title}</h3>
              <p className={`mb-4 ${
                effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>{achievement.description}</p>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {achievement.metric}
              </div>
            </div>
          ))}
        </div>

        {/* Problems Solved */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Complex Problems Solved
            </span>
          </h2>
          <p className={`text-xl ${
            effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Real-world challenges tackled with innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problemsSolved.map((problem, index) => (
            <div
              key={problem.title}
              className={`p-8 rounded-xl hover:shadow-lg transition-all duration-300 ${
                effectiveTheme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800/50 to-purple-900/30 border border-purple-700/20' 
                  : 'bg-gradient-to-br from-blue-50 to-purple-50'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className={`text-xl font-bold mb-3 ${
                effectiveTheme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>{problem.title}</h3>
              <p className={`mb-4 ${
                effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>{problem.description}</p>
              <div className={`text-sm font-semibold px-3 py-1 rounded-full inline-block ${
                effectiveTheme === 'dark' 
                  ? 'text-green-400 bg-green-900/30 border border-green-700/30' 
                  : 'text-green-600 bg-green-100'
              }`}>
                {problem.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
