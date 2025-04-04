
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, BookOpen } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  instructor: string;
  duration: string;
  studentsCount: number;
  rating: number;
  category: string;
  price?: number;
  isFeatured?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  instructor,
  duration,
  studentsCount,
  rating,
  category,
  price,
  isFeatured = false,
}) => {
  return (
    <Card className={`edu-card h-full flex flex-col ${isFeatured ? 'border-eduOrange-500 border-2' : ''}`}>
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover rounded-t-xl" 
        />
        {isFeatured && (
          <Badge className="absolute top-3 right-3 bg-eduOrange-500">Featured</Badge>
        )}
        <Badge className="absolute top-3 left-3 bg-eduBlue-500">{category}</Badge>
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold tracking-tight line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500">by {instructor}</p>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{studentsCount} students</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 text-yellow-500" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t border-gray-100 dark:border-gray-800 pt-4 flex justify-between items-center">
        {price !== undefined ? (
          <span className="font-bold text-lg">
            {price === 0 ? 'Free' : `₹${price.toLocaleString()}`}
          </span>
        ) : (
          <span></span>
        )}
        <Button className="bg-eduBlue-500 hover:bg-eduBlue-600" asChild>
          <Link to={`/programs/course/${id}`}>View Course</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
