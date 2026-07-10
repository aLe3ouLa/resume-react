/**
 * Design System - Border Tokens
 * 
 * Border styles for retro aesthetic
 */

export const borders = {
  // Border Widths
  width: {
    none: '0',
    thin: '1px',
    base: '2px',
    medium: '3px',
    thick: '4px',
    chunky: '5px',
  },
  
  // Border Radius
  radius: {
    none: '0',
    sm: '4px',
    base: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '32px',
    pill: '9999px',
    retro: '20px',
    chunky: '16px',
  },
  
  // Border Styles
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
  },
  
  // Common Border Combinations
  card: {
    width: '3px',
    style: 'solid',
    radius: '4px',
  },
  
  button: {
    width: '3px',
    style: 'solid',
    radius: '9999px',
  },
  
  input: {
    width: '2px',
    style: 'solid',
    radius: '12px',
  },
  
  ticket: {
    width: '2px',
    style: 'solid',
    radius: '0',
  },
  
  ticketDivider: {
    width: '1px',
    style: 'dashed',
  },
} as const;
