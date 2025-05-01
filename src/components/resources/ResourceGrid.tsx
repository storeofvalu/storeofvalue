import React from 'react';
import { Resource, isResourceType, Book, Article, Video, Podcast } from '@/lib/resource-types';
import ResourceCard from './ResourceCard';
import ArticleCard from './ArticleCard';
import VideoCard from './VideoCard';
import PodcastCard from './PodcastCard';
import { BookMarked, FileText, Youtube, Music } from 'lucide-react';

interface ResourceGridProps {
  resources: Resource[];
  filter?: 'book' | 'article' | 'video' | 'podcast' | 'all';
  tag?: string;
  limit?: number;
}

const ResourceGrid: React.FC<ResourceGridProps> = ({ 
  resources, 
  filter = 'all',
  tag,
  limit
}) => {
  // Filter resources based on type and/or tag
  let filteredResources = resources;
  
  if (filter !== 'all') {
    filteredResources = filteredResources.filter(resource => resource.type === filter);
  }
  
  if (tag) {
    filteredResources = filteredResources.filter(resource => 
      resource.tags?.includes(tag)
    );
  }
  
  // Limit the number of resources if specified
  if (limit && limit > 0) {
    filteredResources = filteredResources.slice(0, limit);
  }

  if (filteredResources.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No resources found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredResources.map((resource, index) => {
        // Render appropriate card based on resource type
        if (isResourceType<Book>(resource, 'book')) {
          return (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              author={resource.author}
              description={resource.description}
              link={resource.link}
              index={index}
              icon={<BookMarked className="h-5 w-5 text-amber-500" />}
              color="amber"
              gradientFrom="from-amber-500"
              gradientTo="to-amber-600"
              buttonText="View Book"
            />
          );
        }
        
        if (isResourceType<Article>(resource, 'article')) {
          return (
            <ArticleCard
              key={resource.id}
              title={resource.title}
              author={resource.author}
              date={resource.date}
              description={resource.description}
              link={resource.link}
              index={index}
            />
          );
        }
        
        if (isResourceType<Video>(resource, 'video')) {
          return (
            <VideoCard
              key={resource.id}
              title={resource.title}
              duration={resource.duration}
              description={resource.description}
              link={resource.link}
              index={index}
            />
          );
        }
        
        if (isResourceType<Podcast>(resource, 'podcast')) {
          return (
            <PodcastCard
              key={resource.id}
              title={resource.title}
              host={resource.host}
              description={resource.description}
              link={resource.link}
              index={index}
            />
          );
        }
        
        return null;
      })}
    </div>
  );
};

export default ResourceGrid; 