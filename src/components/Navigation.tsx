
import React from 'react';
import { Heart, Activity, TrendingUp, Compass } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const Navigation = () => {
  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/0770f839-9d0d-4b16-8b97-b81e1a5f40da.png" alt="MoodShift Brain Logo" className="h-10 w-10" />
            <span className="text-xl font-bold text-foreground">MoodShift</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button className="flex items-center space-x-2 text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Heart className="h-5 w-5" />
              <span>Mood</span>
            </button>
            <button className="flex items-center space-x-2 text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors">
              <Activity className="h-5 w-5" />
              <span>Routines</span>
            </button>
            <button className="flex items-center space-x-2 text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              <TrendingUp className="h-5 w-5" />
              <span>Progress</span>
            </button>
            <button className="flex items-center space-x-2 text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Compass className="h-5 w-5" />
              <span>Recovery</span>
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
