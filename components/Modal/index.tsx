import styles from "./index.module.css";

export default function LoadingModal({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactElement;
}) {
  return (
    <div
      aria-busy={isOpen}
      aria-hidden={!isOpen}
      aria-label="loading"
      aria-live="assertive"
      className={`${styles.modal} ${isOpen ? styles["modal--open"] : ""}`}
      role="alert"
    >
      {children}
    </div>
  );
}
