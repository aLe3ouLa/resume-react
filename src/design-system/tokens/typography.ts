/**
 * Design System - Typography Tokens
 * 
 * Typography system for retro aesthetic with rounded sans-serif fonts
 */

export const typography = {
  // Font Families
  fontFamily: {
    retro: ['Fredoka', 'Comfortaa', 'sans-serif'],
    display: ['Fredoka', 'sans-serif'],
    body: ['Comfortaa', 'sans-serif'],
    system: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
  },
  
  // Font Sizes (rem)
  fontSize: {
    xs: '1.2rem',      // 12px
    sm: '1.4rem',      // 14px
    base: '1.6rem',    // 16px
    md: '1.8rem',      // 18px
    lg: '2rem',        // 20px
    xl: '2.2rem',      // 22px
    '2xl': '2.4rem',   // 24px
    '3xl': '2.8rem',   // 28px
    '4xl': '3.2rem',   // 32px
    '5xl': '3.8rem',   // 38px
    '6xl': '4rem',     // 40px
    '7xl': '4.8rem',   // 48px
    '8xl': '6rem',     // 60px
  },
  
  // Font Weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  
  // Line Heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 1.75,
    '2': 2,
  },
  
  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
    retro: '0.5px',
    display: '1px',
    uppercase: '2px',
  },
  
  // Text Styles
  textStyles: {
    // Display Styles
    display1: {
      fontFamily: 'Fredoka, sans-serif',
      fontSize: '4.8rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    display2: {
      fontFamily: 'Fredoka, sans-serif',
      fontSize: '3.8rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
    },
    
    // Heading Styles
    h1: {
      fontFamily: 'Fredoka, Comfortaa, sans-serif',
      fontSize: '3.8rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '1.5px',
    },
    h2: {
      fontFamily: 'Fredoka, Comfortaa, sans-serif',
      fontSize: '3.2rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '1px',
    },
    h3: {
      fontFamily: 'Fredoka, Comfortaa, sans-serif',
      fontSize: '2.4rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '1px',
    },
    
    // Body Styles
    body: {
      fontFamily: 'Comfortaa, sans-serif',
      fontSize: '1.6rem',
      fontWeight: 400,
      lineHeight: 1.8,
      letterSpacing: '0.3px',
    },
    bodyLarge: {
      fontFamily: 'Comfortaa, sans-serif',
      fontSize: '1.8rem',
      fontWeight: 400,
      lineHeight: 1.8,
      letterSpacing: '0.3px',
    },
    bodySmall: {
      fontFamily: 'Comfortaa, sans-serif',
      fontSize: '1.4rem',
      fontWeight: 400,
      lineHeight: 1.7,
      letterSpacing: '0.2px',
    },
    
    // Button Styles
    button: {
      fontFamily: 'Fredoka, Comfortaa, sans-serif',
      fontSize: '1.4rem',
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
    },
    buttonLarge: {
      fontFamily: 'Fredoka, Comfortaa, sans-serif',
      fontSize: '1.6rem',
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
    },
    
    // Label Styles
    label: {
      fontFamily: 'Comfortaa, sans-serif',
      fontSize: '1.2rem',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '1px',
      textTransform: 'uppercase',
    },
  },
} as const;
