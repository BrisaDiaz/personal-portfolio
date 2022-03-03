import styles from "./index.module.css";
export default function EmailLoader() {
  return (
    <span
      className={styles["loader"]}
      aria-label="loading"
      role="alert"
      aria-live="assertive"
    ></span>
  );
}
