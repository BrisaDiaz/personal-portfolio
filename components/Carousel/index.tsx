import React, { useState } from "react";
import styles from "./index.module.css";
import useCarousel from "@/hooks/useCarousel";

import ImagePlaceholder from "@/components/ImagePlaceholder/index";

export default function Carousel({
  captions,
  objectFit,
  thumbnail,
  tabIndex,
  onZoom,
}: {
  onZoom?: (img: { src: string; alt: string }) => void;
  captions: { src: string; alt: string; original?: string }[];
  objectFit?: "contain" | "cover";
  width: number;
  height: number;
  tabIndex?: 0 | -1;
  thumbnail?: string;
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
        className={`${styles.backdrop} thumbnail  ${
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
            height="100px"
            viewBox="0 0 24 24"
            width="100px"
            fill="#a0616a"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <path
                stroke="#c78989"
                strokeWidth="0.5px"
                d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M9.5,16.5v-9l7,4.5L9.5,16.5z"
              />
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
              {onZoom ? (
                <ZoomBnt
                  onClick={() =>
                    onZoom({
                      src: caption?.original || caption.src,
                      alt: caption.alt,
                    })
                  }
                />
              ) : null}
              <ImagePlaceholder
                spinnerSize="large"
                loading="eager"
                src={caption.src}
                alt={caption.alt}
                objectFit={objectFit}
              />
              <span className={styles["carousel__slide-count"]}>
                {index + 1 + "/" + captions.length}
              </span>
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
      <style jsx>{`
        .thumbnail {
          background: var(--primary-main)
            ${thumbnail ? `url(${thumbnail})` : "var(--primary-main)"} no-repeat
            center center;
        }
      `}</style>
    </div>
  );
}

function ZoomBnt({ onClick }: { onClick: () => void }) {
  return (
    <button
      className={styles["zoom-btn"]}
      aria-label="open zoom image"
      title="open zoom"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#fff"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
      </svg>
    </button>
  );
}
