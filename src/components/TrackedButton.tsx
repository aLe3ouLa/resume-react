import React from 'react';
import { Button } from './fragments/Button/Button';
import { ButtonSize, ButtonVariation } from './fragments/Button/Button.styles';
import { useAnalytics } from '../hooks/useAnalytics';
import { useLocation } from 'react-router-dom';

interface TrackedButtonProps {
  trackingName: string; // Name for analytics tracking
  trackingLocation?: string; // Optional location context
  variation?: ButtonVariation;
  size?: ButtonSize;
  label: string;
  onClick?: () => void;
}

const TrackedButton: React.FC<TrackedButtonProps> = ({
  trackingName,
  trackingLocation,
  onClick,
  variation,
  size,
  label,
  ...buttonProps
}) => {
  const { trackButtonClick } = useAnalytics();
  const location = useLocation();

  const handleClick = () => {
    // Track the button click
    const page = location.pathname === '/' ? 'homepage' : location.pathname.slice(1);
    const locationContext = trackingLocation || page;
    trackButtonClick(trackingName, locationContext);

    // Call the original onClick handler if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      variation={variation}
      size={size}
      label={label}
      onClick={handleClick}
      {...buttonProps}
    />
  );
};

export default TrackedButton;
