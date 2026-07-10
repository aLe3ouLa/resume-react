# Analytics Tracking System

This document explains how to track user interactions with buttons, sections, and navigation in your React application.

## Overview

The analytics system provides comprehensive tracking for:
- **Button clicks** - Track which buttons users click most
- **Section views** - Track which sections users scroll to and view
- **Navigation** - Track page-to-page navigation patterns
- **Custom interactions** - Track any custom user interactions

## Components

### 1. SectionTracker

Automatically tracks when sections become visible to users using Intersection Observer API.

```tsx
import SectionTracker from '../components/SectionTracker';

<SectionTracker sectionName="Hero">
  <Hero />
</SectionTracker>
```

**Props:**
- `sectionName` (required): Name for analytics tracking
- `threshold` (optional): Intersection Observer threshold (0-1, default: 0.5)
- `rootMargin` (optional): Intersection Observer root margin (default: '0px')

### 2. TrackedButton

Wraps the existing Button component with analytics tracking.

```tsx
import TrackedButton from '../components/TrackedButton';

<TrackedButton
  trackingName="Download CV"
  trackingLocation="hero"
  variation={ButtonVariation.PRIMARY}
  label="Download CV"
  onClick={handleOpenPDF}
/>
```

**Props:**
- `trackingName` (required): Name for analytics tracking
- `trackingLocation` (optional): Location context (e.g., "hero", "footer")
- All standard Button props: `variation`, `size`, `label`, `onClick`

### 3. TrackedLink

Wraps React Router Link with analytics tracking for navigation.

```tsx
import TrackedLink from '../components/TrackedLink';

<TrackedLink 
  to="/photography"
  trackingName="Book Photography"
  trackingLocation="hero"
  className="your-css-classes"
>
  Book Photography
</TrackedLink>
```

**Props:**
- `trackingName` (required): Name for analytics tracking
- `trackingLocation` (optional): Location context
- All standard Link props: `to`, `className`, `onClick`, etc.

## Analytics Hook

The `useAnalytics` hook provides tracking methods:

```tsx
import { useAnalytics } from '../hooks/useAnalytics';

const { 
  trackEvent, 
  trackPageView, 
  trackButtonClick, 
  trackSectionView, 
  trackNavigation, 
  trackInteraction 
} = useAnalytics();
```

### Available Methods

- `trackEvent(action, category, label?, value?)` - Generic event tracking
- `trackPageView(page_path, page_title?)` - Page view tracking
- `trackButtonClick(buttonName, location?)` - Button click tracking
- `trackSectionView(sectionName, page?)` - Section view tracking
- `trackNavigation(from, to)` - Navigation tracking
- `trackInteraction(elementType, elementName, action?)` - Custom interaction tracking

## Google Analytics Events

All tracking events are sent to Google Analytics with the following structure:

### Button Clicks
- **Event**: `click`
- **Category**: `button`
- **Label**: `{buttonName} - {location}`

### Section Views
- **Event**: `view`
- **Category**: `section`
- **Label**: `{sectionName} - {page}`

### Navigation
- **Event**: `navigate`
- **Category**: `navigation`
- **Label**: `{from} to {to}`

## Implementation Examples

### Homepage with Section Tracking
```tsx
const Homepage = () => {
  return (
    <Page>
      <SectionTracker sectionName="Hero">
        <Hero />
      </SectionTracker>
      <SectionTracker sectionName="About Me">
        <AboutMe />
      </SectionTracker>
      <SectionTracker sectionName="Tech Stack">
        <TechStack />
      </SectionTracker>
    </Page>
  );
};
```

### Hero Component with Tracked Buttons
```tsx
const Hero = () => (
  <Wrapper>
    <ButtonContainer>
      <TrackedButton
        trackingName="Download CV"
        trackingLocation="hero"
        variation={ButtonVariation.PRIMARY}
        label="Download CV"
        onClick={handleOpenPDF}
      />
      <TrackedLink 
        to="/photography"
        trackingName="Book Photography"
        trackingLocation="hero"
        className="photography-link"
      >
        Book Photography
      </TrackedLink>
    </ButtonContainer>
  </Wrapper>
);
```

## Viewing Analytics Data

### Google Analytics Dashboard
1. Go to your Google Analytics dashboard
2. Navigate to **Events** > **All Events**
3. Filter by event categories:
   - `button` - Button click events
   - `section` - Section view events
   - `navigation` - Navigation events

### Key Metrics to Monitor
- **Most clicked buttons**: Identify popular CTAs
- **Most viewed sections**: Understand content engagement
- **Navigation patterns**: See how users move through your site
- **Page performance**: Compare section engagement across pages

## Best Practices

1. **Consistent Naming**: Use consistent naming conventions for tracking names
2. **Location Context**: Always provide location context for better analytics
3. **Threshold Settings**: Adjust section tracking thresholds based on content size
4. **Performance**: Section tracking uses Intersection Observer, so it's performant
5. **Privacy**: All tracking respects user privacy and follows GDPR guidelines

## Troubleshooting

### Events Not Appearing
- Check Google Analytics configuration
- Verify `REACT_APP_GA_MEASUREMENT_ID` environment variable
- Ensure components are properly wrapped with tracking components

### Section Tracking Issues
- Verify sections are properly wrapped with `SectionTracker`
- Check threshold settings (default 0.5 means 50% visible)
- Ensure sections have sufficient height to trigger intersection

### Button Tracking Issues
- Verify buttons use `TrackedButton` component
- Check that `trackingName` is provided
- Ensure onClick handlers are properly passed through
