import React from 'react';
import ResourceCard, { ResourceCardProps } from './ResourceCard';
import { Youtube } from 'lucide-react';

export interface VideoCardProps extends Omit<ResourceCardProps, 'author' | 'icon' | 'color' | 'gradientFrom' | 'gradientTo' | 'buttonText'> {
  duration: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  title, 
  duration, 
  description, 
  link, 
  index 
}) => {
  return (
    <ResourceCard
      title={title}
      author={duration}
      description={description}
      link={link}
      index={index}
      icon={<Youtube className="h-5 w-5 text-red-500" />}
      color="red"
      gradientFrom="from-red-500"
      gradientTo="to-red-600"
      buttonText="Watch Video"
    />
  );
};

export default VideoCard; 