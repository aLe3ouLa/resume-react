/**
 * Design System - Shadow Tokens
 * 
 * Vintage print-style shadows with layered depth
 */

export const shadows = {
  // Elevation Levels
  none: 'none',
  
  // Vintage layered shadows (not modern glassmorphism)
  sm: '0 2px 4px rgba(0, 0, 0, 0.08)',
  md: '0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)',
  lg: '0 6px 12px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1)',
  xl: '0 8px 16px rgba(0, 0, 0, 0.18), 0 4px 8px rgba(0, 0, 0, 0.12)',
  
  // Vintage print-style shadows with color
  primary: {
    sm: '0 2px 0 #008A8A, 0 4px 8px rgba(0, 168, 168, 0.2)',
    md: '0 4px 0 #008A8A, 0 6px 12px rgba(0, 168, 168, 0.25)',
    lg: '0 6px 0 #008A8A, 0 8px 16px rgba(0, 168, 168, 0.3)',
    xl: '0 8px 0 #008A8A, 0 12px 24px rgba(0, 168, 168, 0.35)',
  },
  
  secondary: {
    sm: '0 2px 0 #E55A5A, 0 4px 8px rgba(255, 107, 107, 0.2)',
    md: '0 4px 0 #E55A5A, 0 6px 12px rgba(255, 107, 107, 0.25)',
    lg: '0 6px 0 #E55A5A, 0 8px 16px rgba(255, 107, 107, 0.3)',
    xl: '0 8px 0 #E55A5A, 0 12px 24px rgba(255, 107, 107, 0.35)',
  },
  
  // Inset shadows for depth
  inset: {
    sm: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
    md: 'inset 0 2px 4px rgba(0, 0, 0, 0.15)',
    lg: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)',
    highlight: 'inset 0 2px 4px rgba(255, 255, 255, 0.6)',
  },
  
  // Combined shadows for vintage cards
  card: '0 4px 16px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)',
  cardHover: '0 6px 24px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1)',
  
  // Button shadows
  button: {
    default: '0 4px 0 #008A8A, 0 6px 12px rgba(0, 168, 168, 0.25)',
    hover: '0 2px 0 #008A8A, 0 4px 8px rgba(0, 168, 168, 0.3)',
    active: '0 0 0 #008A8A, 0 2px 4px rgba(0, 168, 168, 0.2)',
  },
} as const;
