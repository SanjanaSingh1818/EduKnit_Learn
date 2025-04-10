
import React from 'react';
import { Card, CardContent, CardFooter } from './card';
import { Badge } from './badge';
import { Button } from './button';
import { LucideIcon } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  image?: string;
  category: string;
  level: string;
  duration: string;
  icon?: LucideIcon;
  color?: "eduBlue" | "eduOrange";
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  category,
  level,
  duration,
  icon: Icon,
  color = "eduBlue"
}) => {
  return (
    <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {image ? (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ) : (
        <div className={`h-2 ${color === "eduBlue" ? "bg-eduBlue-500" : "bg-eduOrange-500"}`}></div>
      )}
      
      <CardContent className="p-6 flex-grow">
        <div className="flex items-center mb-4">
          {Icon && (
            <div className={`p-2 rounded-lg mr-3 ${color === "eduBlue" ? "bg-eduBlue-100 text-eduBlue-600 dark:bg-eduBlue-900 dark:text-eduBlue-300" : "bg-eduOrange-100 text-eduOrange-600 dark:bg-eduOrange-900 dark:text-eduOrange-300"}`}>
              <Icon className="h-5 w-5" />
            </div>
          )}
          <Badge variant="outline" className={color === "eduBlue" ? "border-eduBlue-200 text-eduBlue-700 dark:border-eduBlue-800 dark:text-eduBlue-400" : "border-eduOrange-200 text-eduOrange-700 dark:border-eduOrange-800 dark:text-eduOrange-400"}>
            {category}
          </Badge>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <span>{level}</span>
          <span>{duration}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 border-t border-gray-100 dark:border-gray-800">
        <Button className={`w-full ${color === "eduBlue" ? "bg-eduBlue-500 hover:bg-eduBlue-600" : "bg-eduOrange-500 hover:bg-eduOrange-600"} text-white`}>
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
