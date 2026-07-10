import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';

interface SectionTrackerProps {
  sectionName: string;
  children: React.ReactNode;
  threshold?: number; // Intersection Observer threshold (0-1)
  rootMargin?: string; // Intersection Observer root margin
}

const SectionTracker: React.FC<SectionTrackerProps> = ({
  sectionName,
  children,
  threshold = 0.5,
  rootMargin = '0px'
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { trackSectionView } = useAnalytics();
  const location = useLocation();
  const hasTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            const page = location.pathname === '/' ? 'homepage' : location.pathname.slice(1);
            trackSectionView(sectionName, page);
            hasTracked.current = true;
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [sectionName, trackSectionView, location.pathname, threshold, rootMargin]);

  // Reset tracking when navigating to a new page
  useEffect(() => {
    hasTracked.current = false;
  }, [location.pathname]);

  return (
    <div ref={sectionRef}>
      {children}
    </div>
  );
};

export default SectionTracker;
