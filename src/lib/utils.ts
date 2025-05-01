import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Color class cache for performance optimization
const colorClassCache = new Map<string, string>();

type ColorType = 'blue' | 'yellow' | 'green' | 'purple' | 'amber' | 'orange' | 'red' | 'emerald' | 'indigo' | string;
type StyleType = 'border' | 'bg' | 'text';

/**
 * Helper function to get color classes for consistent styling
 * Optimized with memoization to prevent recalculating same classes
 */
export function getColorClass(color: ColorType, type: StyleType, opacity?: string): string {
  // Create a cache key based on the parameters
  const cacheKey = `${color}-${type}-${opacity || ''}`;
  
  // Return cached result if available
  if (colorClassCache.has(cacheKey)) {
    return colorClassCache.get(cacheKey) as string;
  }
  
  // Compute the class
  const opacitySuffix = opacity ? `/${opacity}` : '';
  let result: string;
  
  if (type === 'border') {
    result = {
      blue: `border-blue-500${opacitySuffix}`,
      yellow: `border-yellow-500${opacitySuffix}`,
      green: `border-green-500${opacitySuffix}`,
      purple: `border-purple-500${opacitySuffix}`,
      amber: `border-amber-500${opacitySuffix}`,
      orange: `border-orange-500${opacitySuffix}`,
      red: `border-red-500${opacitySuffix}`,
      emerald: `border-emerald-500${opacitySuffix}`,
      indigo: `border-indigo-500${opacitySuffix}`,
    }[color] || `border-gray-500${opacitySuffix}`;
  } else if (type === 'bg') {
    result = {
      blue: `bg-blue-500${opacitySuffix}`,
      yellow: `bg-yellow-500${opacitySuffix}`,
      green: `bg-green-500${opacitySuffix}`,
      purple: `bg-purple-500${opacitySuffix}`,
      amber: `bg-amber-500${opacitySuffix}`,
      orange: `bg-orange-500${opacitySuffix}`,
      red: `bg-red-500${opacitySuffix}`,
      emerald: `bg-emerald-500${opacitySuffix}`,
      indigo: `bg-indigo-500${opacitySuffix}`,
    }[color] || `bg-gray-500${opacitySuffix}`;
  } else {
    result = {
      blue: `text-blue-500${opacitySuffix}`,
      yellow: `text-yellow-500${opacitySuffix}`,
      green: `text-green-500${opacitySuffix}`,
      purple: `text-purple-500${opacitySuffix}`,
      amber: `text-amber-500${opacitySuffix}`,
      orange: `text-orange-500${opacitySuffix}`,
      red: `text-red-500${opacitySuffix}`,
      emerald: `text-emerald-500${opacitySuffix}`,
      indigo: `text-indigo-500${opacitySuffix}`,
    }[color] || `text-gray-500${opacitySuffix}`;
  }
  
  // Cache the result for future use
  colorClassCache.set(cacheKey, result);
  
  return result;
}

/**
 * Generate hover state class for a color
 */
export function getHoverColorClass(color: ColorType, type: StyleType, opacity?: string): string {
  const baseClass = getColorClass(color, type, opacity);
  return `hover:${baseClass}`;
}
