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
}) {
  return (
    <div className={styles.container}>
      <div className={`${styles.spinner}`}>
        <Spinner size={spinnerSize || "medium"} />
      </div>
      <div className={styles.image}>
        <Image
          objectFit={objectFit ? objectFit : "cover"}
          src={src}
          layout={layout || "fill"}
          alt={alt}
          {...rest}
          priority={priority || false}
          objectPosition={"center center"}
        />
      </div>
    </div>
  );
}
