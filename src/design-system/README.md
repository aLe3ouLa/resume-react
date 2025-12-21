# Design System

A comprehensive design system for the retro-themed resume website, inspired by 1950s-1970s product design (Smeg refrigerators, Polaroid cameras, vintage travel posters).

## Design Philosophy

- **Bold, Playful Retro Aesthetic**: Saturated colors, soft rounded corners, chunky UI elements
- **Vintage Print Design**: Layered shadows, subtle grain textures, not modern glassmorphism
- **Tactile Interactions**: Buttons feel fun to click with clear hover/active states
- **Personality Over Minimalism**: Clean but playful layout emphasizing character

## Design Tokens

### Colors

Located in `tokens/colors.ts`

- **Primary**: Bold teal (#00A8A8) - Main brand color
- **Secondary**: Cherry red (#FF6B6B) - Accent and hover states
- **Tertiary**: Mustard yellow (#FFD93D) - Highlights
- **Accent**: Mint green (#6BCF7F) - Additional accents
- **Coral**: Coral pink (#FF8A80) - Decorative elements
- **Cream**: Background (#FFF9E6) - Page background
- **Text**: Dark charcoal (#2C2C2C) - Primary text

### Typography

Located in `tokens/typography.ts`

**Font Families:**
- **Retro**: Fredoka, Comfortaa (for headings and buttons)
- **Display**: Fredoka (for large display text)
- **Body**: Comfortaa (for body text)

**Font Sizes:**
- Scale from 1.2rem (xs) to 6rem (8xl)
- Responsive sizing with breakpoints

**Text Styles:**
- Display styles for hero sections
- Heading styles (h1-h3)
- Body styles (body, bodyLarge, bodySmall)
- Button styles
- Label styles

### Spacing

Located in `tokens/spacing.ts`

Consistent spacing scale:
- xxxs: 2px
- xxs: 4px
- xs: 6px
- sm: 12px
- md: 20px
- lg: 28px
- xl: 40px
- xxl: 100px

### Shadows

Located in `tokens/shadows.ts`

Vintage layered shadows (not modern glassmorphism):
- Standard elevation levels (sm, md, lg, xl)
- Color-matched shadows (primary, secondary)
- Inset shadows for depth
- Card and button shadow presets

### Borders

Located in `tokens/borders.ts`

- Widths: 1px to 5px (chunky)
- Radius: 0 to 9999px (pill)
- Styles: solid, dashed, dotted
- Presets for cards, buttons, inputs, tickets

### Breakpoints

Located in `tokens/breakpoints.ts`

- Mobile: 0px
- Tablet: 640px
- Desktop: 1024px
- Large: 1280px
- XLarge: 1440px

### Animations

Located in `tokens/animations.ts`

Subtle and charming animations:
- Wave, float, sparkle, wiggle
- Smooth transitions (200ms base)
- Retro easing functions

## Components

### Buttons

- **Pill-shaped** (border-radius: 9999px)
- **Chunky borders** (3px)
- **Vintage layered shadows**
- **Tactile hover/active states**

See `components/Button.stories.tsx` for examples.

### Cards

- **Vintage travel ticket style** for work experience
- **Layered shadows** for depth
- **Grain texture** overlay
- **Perforated edges** for ticket aesthetic

### Typography

- **ColoredSpan**: Styled text spans with hover effects
- **Headings**: Uppercase, bold, retro fonts
- **Body**: Comfortaa font, readable line-height

## Usage Guidelines

### Color Usage

1. **Primary** for main actions and brand elements
2. **Secondary** for accents and hover states
3. **Cream** for backgrounds (with grain texture overlay)
4. **Text** colors maintain sufficient contrast

### Typography

1. Use **Display** fonts for hero sections and large headings
2. Use **Body** font for readable content
3. Maintain consistent **letter-spacing** (0.5px for buttons, 1-2px for headings)
4. Use **uppercase** for buttons and section titles

### Spacing

1. Use spacing tokens consistently
2. Maintain 16px minimum gap between interactive elements
3. Use larger spacing (xl, xxl) for section separation

### Shadows

1. Use **layered shadows** for depth (not flat)
2. Match shadow colors to element colors
3. Use **inset shadows** for pressed/active states

### Borders

1. Use **chunky borders** (3-4px) for retro feel
2. **Pill shape** (9999px) for buttons
3. **No border-radius** for ticket-style cards
4. **Dashed borders** for dividers

## Accessibility

- Maintain **WCAG AA contrast ratios**
- Use **semantic HTML**
- Include **ARIA labels** where needed
- Ensure **keyboard navigation** works
- Test with **screen readers**

## Implementation

Design tokens are exported from `tokens/index.ts` and can be imported:

```typescript
import { colors, typography, spacing, shadows } from '@/design-system/tokens';
```

Components follow the design system patterns and can be found in `src/components/`.

## Future Enhancements

- [ ] Storybook integration for component documentation
- [ ] Dark mode support
- [ ] Additional component variants
- [ ] Animation library expansion
- [ ] Design system documentation site
