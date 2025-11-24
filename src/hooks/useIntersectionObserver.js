import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = { threshold: 0.1, triggerOnce: true }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.triggerOnce) {
          observer.unobserve(element);
        }
      } else if (!options.triggerOnce) {
        setIsVisible(false);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.triggerOnce]);

  return [ref, isVisible];
};