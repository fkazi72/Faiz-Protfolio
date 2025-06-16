
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, effectiveTheme } = useTheme();

  const getIcon = () => {
    if (theme === 'dark') return <Moon size={18} className="text-purple-400" />;
    if (theme === 'light') return <Sun size={18} className="text-purple-400" />;
    return effectiveTheme === 'dark' ? <Moon size={18} className="text-purple-400" /> : <Sun size={18} className="text-purple-400" />;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-colors ${
        effectiveTheme === 'dark' 
          ? 'border-purple-600/50 bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm' 
          : 'border-purple-200 bg-white/80 hover:bg-purple-50 backdrop-blur-sm'
      }`}>
        {getIcon()}
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className={`${
          effectiveTheme === 'dark' 
            ? 'bg-gray-800/95 border-purple-700/50 text-gray-200' 
            : 'bg-white/95 border-purple-200'
        } backdrop-blur-sm shadow-lg`}
      >
        <DropdownMenuItem 
          onClick={() => setTheme('light')}
          className={`cursor-pointer ${
            effectiveTheme === 'dark' 
              ? 'hover:bg-gray-700/80 focus:bg-gray-700/80' 
              : 'hover:bg-purple-50 focus:bg-purple-50'
          }`}
        >
          <Sun size={16} className="mr-2" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('dark')}
          className={`cursor-pointer ${
            effectiveTheme === 'dark' 
              ? 'hover:bg-gray-700/80 focus:bg-gray-700/80' 
              : 'hover:bg-purple-50 focus:bg-purple-50'
          }`}
        >
          <Moon size={16} className="mr-2" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('system')}
          className={`cursor-pointer ${
            effectiveTheme === 'dark' 
              ? 'hover:bg-gray-700/80 focus:bg-gray-700/80' 
              : 'hover:bg-purple-50 focus:bg-purple-50'
          }`}
        >
          {effectiveTheme === 'dark' ? <Moon size={16} className="mr-2" /> : <Sun size={16} className="mr-2" />}
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
