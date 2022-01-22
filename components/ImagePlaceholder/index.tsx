import Image from "next/image";
import React, { useState } from "react";
import Spinner from "@/components/Spinner/index";
import styles from "./index.module.css";
export default function Placeholder({
  src,
  alt,
  objectFit,
}: {
  src: string;
  alt: string;
  objectFit?: "contain" | "cover";
}) {
  const [isLoaded, setIsLoded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <div className={`${styles.spinner} ${isLoaded ? styles.hidden : ""}`}>
        <Spinner />
      </div>
      <div className={styles.image}>
        <Image
          objectFit={objectFit ? objectFit : error ? "contain" : "cover"}
          src={error ? "/icons/refresh.svg" : src}
          layout="fill"
          alt={alt}
          onLoadedData={() => setIsLoded(true)}
          onLoad={() => setIsLoded(true)}
          onLoadStart={() => setIsLoded(false)}
          onError={() => {
            setIsLoded(true);
            setError(true);
          }}
        />
      </div>
    </div>
  );
}
