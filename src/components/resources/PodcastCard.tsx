import React from 'react';
import ResourceCard, { ResourceCardProps } from './ResourceCard';
import { Music } from 'lucide-react';

export interface PodcastCardProps extends Omit<ResourceCardProps, 'author' | 'icon' | 'color' | 'gradientFrom' | 'gradientTo' | 'buttonText'> {
  host: string;
}

const PodcastCard: React.FC<PodcastCardProps> = ({ 
  title, 
  host, 
  description, 
  link, 
  index 
}) => {
  return (
    <ResourceCard
      title={title}
      author={`Hosted by ${host}`}
      description={description}
      link={link}
      index={index}
      icon={<Music className="h-5 w-5 text-green-500" />}
      color="green"
      gradientFrom="from-green-500"
      gradientTo="to-green-600"
      buttonText="Listen to Podcast"
    />
  );
};

export default PodcastCard; 