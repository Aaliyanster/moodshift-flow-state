
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Smile, Meh, Frown, Angry, Heart } from 'lucide-react';

const moods = [
  { emoji: '😊', label: 'Great', value: 5, color: 'text-green-500', icon: Smile },
  { emoji: '🙂', label: 'Good', value: 4, color: 'text-blue-500', icon: Smile },
  { emoji: '😐', label: 'Okay', value: 3, color: 'text-yellow-500', icon: Meh },
  { emoji: '😔', label: 'Low', value: 2, color: 'text-orange-500', icon: Frown },
  { emoji: '😰', label: 'Stressed', value: 1, color: 'text-red-500', icon: Angry },
];

const MoodCheckIn = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [journalEntry, setJournalEntry] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedMood) {
      // Store mood and journal entry
      console.log('Mood:', selectedMood, 'Journal:', journalEntry);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 2000);
    }
  };

  return (
    <Card className="w-full shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-gray-800">
          <Heart className="h-6 w-6 text-pink-500" />
          <span>How are you feeling today?</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-5 gap-3">
          {moods.map((mood) => {
            const IconComponent = mood.icon;
            return (
              <button
                key={mood.value}
                onClick={() => setSelectedMood(mood.value)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                  selectedMood === mood.value
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-3xl mb-2">{mood.emoji}</div>
                <div className={`text-sm font-medium ${mood.color}`}>
                  {mood.label}
                </div>
              </button>
            );
          })}
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700">
            Optional: Share what's on your mind (private & safe)
          </label>
          <Textarea
            placeholder="I'm feeling this way because..."
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
            className="min-h-[100px] border-gray-200 focus:border-blue-500 resize-none"
          />
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!selectedMood}
          className={`w-full py-3 font-medium transition-all duration-200 ${
            isSubmitted
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
          }`}
        >
          {isSubmitted ? '✓ Checked In!' : 'Check In'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MoodCheckIn;
