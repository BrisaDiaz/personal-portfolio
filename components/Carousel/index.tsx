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
  captions: { src: string; alt: string; original?: string }[];
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
      className={styles.carousel}
      role="slider"
      aria-valuenow={currentSlide}
      aria-label="image carrousel"
    >
      <div
        className={`${styles.backdrop} ${
          isOpen ? styles["backdrop--hidden"] : ""
        }`}
      >
        <div className={styles["play-control"]}>
          <button
            className={styles["play-control__button"]}
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
      {isOpen
        ? captions.map((caption, index) => (
            <div
              key={caption.alt}
              className={`${styles["carousel__slide"]} ${
                currentSlide === index ? styles["carousel__slide--active"] : ""
              }`}
            >
              <ZoomBnt
                onClick={() => window.open(caption?.original || caption.src)}
              />
              <ImagePlaceholder
                spinnerSize="large"
                loading="eager"
                src={caption.src}
                alt={caption.alt}
                objectFit={objectFit}
              />
              <span>{index + 1 + "/" + captions.length}</span>
            </div>
          ))
        : null}
      {captions.length > 1 ? (
        <div className={styles["carousel__controls"]}>
          <div className={styles["nav-control"]}>
            <button
              onClick={onPrev}
              className={styles["nav-control__button"]}
              tabIndex={isOpen ? tabIndex || 0 : -1}
              aria-label="prev"
            />
            <div
              className={`${styles["nav-control"]} ${styles["nav-control--left"]}`}
            />
          </div>

          <div className={styles["nav-control"]}>
            <button
              className={styles["nav-control__button"]}
              onClick={onNext}
              tabIndex={isOpen ? tabIndex || 0 : -1}
              aria-label="next"
            />
            <div
              className={`${styles["nav-control"]} ${styles["nav-control--right"]}`}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ZoomBnt({ onClick }: { onClick: () => void }) {
  return (
    <button
      className={styles["zoom-btn"]}
      aria-label="open zoom image"
      onClick={onClick}
    >
      🔍
    </button>
  );
}
