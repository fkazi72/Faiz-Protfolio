
import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface MouseGradientCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MouseGradientCard: React.FC<MouseGradientCardProps> = ({ children, className = '', onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { effectiveTheme } = useTheme();

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const gradientStyle = isHovered ? {
    background: effectiveTheme === 'dark' 
      ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.15) 0%, transparent 50%)`
      : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.08) 0%, transparent 50%)`,
  } : {};

  const borderStyle = isHovered ? {
    borderImage: effectiveTheme === 'dark'
      ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.5) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 100%) 1`
      : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.3) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 100%) 1`,
  } : {};

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden transition-all duration-300 border ${className} ${onClick ? 'cursor-pointer' : ''}`}
      style={{
        ...gradientStyle,
        ...borderStyle,
        filter: isHovered ? 'blur(0px)' : undefined,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default MouseGradientCard;
