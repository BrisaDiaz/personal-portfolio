import React, { useState, useEffect } from "react";
export default function useOnScreen(
  ref: React.RefObject<any>,
  rootMargin = "0px",
  onlyOnce: boolean
) {
  const [isIntersecting, setIntersecting] = useState(false);
  const [intersectionsCount, setIntersectionsCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) {
          setIntersectionsCount((prev) => prev + 1);
        }
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      ref?.current && observer.unobserve(ref?.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return intersectionsCount !== 0 && onlyOnce ? true : isIntersecting;
}
