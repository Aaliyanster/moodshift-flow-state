
import React from 'react';
import Navigation from '@/components/Navigation';
import MoodCheckIn from '@/components/MoodCheckIn';
import JournalChat from '@/components/JournalChat';
import SupportiveRoutines from '@/components/SupportiveRoutines';
import ProgressTracker from '@/components/ProgressTracker';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/0e0470aa-8ef3-4419-a08b-03e3d759d104.png" 
              alt="Brain Workout Character" 
              className="w-32 h-32 md:w-40 md:h-40 animate-pulse"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-purple-600 dark:from-blue-400 dark:via-green-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            MoodShift
          </h1>
          <p className="text-xl text-muted-foreground mb-2 font-medium">
            Don't quit when you're closer than you think
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your personal coach for those tough weeks when results haven't shown up yet—but your breakthrough is coming
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="space-y-6">
            <MoodCheckIn />
            <SupportiveRoutines />
          </div>
          <div className="space-y-6">
            <JournalChat />
            <ProgressTracker />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
