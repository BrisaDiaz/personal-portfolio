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
  loading,
  quality,
  ...rest
}: {
  width?: number;
  quality?: number;
  height?: number;
  priority?: boolean;
  loading: "eager" | "lazy";
  src: string;
  layout?: "fill" | "responsive" | "fixed";
  alt: string;
  objectFit?: "contain" | "cover";
  spinnerSize?: "small" | "medium" | "large";
}) {
  return (
    <div className={styles["image-placeholder"]}>
      <div className={`${styles["image-placeholder__spinner"]}`}>
        <Spinner size={spinnerSize || "medium"} />
      </div>
      <div className={styles["image-placeholder__image"]}>
        <Image
          objectFit={objectFit ? objectFit : "cover"}
          src={src}
          layout={layout || "fill"}
          alt={alt}
          quality={quality || 75}
          loading={loading || "lazy"}
          priority={priority || false}
          objectPosition={"center center"}
          unoptimized={src.includes(".gif")}
        />
      </div>
    </div>
  );
}
