import React from "react";
export default function useCarousel({
  items,
  autoPlay,
  interval,
}: {
  items: Array<any>;
  autoPlay?: boolean;
  interval?: number;
}) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const lastSlideIndex = items.length - 1;
  const firstSlideIndex = 0;
  const onNext = () => {
    if (currentSlide === lastSlideIndex) {
      return setCurrentSlide(firstSlideIndex);
    }
    setCurrentSlide(currentSlide + 1);
  };
  const onPrev = () => {
    if (currentSlide === firstSlideIndex) {
      return setCurrentSlide(lastSlideIndex);
    }
    setCurrentSlide(currentSlide - 1);
  };

  const moveToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  const nextCurrentSlide = () => {
    setCurrentSlide(currentSlide + 1);
    if (currentSlide === items.length - 1) {
      setCurrentSlide(0);
    }
  };

  React.useEffect(() => {
    if (!autoPlay) return;
    const intervalId = setInterval(nextCurrentSlide, interval || 4000);
    return () => clearInterval(intervalId);
  });

  return { currentSlide, moveToSlide, onPrev, onNext };
}
