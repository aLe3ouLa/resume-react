/**
 * Design System - Design Tokens
 * 
 * Centralized export of all design tokens
 */

export { colors, color } from './colors';
export { typography } from './typography';
export { spacing, spacingScale } from './spacing';
export { shadows } from './shadows';
export { borders } from './borders';
export { breakpoints, breakpoint } from './breakpoints';
export { animations } from './animations';

// Grain texture for retro aesthetic
export const textures = {
  grain: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
} as const;
