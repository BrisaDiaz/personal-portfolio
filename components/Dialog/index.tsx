import React from "react";

import useModalFocus from "@/hooks/useModalFocus";

import styles from "./index.module.css";

export default function Modal({
  onClose,
  isOpen,
  children,
}: {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}) {
  const [isInteracting, setIsInteracting] = React.useState<boolean>(false);
  const modalRef = React.useRef(null) 
  const handleModalInteraction = () => {
    if (isInteracting) return;
    onClose();
  };
  const { tabIndex } = useModalFocus({
    isOpen,
    onEscape: onClose,
    ref: modalRef,
  });

  return (
    <div
      ref={modalRef}
      aria-hidden={!isOpen}
      className={`${styles.modal} ${
        isOpen ? styles["modal--open"] : styles["modal--close"]
      }`}
      role="dialog"
      tabIndex={tabIndex}
      onClick={() => handleModalInteraction()}
    >
      <article
        className={styles["modal__inner"]}
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
        onTouchStart={() => setIsInteracting(true)}
      >
        <div className={styles["modal__header"]}>
          <div className={styles["modal__close-btn"]}>
            <button aria-label="close" name="close" onClick={onClose} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 0 24 24"
              width="30px"
              fill="#fff"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </div>
        </div>
        {children}
      </article>
    </div>
  );
}
