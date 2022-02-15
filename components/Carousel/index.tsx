import React, { useState } from "react";
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
  captions: { src: string; alt: string }[];
  objectFit?: "contain" | "cover";
  width: number;
  height: number;
  tabIndex?: 0 | -1;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { currentSlide, onPrev, onNext } = useCarousel({
    items: captions,
  });
  const openGallery = () => {
    setIsOpen(true);
  };
  return (
    <div
      className={styles.sliderContainer}
      role="slider"
      aria-valuenow={currentSlide}
      aria-label="image carrousel"
    >
      <div className={`${styles.backdrop} ${isOpen ? styles.hidden : ""}`}>
        <div className={styles.playWrapper}>
          <button
            onClick={() => openGallery()}
            aria-label="play gallery"
            title="Play Gallery"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="150px"
            viewBox="0 0 24 24"
            width="150px"
            fill="#fff"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M9.5,16.5v-9l7,4.5L9.5,16.5z" />
            </g>
          </svg>
        </div>
      </div>
      {captions.map((caption, index) => (
        <div
          key={caption.alt}
          className={`${styles.slide} ${
            currentSlide === index ? styles.activeSlide : ""
          }`}
        >
          <ImagePlaceholder
            spinnerSize="large"
            loading="eager"
            src={caption.src}
            alt={caption.alt}
            objectFit={objectFit}
          />
          <span>{index + 1 + "/" + captions.length}</span>
        </div>
      ))}
      <div className={styles.controlsWrapper}>
        <div className={styles.controlWrapper}>
          <button
            onClick={onPrev}
            tabIndex={isOpen ? tabIndex || 0 : -1}
            aria-label="prev"
          />
          <div className={`${styles.control} ${styles.controlLeft}`} />
        </div>

        <div className={styles.controlWrapper}>
          <button
            onClick={onNext}
            tabIndex={isOpen ? tabIndex || 0 : -1}
            aria-label="next"
          />
          <div className={`${styles.control} ${styles.controlRight}`} />
        </div>
      </div>
    </div>
  );
}
