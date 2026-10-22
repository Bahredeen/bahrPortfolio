import { useEffect, useRef, useState } from 'react';

export function useAnimatedCounter(target: number, duration = 2000, decimals = 0) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const element = document.getElementById(`counter-${target}-${decimals}`);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = 0;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(start + (target - start) * eased);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setValue(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target, duration, decimals]);

  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
}
