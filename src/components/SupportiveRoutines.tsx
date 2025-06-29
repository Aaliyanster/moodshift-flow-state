
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Wind, Zap, Clock } from 'lucide-react';

const supportiveRoutines = [
  {
    id: 1,
    title: 'Reset & Breathe',
    duration: '5 min',
    description: 'When you feel like quitting',
    icon: Wind,
    color: 'bg-blue-500',
    mood: 'frustrated',
    steps: [
      'Pause. You showed up today.',
      'Breathe in for 4, hold for 4, out for 6',
      'Remind yourself: "Progress is happening, even if I can\'t see it"',
      'One more day. That\'s all we need.'
    ]
  },
  {
    id: 2,
    title: 'Feel-Good Movement',
    duration: '10 min',
    description: 'Light movement to boost mood',
    icon: Zap,
    color: 'bg-green-500',
    mood: 'discouraged',
    steps: [
      'Start with gentle stretches',
      'Walk around your space for 3 minutes',
      'Do 5 movements that feel good',
      'End with your favorite stretch',
      'You moved. That\'s a win.'
    ]
  },
  {
    id: 3,
    title: 'Confidence Builder',
    duration: '8 min',
    description: 'Remember your strength',
    icon: Heart,
    color: 'bg-purple-500',
    mood: 'neutral',
    steps: [
      'Stand tall. Feel your strength.',
      'List 3 things your body did well today',
      'Do 1 exercise you know you can do',
      'Appreciate your consistency',
      'You\'re stronger than you think.'
    ]
  }
];

const SupportiveRoutines = () => {
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

  const routine = selectedRoutine ? supportiveRoutines.find(r => r.id === selectedRoutine) : null;

  if (isActive && routine) {
    return (
      <Card className="w-full shadow-lg border-0 bg-card/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="text-center space-y-6">
            <div className={`mx-auto w-16 h-16 rounded-full ${routine.color} flex items-center justify-center`}>
              <routine.icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">{routine.title}</h3>
              <p className="text-muted-foreground">Step {currentStep + 1} of {routine.steps.length}</p>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-6">
              <p className="text-lg text-card-foreground font-medium">{routine.steps[currentStep]}</p>
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
                  You did it ✓
                </Button>
              )}
              <Button
                onClick={handleCompleteRoutine}
                variant="outline"
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
    <Card className="w-full shadow-lg border-0 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-card-foreground">
          <Heart className="h-6 w-6 text-pink-500" />
          <span>Supportive Routines</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {supportiveRoutines.map((routine) => {
          const IconComponent = routine.icon;
          return (
            <div
              key={routine.id}
              className="flex items-center space-x-4 p-4 rounded-lg border hover:shadow-md transition-all duration-200"
            >
              <div className={`w-12 h-12 rounded-full ${routine.color} flex items-center justify-center flex-shrink-0`}>
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-card-foreground">{routine.title}</h4>
                <p className="text-sm text-muted-foreground">{routine.description}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{routine.duration}</span>
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

export default SupportiveRoutines;
