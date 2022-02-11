import Image from "next/image";
import React, { useState } from "react";
import Spinner from "@/components/Spinner/index";
import styles from "./index.module.css";
export default function Placeholder({
  src,
  alt,
  objectFit,
  layout,
  spinnerSize,
}: {
  src: string;
  layout?: "fill" | "responsive";
  alt: string;
  objectFit?: "contain" | "cover";
  spinnerSize?: "small" | "medium" | "large";
}) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <div className={`${styles.spinner} ${isLoaded ? styles.hidden : ""}`}>
        <Spinner
          aria-live="polite"
          aria-busy={isLoaded ? "false" : "true"}
          size={spinnerSize || "medium"}
        />
      </div>
      <div className={styles.image}>
        <Image
          objectFit={objectFit ? objectFit : "cover"}
          src={src}
          layout={layout || "fill"}
          alt={alt}
          onLoadedData={() => setIsLoaded(true)}
          onLoad={() => setIsLoaded(true)}
          onLoadStart={() => setIsLoaded(false)}
          objectPosition={"center center"}
          onError={() => {
            setIsLoaded(true);
          }}
        />
      </div>
    </div>
  );
}
