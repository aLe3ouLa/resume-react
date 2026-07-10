/**
 * Design System - Animation Tokens
 * 
 * Subtle and charming animations for retro aesthetic
 */

export const animations = {
  // Duration
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  
  // Easing Functions
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    retro: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  // Keyframe Animations
  keyframes: {
    wave: {
      '0%': { transform: 'rotate(0deg)' },
      '10%': { transform: 'rotate(14deg)' },
      '20%': { transform: 'rotate(-8deg)' },
      '30%': { transform: 'rotate(12deg)' },
      '40%': { transform: 'rotate(-6deg)' },
      '50%': { transform: 'rotate(10deg)' },
      '60%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(0deg)' },
    },
    float: {
      '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
      '50%': { transform: 'translateY(-20px) rotate(5deg)' },
    },
    sparkle: {
      '0%, 100%': { opacity: '0', transform: 'scale(0)' },
      '50%': { opacity: '1', transform: 'scale(1)' },
    },
    wiggle: {
      '0%, 7%, 93%, 100%': { transform: 'rotate(0deg)' },
      '15%': { transform: 'rotate(5deg)' },
      '20%': { transform: 'rotate(-4deg)' },
      '25%': { transform: 'rotate(3deg)' },
      '30%': { transform: 'rotate(-2deg)' },
      '35%': { transform: 'rotate(1deg)' },
    },
  },
  
  // Animation Presets
  presets: {
    wave: {
      animation: 'wave 2s infinite',
      animationName: 'wave',
      animationDuration: '2s',
      animationIterationCount: 'infinite',
    },
    float: {
      animation: 'float 4s ease-in-out infinite',
      animationName: 'float',
      animationDuration: '4s',
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
    },
    sparkle: {
      animation: 'sparkle 3s ease-in-out infinite',
      animationName: 'sparkle',
      animationDuration: '3s',
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
    },
    wiggle: {
      animation: 'wiggle 0.5s ease-in-out',
      animationName: 'wiggle',
      animationDuration: '0.5s',
      animationTimingFunction: 'ease-in-out',
    },
  },
  
  // Transitions
  transitions: {
    base: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    color: 'color 0.2s ease, background-color 0.2s ease',
    transform: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    shadow: 'box-shadow 0.2s ease',
  },
} as const;
