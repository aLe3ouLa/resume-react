import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';
import { useLocation } from 'react-router-dom';

interface TrackedLinkProps extends LinkProps {
  trackingName: string; // Name for analytics tracking
  trackingLocation?: string; // Optional location context
}

const TrackedLink: React.FC<TrackedLinkProps> = ({
  trackingName,
  trackingLocation,
  onClick,
  to,
  ...linkProps
}) => {
  const { trackNavigation } = useAnalytics();
  const location = useLocation();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Track the navigation
    const fromPage = location.pathname === '/' ? 'homepage' : location.pathname.slice(1);
    const toPage = typeof to === 'string' ? (to === '/' ? 'homepage' : to.slice(1)) : 'unknown';
    const locationContext = trackingLocation || fromPage;
    
    trackNavigation(`${locationContext} - ${trackingName}`, toPage);

    // Call the original onClick handler if provided
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Link
      {...linkProps}
      to={to}
      onClick={handleClick}
    />
  );
};

export default TrackedLink;
