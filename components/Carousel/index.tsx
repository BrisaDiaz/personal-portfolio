import React from "react";
import styles from "./index.module.css";
import useCarousel from "@/hooks/useCarousel";

import ImagePlaceholder from "@/components/ImagePlaceholder/index";
export default function Carousel({
  captions,
  objectFit,
  width,
  height,
  tabIndex,
}: {
  captions: Array<string>;
  objectFit?: "contain" | "cover";
  width: number;
  height: number;
  tabIndex?: 0 | -1;
}) {
  const { currentSlide, onPrev, onNext } = useCarousel({
    items: captions,
  });

  return (
    <div
      className={styles.sliderContainer}
      role="slider"
      aria-valuenow={currentSlide}
    >
      {captions.map((caption, index) => (
        <div
          key={caption}
          className={`${styles.slide} ${
            currentSlide === index ? styles.activeSlide : ""
          }`}
        >
          <ImagePlaceholder
            src={caption}
            alt="project caption"
            objectFit={objectFit}
          />
        </div>
      ))}
      <div className={styles.controlsWrapper}>
        <div className={styles.controlWrapper}>
          <button onClick={onPrev} tabIndex={tabIndex || 0} aria-label="prev" />
          <div className={`${styles.control} ${styles.controlLeft}`} />
        </div>

        <div className={styles.controlWrapper}>
          <button onClick={onNext} tabIndex={tabIndex || 0} aria-label="next" />
          <div className={`${styles.control} ${styles.controlRight}`} />
        </div>
      </div>
    </div>
  );
}
