import styles from "./index.module.css";
export default function Spinner({
  size,
}: {
  size: "small" | "medium" | "large";
}) {
  return (
    <div
      className={`${styles["spinner"]} ${
        size === "small"
          ? styles["spinner--small"]
          : size === "large"
          ? styles["spinner--large"]
          : ""
      }`}
    >
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
