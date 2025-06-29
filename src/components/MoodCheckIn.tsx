
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Heart, TrendingDown, Meh, Smile, Angry } from 'lucide-react';

const moods = [
  { emoji: '😤', label: 'Frustrated', value: 1, color: 'text-red-500', icon: Angry, message: 'I hear you. This feeling is temporary.' },
  { emoji: '😔', label: 'Discouraged', value: 2, color: 'text-orange-500', icon: TrendingDown, message: 'Tough days build stronger weeks.' },
  { emoji: '😐', label: 'Neutral', value: 3, color: 'text-yellow-500', icon: Meh, message: 'Showing up neutral is still showing up.' },
  { emoji: '🙂', label: 'Motivated', value: 4, color: 'text-blue-500', icon: Smile, message: 'This energy will carry you forward!' },
  { emoji: '💪', label: 'Determined', value: 5, color: 'text-green-500', icon: Heart, message: 'You\'re in the zone. Trust the process.' },
];

const MoodCheckIn = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [journalEntry, setJournalEntry] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedMoodData = moods.find(mood => mood.value === selectedMood);

  const handleSubmit = () => {
    if (selectedMood) {
      console.log('Mood:', selectedMood, 'Journal:', journalEntry);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <Card className="w-full shadow-lg border-0 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-card-foreground">
          <Heart className="h-6 w-6 text-pink-500" />
          <span>How are you feeling about your progress?</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-5 gap-3">
          {moods.map((mood) => (
            <button
              key={mood.value}
              onClick={() => setSelectedMood(mood.value)}
              className={`p-3 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                selectedMood === mood.value
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950 shadow-md'
                  : 'border-border hover:border-muted-foreground'
              }`}
            >
              <div className="text-2xl mb-1">{mood.emoji}</div>
              <div className={`text-xs font-medium ${mood.color}`}>
                {mood.label}
              </div>
            </button>
          ))}
        </div>

        {selectedMoodData && (
          <div className="bg-muted/50 rounded-lg p-4 text-center">
            <p className="text-sm text-muted-foreground italic">
              "{selectedMoodData.message}"
            </p>
          </div>
        )}

        <div className="space-y-3">
          <label className="text-sm font-medium text-muted-foreground">
            What's really going on? (This stays between us)
          </label>
          <Textarea
            placeholder="I'm frustrated because I'm doing everything right but..."
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
            className="min-h-[100px] resize-none"
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
          {isSubmitted ? '✓ I hear you' : 'Share how you feel'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MoodCheckIn;
