/**
 * Design System - Color Tokens
 * 
 * Bold retro color palette inspired by 1950s-1970s product design
 * (Smeg refrigerators, Polaroid cameras, vintage travel posters)
 */

export const colors = {
  // Primary Colors
  primary: {
    base: "#00A8A8",      // Bold teal (Smeg/Polaroid)
    hover: "#008A8A",     // Darker teal
    light: "#4FC3C3",     // Lighter teal
    dark: "#006666",      // Darker teal
  },
  
  // Secondary Colors
  secondary: {
    base: "#FF6B6B",      // Cherry red
    hover: "#E55A5A",     // Darker cherry
    light: "#FF8E8E",     // Lighter cherry
    dark: "#CC5555",      // Darker cherry
  },
  
  // Tertiary Colors
  tertiary: {
    base: "#FFD93D",      // Mustard yellow
    hover: "#E5C42D",     // Darker mustard
    light: "#FFE066",     // Lighter mustard
    dark: "#CCB030",      // Darker mustard
  },
  
  // Accent Colors
  accent: {
    base: "#6BCF7F",      // Mint green
    hover: "#5AB86A",     // Darker mint
    light: "#8DD99F",     // Lighter mint
    dark: "#4FA65F",      // Darker mint
  },
  
  coral: {
    base: "#FF8A80",      // Coral pink
    hover: "#E67A70",     // Darker coral
    light: "#FFA399",     // Lighter coral
    dark: "#CC6E66",      // Darker coral
  },
  
  // Neutral Colors
  cream: {
    base: "#FFF9E6",      // Cream background
    light: "#FFFCF0",     // Lighter cream
    dark: "#F5F0D6",      // Darker cream
  },
  
  text: {
    primary: "#2C2C2C",   // Dark charcoal (vintage text)
    secondary: "#666666", // Medium gray
    tertiary: "#999999", // Light gray
    inverse: "#FFFFFF",   // White text
  },
  
  // Semantic Colors
  white: "#FFFFFF",
  black: "#1A1A1A",
  
  warning: {
    base: "#FFD93D",     // Mustard
    light: "#FFE066",
    dark: "#E5C42D",
  },
  
  error: {
    base: "#FF6B6B",     // Cherry red
    light: "#FF8E8E",
    dark: "#E55A5A",
  },
  
  success: {
    base: "#6BCF7F",     // Mint green
    light: "#8DD99F",
    dark: "#5AB86A",
  },
} as const;

// Legacy export for backward compatibility
export const color = {
  primary: colors.primary.base,
  secondary: colors.secondary.base,
  tertiary: colors.tertiary.base,
  accent: colors.accent.base,
  coral: colors.coral.base,
  cream: colors.cream.base,
  hoverPrimary: colors.primary.hover,
  hoverSecondary: colors.secondary.hover,
  hoverTertiary: colors.tertiary.hover,
  text: colors.text.primary,
  textLight: colors.text.secondary,
  white: colors.white,
  black: colors.black,
  warning: colors.warning.base,
  error: colors.error.base,
};
