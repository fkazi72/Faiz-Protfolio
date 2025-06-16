
import React from 'react';
import TechnologySlider from './TechnologySlider';
import { useTheme } from '../contexts/ThemeContext';

const BrandsSection: React.FC = () => {
  const { effectiveTheme } = useTheme();

  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  ];

  const partnerships = [
    { name: 'Google APIs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    { name: 'Paytm Gateway', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Paytm-Logo.png' },
    { name: 'Razorpay', logo: 'https://razorpay.com/assets/razorpay-logo.svg' },
    { name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Cloudinary', logo: 'https://res.cloudinary.com/cloudinary/image/upload/c_scale,w_300/v1/logo/for_white_bg/cloudinary_logo_for_white_bg.svg' },
  ];

  return (
    <section id="brands" className={`py-20 relative overflow-hidden ${
      effectiveTheme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900/50 via-purple-900/30 to-blue-900/50' 
        : 'bg-gradient-to-br from-purple-50/30 via-pink-50/20 to-blue-50/30'
    }`}>
      {/* Background Elements */}
      <div className={`absolute inset-0 ${
        effectiveTheme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900/30 via-purple-900/20 to-blue-900/30' 
          : 'bg-gradient-to-br from-purple-50/30 via-pink-50/20 to-blue-50/30'
      }`}></div>
      <div className={`absolute top-20 left-10 w-72 h-72 ${
        effectiveTheme === 'dark' ? 'bg-purple-600/10' : 'bg-purple-300/20'
      } rounded-full blur-3xl`}></div>
      <div className={`absolute bottom-20 right-10 w-96 h-96 ${
        effectiveTheme === 'dark' ? 'bg-blue-600/10' : 'bg-blue-300/20'
      } rounded-full blur-3xl`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <TechnologySlider
          technologies={technologies}
          title="Technologies I Master"
          subtitle="Cutting-edge tools and frameworks I use to build exceptional applications"
        />

        <TechnologySlider
          technologies={partnerships}
          title="Integration Partners"
          subtitle="Trusted services and APIs I've successfully integrated for seamless experiences"
        />
      </div>
    </section>
  );
};

export default BrandsSection;
