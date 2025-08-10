
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Calendar, Flame, Heart, Scale } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const moodData = [
  { date: 'Mon', mood: 2, consistency: 1 },
  { date: 'Tue', mood: 3, consistency: 1 },
  { date: 'Wed', mood: 2, consistency: 1 },
  { date: 'Thu', mood: 4, consistency: 1 },
  { date: 'Fri', mood: 4, consistency: 1 },
  { date: 'Sat', mood: 3, consistency: 1 },
  { date: 'Sun', mood: 4, consistency: 1 },
];

const consistencyData = [
  { week: 'Week 1', days: 6 },
  { week: 'Week 2', days: 7 },
  { week: 'Week 3', days: 5 },
  { week: 'This Week', days: 4 },
];

const weightData = [
  { date: 'Mon', weight: 180 },
  { date: 'Tue', weight: 179.5 },
  { date: 'Wed', weight: 179 },
  { date: 'Thu', weight: 178.8 },
  { date: 'Fri', weight: 178.5 },
  { date: 'Sat', weight: 178.2 },
  { date: 'Sun', weight: 178 },
];

const ProgressTracker = () => {
  const [activeTab, setActiveTab] = useState<'mood' | 'consistency' | 'weight'>('mood');

  return (
    <Card className="w-full shadow-lg border-0 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-card-foreground">
          <TrendingUp className="h-6 w-6 text-purple-500" />
          <span>Your Real Progress</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white">
            <div className="flex items-center space-x-2">
              <Flame className="h-5 w-5" />
              <span className="text-sm font-medium">Consistency Streak</span>
            </div>
            <p className="text-2xl font-bold mt-1">22 days</p>
            <p className="text-xs opacity-80">You haven't quit yet!</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-4 text-white">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span className="text-sm font-medium">Check-ins</span>
            </div>
            <p className="text-2xl font-bold mt-1">25 total</p>
            <p className="text-xs opacity-80">Every check-in matters</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 text-white">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5" />
              <span className="text-sm font-medium">Mood Trend</span>
            </div>
            <p className="text-2xl font-bold mt-1">↗️ Up</p>
            <p className="text-xs opacity-80">You're getting stronger</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 border-b">
          <button
            onClick={() => setActiveTab('mood')}
            className={`pb-2 px-1 font-medium transition-colors ${
              activeTab === 'mood'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Mood Progress
          </button>
          <button
            onClick={() => setActiveTab('weight')}
            className={`pb-2 px-1 font-medium transition-colors ${
              activeTab === 'weight'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Weight Progress
          </button>
          <button
            onClick={() => setActiveTab('consistency')}
            className={`pb-2 px-1 font-medium transition-colors ${
              activeTab === 'consistency'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Consistency Wins
          </button>
        </div>

        {/* Chart Display */}
        <div className="h-64">
          {activeTab === 'mood' ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="date" className="text-muted-foreground" />
                <YAxis domain={[1, 5]} className="text-muted-foreground" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="mood" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                  name="Mood Level"
                />
              </LineChart>
            </ResponsiveContainer>
          ) : activeTab === 'weight' ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weightData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="date" className="text-muted-foreground" />
                <YAxis className="text-muted-foreground" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="weight" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                  name="Weight (lbs)"
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={consistencyData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="week" className="text-muted-foreground" />
                <YAxis className="text-muted-foreground" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar 
                  dataKey="days" 
                  fill="url(#colorGradient)"
                  radius={[4, 4, 0, 0]}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        <div className="text-center bg-muted/50 rounded-lg p-4">
          <p className="text-sm text-muted-foreground font-medium">
            💡 <strong>Remember:</strong> Your consistency is the result that matters most right now. Physical changes are coming—your mental strength is already here.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressTracker;
