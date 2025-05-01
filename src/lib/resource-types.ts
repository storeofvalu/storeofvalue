// Base resource interface that all resource types extend
export interface BaseResource {
  id: string;
  title: string;
  description: string;
  link: string;
  featured?: boolean;
  tags?: string[];
  publishedAt: string; // ISO date string
}

// Book resource type
export interface Book extends BaseResource {
  type: 'book';
  author: string;
  coverImage?: string;
  publisher?: string;
  publicationYear?: number;
  isbn?: string;
}

// Article resource type
export interface Article extends BaseResource {
  type: 'article';
  author: string;
  date: string; // Formatted date string for display
  source?: string;
  estimatedReadingTime?: number; // in minutes
}

// Video resource type
export interface Video extends BaseResource {
  type: 'video';
  duration: string; // Formatted duration string (e.g. "10:30")
  platform?: 'youtube' | 'vimeo' | 'other';
  channelName?: string;
  thumbnailUrl?: string;
}

// Podcast resource type
export interface Podcast extends BaseResource {
  type: 'podcast';
  host: string;
  episodeNumber?: number;
  season?: number;
  showName?: string;
  audioUrl?: string;
}

// Union type of all resource types
export type Resource = Book | Article | Video | Podcast;

// Helper function to check if a resource is of a specific type
export const isResourceType = <T extends Resource>(
  resource: Resource, 
  type: T['type']
): resource is T => {
  return resource.type === type;
};

// Resource data for testing/development (would be replaced by CMS data)
export const sampleResources: Resource[] = [
  {
    id: 'book-1',
    type: 'book',
    title: 'The Bitcoin Standard',
    author: 'Saifedean Ammous',
    description: 'The definitive exploration of Bitcoin\'s role as sound money in the digital age and its historical context.',
    link: 'https://saifedean.com/tbs',
    publishedAt: '2018-04-24T00:00:00Z',
    featured: true,
    tags: ['economics', 'history', 'beginner'],
    publicationYear: 2018
  },
  {
    id: 'article-1',
    type: 'article',
    title: 'Bitcoin: A Peer-to-Peer Electronic Cash System',
    author: 'Satoshi Nakamoto',
    date: 'October 31, 2008',
    description: 'The original Bitcoin whitepaper that introduced the concept of a decentralized digital currency.',
    link: 'https://bitcoin.org/bitcoin.pdf',
    publishedAt: '2008-10-31T00:00:00Z',
    featured: true,
    tags: ['whitepaper', 'technical', 'history']
  },
  {
    id: 'video-1',
    type: 'video',
    title: 'How Does Bitcoin Work?',
    duration: '26:45',
    description: 'An accessible explanation of the technical foundations of Bitcoin.',
    link: 'https://www.youtube.com/watch?v=bBC-nXj3Ng4',
    publishedAt: '2017-07-07T00:00:00Z',
    platform: 'youtube',
    channelName: '3Blue1Brown'
  },
  {
    id: 'podcast-1',
    type: 'podcast',
    title: 'What is Bitcoin?',
    host: 'Peter McCormack',
    description: 'An introductory episode exploring the fundamentals of Bitcoin for beginners.',
    link: 'https://www.whatbitcoindid.com/podcast/beginners-guide-1-what-is-bitcoin',
    publishedAt: '2020-01-02T00:00:00Z',
    showName: 'What Bitcoin Did',
    episodeNumber: 1
  }
];

// Helper function to filter resources by type
export const getResourcesByType = <T extends Resource>(
  resources: Resource[], 
  type: T['type']
): T[] => {
  return resources.filter((resource): resource is T => resource.type === type);
};

// Helper function to filter resources by tag
export const getResourcesByTag = (
  resources: Resource[], 
  tag: string
): Resource[] => {
  return resources.filter(resource => 
    resource.tags?.includes(tag)
  );
};

// Helper function to get featured resources
export const getFeaturedResources = (
  resources: Resource[]
): Resource[] => {
  return resources.filter(resource => resource.featured);
}; 