import { useState, useEffect } from 'react';
import { Resource } from '@/lib/resource-types';
import cmsService, { ResourceQueryOptions } from '@/lib/cms-service';

interface UseResourcesOptions extends ResourceQueryOptions {
  enabled?: boolean;
}

interface UseResourcesResult {
  resources: Resource[];
  loading: boolean;
  error: Error | null;
  totalCount: number;
  pageCount: number;
  fetchResources: (options?: ResourceQueryOptions) => Promise<void>;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  goToPage: (page: number) => void;
}

/**
 * Hook for fetching and working with resources from the CMS
 */
export function useResources(options: UseResourcesOptions = {}): UseResourcesResult {
  const { enabled = true, ...queryOptions } = options;
  
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [totalCount, setTotalCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(options.page || 1);
  
  // Current query options state
  const [currentOptions, setCurrentOptions] = useState<ResourceQueryOptions>(queryOptions);
  
  // Function to fetch resources with current options
  const fetchResources = async (newOptions?: ResourceQueryOptions) => {
    setLoading(true);
    setError(null);
    
    try {
      // Merge new options with current options if provided
      const mergedOptions = newOptions 
        ? { ...currentOptions, ...newOptions }
        : currentOptions;
      
      // Update current options
      setCurrentOptions(mergedOptions);
      
      // If a new page is specified, update currentPage
      if (newOptions?.page) {
        setCurrentPage(newOptions.page);
      }
      
      // Fetch resources from CMS
      const response = await cmsService.getResources(mergedOptions);
      
      // Update state with response data
      setResources(response.data);
      setTotalCount(response.meta.pagination.total);
      setPageCount(response.meta.pagination.pageCount);
      
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
    } finally {
      setLoading(false);
    }
  };
  
  // Pagination helpers
  const hasNextPage = currentPage < pageCount;
  const hasPreviousPage = currentPage > 1;
  
  const goToNextPage = () => {
    if (hasNextPage) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchResources({ ...currentOptions, page: nextPage });
    }
  };
  
  const goToPreviousPage = () => {
    if (hasPreviousPage) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      fetchResources({ ...currentOptions, page: prevPage });
    }
  };
  
  const goToPage = (page: number) => {
    if (page >= 1 && page <= pageCount) {
      setCurrentPage(page);
      fetchResources({ ...currentOptions, page });
    }
  };
  
  // Fetch resources on mount and when options change
  useEffect(() => {
    if (enabled) {
      fetchResources();
    }
  }, [enabled]);
  
  return {
    resources,
    loading,
    error,
    totalCount,
    pageCount,
    fetchResources,
    currentPage,
    hasNextPage,
    hasPreviousPage,
    goToNextPage,
    goToPreviousPage,
    goToPage
  };
}

/**
 * Hook for fetching a single resource by ID
 */
export function useResource(id: string, enabled = true) {
  const [resource, setResource] = useState<Resource | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  
  const fetchResource = async (resourceId: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await cmsService.getResourceById(resourceId);
      setResource(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    if (enabled && id) {
      fetchResource(id);
    }
  }, [id, enabled]);
  
  return { resource, loading, error, fetchResource };
}

export default useResources; 