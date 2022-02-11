import styles from "./index.module.css";
export default function Spinner({
  size,
}: {
  size: "small" | "medium" | "large";
}) {
  return (
    <div
      className={`${styles["lds-default"]} ${
        size === "small" ? styles.small : size === "large" ? styles.large : ""
      }`}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
