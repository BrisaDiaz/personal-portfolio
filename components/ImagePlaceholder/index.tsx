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
  priority,
  showSpinner,
  ...rest
}: {
  width?: number;
  height?: number;
  priority?: boolean;
  src: string;
  layout?: "fill" | "responsive" | "fixed";
  alt: string;
  objectFit?: "contain" | "cover";
  spinnerSize?: "small" | "medium" | "large";
  showSpinner?: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState<boolean>(showSpinner ? false : true);

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
          {...rest}
          priority={priority || false}
          onLoadedData={() => showSpinner && setIsLoaded(true)}
          onLoad={() => showSpinner && setIsLoaded(true)}
          onLoadStart={() => showSpinner && setIsLoaded(false)}
          objectPosition={"center center"}
          onError={() => showSpinner && setIsLoaded(true)}
        />
      </div>
    </div>
  );
}
