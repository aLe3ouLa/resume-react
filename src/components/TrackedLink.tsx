import React from 'react';
import { useAnalytics } from '../hooks/useAnalytics';
import { LinkProps, useLocation } from 'react-router-dom';
import { Link } from '../design-system/components/Link/Link';

interface TrackedLinkProps extends LinkProps {
    label: string; // Link contents
    icon?: React.ReactNode; // Optional leading icon (e.g. an emoji or icon element)
    trackingName: string; // Name for analytics tracking
    trackingLocation?: string; // Optional location context
}

const TrackedLink: React.FC<TrackedLinkProps> = ({
    label,
    icon,
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
        const fromPage =
            location.pathname === '/' ? 'homepage' : location.pathname.slice(1);
        const toPage =
            typeof to === 'string'
                ? to === '/'
                    ? 'homepage'
                    : to.slice(1)
                : 'unknown';
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
            label={label}
            icon={icon}
        />
    );
};

export default TrackedLink;
