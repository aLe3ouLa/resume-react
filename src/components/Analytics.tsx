import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';

const Analytics = () => {
  const location = useLocation();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    // Track page views on route changes
    trackPageView(location.pathname);
  }, [location, trackPageView]);

  return null; // This component doesn't render anything
};

export default Analytics;
