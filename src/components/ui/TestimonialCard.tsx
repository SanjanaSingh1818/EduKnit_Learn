
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatarUrl?: string;
  rating?: number;
  company?: string;
  program?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  avatarUrl,
  rating = 5,
  company,
  program,
}) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card className="relative edu-card">
      <CardContent className="pt-6 px-6">
        {rating && (
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
              />
            ))}
          </div>
        )}
        
        <blockquote className="text-gray-700 dark:text-gray-300 mb-6 italic">
          "{content}"
        </blockquote>
        
        <div className="flex items-center">
          <Avatar className="h-12 w-12 mr-4 border-2 border-eduBlue-100">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="bg-eduBlue-100 text-eduBlue-800">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">{name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {role}{company ? ` at ${company}` : ''}
            </p>
            {program && (
              <p className="text-xs text-eduOrange-500 mt-1">
                {program}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
