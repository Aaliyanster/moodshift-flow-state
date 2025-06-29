
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Calendar, Flame, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const moodData = [
  { date: 'Mon', mood: 3, activity: 2 },
  { date: 'Tue', mood: 4, activity: 3 },
  { date: 'Wed', mood: 2, activity: 1 },
  { date: 'Thu', mood: 4, activity: 4 },
  { date: 'Fri', mood: 5, activity: 3 },
  { date: 'Sat', mood: 4, activity: 4 },
  { date: 'Sun', mood: 5, activity: 4 },
];

const streakData = [
  { week: 'Week 1', checkins: 5 },
  { week: 'Week 2', checkins: 7 },
  { week: 'Week 3', checkins: 6 },
  { week: 'Week 4', checkins: 7 },
];

const Progress = () => {
  const [activeTab, setActiveTab] = useState<'mood' | 'streaks'>('mood');

  return (
    <Card className="w-full shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-gray-800">
          <TrendingUp className="h-6 w-6 text-purple-500" />
          <span>Your Progress</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white">
            <div className="flex items-center space-x-2">
              <Flame className="h-5 w-5" />
              <span className="text-sm font-medium">Current Streak</span>
            </div>
            <p className="text-2xl font-bold mt-1">7 days</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-4 text-white">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span className="text-sm font-medium">Check-ins</span>
            </div>
            <p className="text-2xl font-bold mt-1">25 total</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 text-white">
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <span className="text-sm font-medium">Avg Mood</span>
            </div>
            <p className="text-2xl font-bold mt-1">4.1/5</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('mood')}
            className={`pb-2 px-1 font-medium transition-colors ${
              activeTab === 'mood'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Mood & Activity
          </button>
          <button
            onClick={() => setActiveTab('streaks')}
            className={`pb-2 px-1 font-medium transition-colors ${
              activeTab === 'streaks'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Weekly Streaks
          </button>
        </div>

        {/* Chart Display */}
        <div className="h-64">
          {activeTab === 'mood' ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" />
                <YAxis domain={[1, 5]} stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="mood" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                  name="Mood"
                />
                <Line 
                  type="monotone" 
                  dataKey="activity" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                  name="Activity"
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={streakData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="week" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Bar 
                  dataKey="checkins" 
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

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Consistency is key! Keep up your daily check-ins to build lasting habits.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Progress;
