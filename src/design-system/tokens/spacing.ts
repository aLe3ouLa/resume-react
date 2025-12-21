/**
 * Design System - Spacing Tokens
 * 
 * Consistent spacing scale for margins, padding, and gaps
 */

export const spacing = {
  xxxs: '2px',
  xxs: '4px',
  xs: '6px',
  sm: '12px',
  md: '20px',
  lg: '28px',
  xl: '40px',
  xxl: '100px',
  siteWidth: '1440px',
} as const;

// Spacing scale for Tailwind-like usage
export const spacingScale = {
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
  40: '160px',
  48: '192px',
  64: '256px',
} as const;
