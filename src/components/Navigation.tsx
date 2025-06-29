
import React from 'react';
import { Heart, Brain, Activity, TrendingUp, Compass } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">MoodShift</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Heart className="h-5 w-5" />
              <span>Mood</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
              <Activity className="h-5 w-5" />
              <span>Routines</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors">
              <TrendingUp className="h-5 w-5" />
              <span>Progress</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <Compass className="h-5 w-5" />
              <span>Recovery</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
