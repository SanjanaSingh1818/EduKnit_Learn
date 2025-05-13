
import React from 'react';
import { Card } from './card';
import { Calendar, Clock } from 'lucide-react';
import { AspectRatio } from './aspect-ratio';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  title: string;
  image: string;
  duration?: string;
  timeCommitment?: string;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  image,
  duration = "1-2 months",
  timeCommitment = "5-10 hrs/week",
  className
}) => {
  return (
    <Card className={cn("overflow-hidden rounded-xl border-0 shadow-lg", className)}>
      <AspectRatio ratio={16/9}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </AspectRatio>
      
      <div className="bg-white dark:bg-gray-800 p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">{title}</h3>
        
        <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{timeCommitment}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
