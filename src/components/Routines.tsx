
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Activity, Wind, Zap, Sunset, Clock } from 'lucide-react';

const routines = [
  {
    id: 1,
    title: 'Calming Breathwork',
    duration: '5 min',
    description: 'Perfect for stress and anxiety',
    icon: Wind,
    color: 'bg-blue-500',
    mood: 'stressed',
    steps: ['Find a comfortable position', 'Breathe in for 4 counts', 'Hold for 4 counts', 'Exhale for 6 counts', 'Repeat 8 times']
  },
  {
    id: 2,
    title: 'Energizing Movement',
    duration: '10 min',
    description: 'Boost your mood and energy',
    icon: Zap,
    color: 'bg-green-500',
    mood: 'low',
    steps: ['Light stretching', 'Arm circles', 'Gentle jumping jacks', 'Walk in place', 'Deep stretches']
  },
  {
    id: 3,
    title: 'Mindful Walk',
    duration: '15 min',
    description: 'Clear your mind outdoors',
    icon: Activity,
    color: 'bg-purple-500',
    mood: 'overwhelmed',
    steps: ['Step outside', 'Walk at a comfortable pace', 'Focus on your surroundings', 'Notice 5 things you see', 'Take deep breaths']
  },
  {
    id: 4,
    title: 'Evening Wind-Down',
    duration: '8 min',
    description: 'Prepare for restful sleep',
    icon: Sunset,
    color: 'bg-indigo-500',
    mood: 'tired',
    steps: ['Dim the lights', 'Gentle neck rolls', 'Shoulder releases', 'Progressive muscle relaxation', 'Gratitude reflection']
  },
];

const Routines = () => {
  const [selectedRoutine, setSelectedRoutine] = useState<number | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleStartRoutine = (routineId: number) => {
    setSelectedRoutine(routineId);
    setIsActive(true);
    setCurrentStep(0);
  };

  const handleCompleteRoutine = () => {
    setIsActive(false);
    setSelectedRoutine(null);
    setCurrentStep(0);
  };

  const routine = selectedRoutine ? routines.find(r => r.id === selectedRoutine) : null;

  if (isActive && routine) {
    return (
      <Card className="w-full shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="text-center space-y-6">
            <div className={`mx-auto w-16 h-16 rounded-full ${routine.color} flex items-center justify-center`}>
              <routine.icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{routine.title}</h3>
              <p className="text-gray-600">Step {currentStep + 1} of {routine.steps.length}</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-lg text-gray-800">{routine.steps[currentStep]}</p>
            </div>
            
            <div className="flex space-x-3">
              {currentStep < routine.steps.length - 1 ? (
                <Button
                  onClick={() => setCurrentStep(prev => prev + 1)}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  onClick={handleCompleteRoutine}
                  className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                >
                  Complete ✓
                </Button>
              )}
              <Button
                onClick={handleCompleteRoutine}
                variant="outline"
                className="border-gray-300"
              >
                Stop
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-gray-800">
          <Activity className="h-6 w-6 text-green-500" />
          <span>Recommended Routines</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {routines.map((routine) => {
          const IconComponent = routine.icon;
          return (
            <div
              key={routine.id}
              className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-md"
            >
              <div className={`w-12 h-12 rounded-full ${routine.color} flex items-center justify-center flex-shrink-0`}>
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">{routine.title}</h4>
                <p className="text-sm text-gray-600">{routine.description}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{routine.duration}</span>
                </div>
              </div>
              <Button
                onClick={() => handleStartRoutine(routine.id)}
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Start
              </Button>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default Routines;
