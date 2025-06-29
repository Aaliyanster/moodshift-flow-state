
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Compass, Play, Pause, RotateCcw } from 'lucide-react';

const recoveryTools = [
  {
    id: 1,
    title: '4-7-8 Breathing',
    description: 'Calm your nervous system',
    duration: 240, // 4 minutes
    type: 'breathing',
    instructions: [
      'Inhale for 4 counts',
      'Hold for 7 counts', 
      'Exhale for 8 counts',
      'Repeat cycle'
    ]
  },
  {
    id: 2,
    title: '5-4-3-2-1 Grounding',
    description: 'Connect with the present moment',
    duration: 300, // 5 minutes
    type: 'grounding',
    instructions: [
      'Name 5 things you can see',
      'Name 4 things you can touch',
      'Name 3 things you can hear',
      'Name 2 things you can smell',
      'Name 1 thing you can taste'
    ]
  },
  {
    id: 3,
    title: 'Body Scan Meditation',
    description: 'Release tension and stress',
    duration: 480, // 8 minutes
    type: 'meditation',
    instructions: [
      'Start with your toes',
      'Notice any tension',
      'Breathe into each area',
      'Move up your body slowly'
    ]
  },
];

const Recovery = () => {
  const [selectedTool, setSelectedTool] = useState<number | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startTool = (toolId: number) => {
    const tool = recoveryTools.find(t => t.id === toolId);
    if (tool) {
      setSelectedTool(toolId);
      setTimeRemaining(tool.duration);
      setIsActive(true);
      setIsPaused(false);
    }
  };

  const resetTool = () => {
    setIsActive(false);
    setSelectedTool(null);
    setTimeRemaining(0);
    setIsPaused(false);
  };

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && !isPaused && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isActive, isPaused, timeRemaining]);

  const activeTool = selectedTool ? recoveryTools.find(t => t.id === selectedTool) : null;

  if (isActive && activeTool) {
    return (
      <Card className="w-full shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-800">{activeTool.title}</h3>
              <p className="text-gray-600">{activeTool.description}</p>
            </div>
            
            <div className="relative w-32 h-32 mx-auto">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - timeRemaining / activeTool.duration)}`}
                  className="transition-all duration-1000 ease-linear"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">
                  {formatTime(timeRemaining)}
                </span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-1">
                {activeTool.instructions.map((instruction, index) => (
                  <p key={index} className="text-gray-700 text-sm">
                    • {instruction}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center space-x-3">
              <Button
                onClick={() => setIsPaused(!isPaused)}
                variant="outline"
                size="sm"
                className="border-gray-300"
              >
                {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              </Button>
              <Button
                onClick={resetTool}
                variant="outline"
                size="sm"
                className="border-gray-300"
              >
                <RotateCcw className="h-4 w-4" />
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
          <Compass className="h-6 w-6 text-indigo-500" />
          <span>Mind-Body Recovery</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recoveryTools.map((tool) => (
          <div
            key={tool.id}
            className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-md"
          >
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800">{tool.title}</h4>
              <p className="text-sm text-gray-600 mb-1">{tool.description}</p>
              <span className="text-xs text-gray-500">{formatTime(tool.duration)}</span>
            </div>
            <Button
              onClick={() => startTool(tool.id)}
              size="sm"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
            >
              <Play className="h-4 w-4 mr-1" />
              Start
            </Button>
          </div>
        ))}
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800 text-center">
            💡 <strong>Tip:</strong> Use these tools whenever you feel overwhelmed, anxious, or need to reset your energy.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Recovery;
