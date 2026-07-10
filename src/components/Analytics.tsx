import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';

const Analytics = () => {
  const location = useLocation();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    // Track page views on route changes
    if (location?.pathname) {
      trackPageView(location?.pathname);
    }
  }, [location, trackPageView, location?.pathname]);

  return null; // This component doesn't render anything
};

export default Analytics;
