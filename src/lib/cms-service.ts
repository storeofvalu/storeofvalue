import { Resource, Book, Article, Video, Podcast, sampleResources } from './resource-types';

// Interface for CMS response
interface CMSResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Interface for filtering and pagination options
export interface ResourceQueryOptions {
  type?: 'book' | 'article' | 'video' | 'podcast';
  tags?: string[];
  featured?: boolean;
  page?: number;
  pageSize?: number;
  sortBy?: 'publishedAt' | 'title';
  sortOrder?: 'asc' | 'desc';
}

/**
 * Service for interacting with the headless CMS
 * This is an abstraction that can be implemented for different CMS platforms like Strapi, Contentful, etc.
 */
class CMSService {
  private apiEndpoint: string;
  private apiKey: string;
  
  constructor(apiEndpoint: string, apiKey: string) {
    this.apiEndpoint = apiEndpoint;
    this.apiKey = apiKey;
  }

  /**
   * Get resources with filtering and pagination
   */
  async getResources(options: ResourceQueryOptions = {}): Promise<CMSResponse<Resource>> {
    // Build query parameters for API call
    const queryParams = new URLSearchParams();
    
    // Add filters
    if (options.type) {
      queryParams.append('filters[type][$eq]', options.type);
    }
    
    if (options.tags && options.tags.length > 0) {
      options.tags.forEach(tag => {
        queryParams.append('filters[tags][$contains]', tag);
      });
    }
    
    if (options.featured !== undefined) {
      queryParams.append('filters[featured][$eq]', options.featured.toString());
    }
    
    // Add pagination
    const page = options.page || 1;
    const pageSize = options.pageSize || 10;
    queryParams.append('pagination[page]', page.toString());
    queryParams.append('pagination[pageSize]', pageSize.toString());
    
    // Add sorting
    const sortBy = options.sortBy || 'publishedAt';
    const sortOrder = options.sortOrder || 'desc';
    queryParams.append('sort', `${sortOrder === 'desc' ? '-' : ''}${sortBy}`);
    
    try {
      // In a real implementation, this would make an API call
      // For now, we'll simulate with our sample data
      return this.simulateFetch(queryParams);
    } catch (error) {
      console.error('Error fetching resources:', error);
      throw error;
    }
  }
  
  /**
   * Get a single resource by ID
   */
  async getResourceById(id: string): Promise<Resource | null> {
    try {
      // In a real implementation, this would make an API call
      // For now, we'll simulate with our sample data
      const resource = sampleResources.find(r => r.id === id);
      return resource || null;
    } catch (error) {
      console.error(`Error fetching resource with ID ${id}:`, error);
      throw error;
    }
  }
  
  /**
   * For development/testing: simulate API response with sample data
   */
  private simulateFetch(queryParams: URLSearchParams): Promise<CMSResponse<Resource>> {
    // Parse query parameters
    const typeFilter = queryParams.get('filters[type][$eq]');
    const featuredFilter = queryParams.get('filters[featured][$eq]');
    const page = parseInt(queryParams.get('pagination[page]') || '1');
    const pageSize = parseInt(queryParams.get('pagination[pageSize]') || '10');
    
    // Get tag filters (can be multiple)
    const tagFilters: string[] = [];
    queryParams.forEach((value, key) => {
      if (key === 'filters[tags][$contains]') {
        tagFilters.push(value);
      }
    });
    
    // Apply filters
    let filteredResources = [...sampleResources];
    
    if (typeFilter) {
      filteredResources = filteredResources.filter(resource => resource.type === typeFilter);
    }
    
    if (tagFilters.length > 0) {
      filteredResources = filteredResources.filter(resource => 
        tagFilters.some(tag => resource.tags?.includes(tag))
      );
    }
    
    if (featuredFilter !== null) {
      const isFeatured = featuredFilter === 'true';
      filteredResources = filteredResources.filter(resource => resource.featured === isFeatured);
    }
    
    // Get total count before pagination
    const total = filteredResources.length;
    
    // Apply pagination
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedResources = filteredResources.slice(startIndex, endIndex);
    
    // Return simulated response
    return Promise.resolve({
      data: paginatedResources,
      meta: {
        pagination: {
          page,
          pageSize,
          pageCount: Math.ceil(total / pageSize),
          total
        }
      }
    });
  }
}

// Export a singleton instance
export const cmsService = new CMSService(
  process.env.CMS_API_ENDPOINT || 'https://api.example.com',
  process.env.CMS_API_KEY || 'sample-key'
);

export default cmsService; 