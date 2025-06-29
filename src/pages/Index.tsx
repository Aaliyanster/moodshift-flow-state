
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import MoodCheckIn from '@/components/MoodCheckIn';
import JournalChat from '@/components/JournalChat';
import Routines from '@/components/Routines';
import Progress from '@/components/Progress';
import Recovery from '@/components/Recovery';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-purple-600 dark:from-blue-400 dark:via-green-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            MoodShift
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Don't let life control you—control your life
          </p>
          <p className="text-lg text-muted-foreground">
            Transform your well-being through movement and mindfulness
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-8">
            <MoodCheckIn />
            <Recovery />
          </div>
          <div className="space-y-8">
            <JournalChat />
            <Routines />
          </div>
        </div>
        
        <div className="mt-12">
          <Progress />
        </div>
      </main>
    </div>
  );
};

export default Index;
