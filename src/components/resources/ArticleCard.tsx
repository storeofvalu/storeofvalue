import React from 'react';
import ResourceCard, { ResourceCardProps } from './ResourceCard';
import { FileText } from 'lucide-react';

export interface ArticleCardProps extends Omit<ResourceCardProps, 'author' | 'icon' | 'color' | 'gradientFrom' | 'gradientTo' | 'buttonText'> {
  author: string;
  date: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  title, 
  author, 
  date, 
  description, 
  link, 
  index 
}) => {
  return (
    <ResourceCard
      title={title}
      author={`${author} • ${date}`}
      description={description}
      link={link}
      index={index}
      icon={<FileText className="h-5 w-5 text-blue-500" />}
      color="blue"
      gradientFrom="from-blue-500"
      gradientTo="to-blue-600"
      buttonText="Read Article"
    />
  );
};

export default ArticleCard; 