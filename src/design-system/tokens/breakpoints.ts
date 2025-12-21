/**
 * Design System - Breakpoint Tokens
 * 
 * Responsive breakpoints for the design system
 */

export const breakpoints = {
  // Mobile-first breakpoints
  mobile: '0px',
  tablet: '640px',
  desktop: '1024px',
  large: '1280px',
  xlarge: '1440px',
  
  // Max-width breakpoints (for upTo queries)
  upToTablet: '639px',
  upToDesktop: '1023px',
  upToLarge: '1279px',
  upToXlarge: '1439px',
} as const;

// Legacy export for backward compatibility
export const breakpoint = {
  upToTablet: '639px',
  tablet: '640px',
  upToDesktop: '1023px',
  desktop: '1024px',
  upToLarge: '1279px',
  large: '1280px',
  upToXlarge: '1439px',
  xlarge: '1440px',
};
