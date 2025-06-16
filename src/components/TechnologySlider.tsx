
import React, { useEffect, useCallback } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from './ui/carousel';
import { useTheme } from '../contexts/ThemeContext';

interface Technology {
  name: string;
  logo: string;
}

interface TechnologySliderProps {
  technologies: Technology[];
  title: string;
  subtitle: string;
}

const TechnologySlider: React.FC<TechnologySliderProps> = ({ 
  technologies, 
  title, 
  subtitle
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const { effectiveTheme } = useTheme();

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    // Set up autoplay
    const interval = setInterval(() => {
      scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [api, scrollNext]);

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className={`bg-gradient-to-r ${
            effectiveTheme === 'dark' 
              ? 'from-purple-400 via-pink-400 to-blue-400' 
              : 'from-purple-600 via-pink-600 to-blue-600'
          } bg-clip-text text-transparent`}>
            {title}
          </span>
        </h2>
        <p className={`text-xl max-w-2xl mx-auto ${
          effectiveTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {technologies.map((tech, index) => (
              <CarouselItem key={tech.name} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div 
                  className={`group relative overflow-hidden ${
                    effectiveTheme === 'dark' 
                      ? 'bg-gray-800/80 border-purple-700/30 hover:bg-gray-700/80' 
                      : 'bg-white/80 border-purple-100 hover:bg-white'
                  } backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 ${
                    effectiveTheme === 'dark' 
                      ? 'bg-gradient-to-br from-purple-900/30 to-blue-900/30' 
                      : 'bg-gradient-to-br from-purple-50/50 to-blue-50/50'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-md"
                      />
                    </div>
                    <span className={`text-sm font-semibold ${
                      effectiveTheme === 'dark' 
                        ? 'text-gray-200 group-hover:text-purple-400' 
                        : 'text-gray-700 group-hover:text-purple-600'
                    } transition-colors duration-300 text-center`}>
                      {tech.name}
                    </span>
                  </div>
                  <div className={`absolute -inset-1 ${
                    effectiveTheme === 'dark' 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                      : 'bg-gradient-to-r from-purple-600 to-pink-600'
                  } rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={`absolute -left-12 top-1/2 -translate-y-1/2 ${
            effectiveTheme === 'dark' 
              ? 'bg-gray-800/80 border-purple-700 hover:bg-gray-700/80 hover:border-purple-600 text-gray-200' 
              : 'bg-white/80 border-purple-200 hover:bg-purple-50 hover:border-purple-300'
          } backdrop-blur-sm`} />
          <CarouselNext className={`absolute -right-12 top-1/2 -translate-y-1/2 ${
            effectiveTheme === 'dark' 
              ? 'bg-gray-800/80 border-purple-700 hover:bg-gray-700/80 hover:border-purple-600 text-gray-200' 
              : 'bg-white/80 border-purple-200 hover:bg-purple-50 hover:border-purple-300'
          } backdrop-blur-sm`} />
        </Carousel>
      </div>
    </div>
  );
};

export default TechnologySlider;
