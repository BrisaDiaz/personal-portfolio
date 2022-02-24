import styles from "./index.module.css";
export default function Button({
  onClick,
  text,
  tabIndex,
  className,
}: {
  onClick?: () => void;
  text: string;
  className?: any;
  tabIndex?: number;
}) {
  return (
    <button
      className={`${styles.button} ${className ? className : ""}`}
      onClick={() => onClick && onClick()}
      tabIndex={tabIndex || 0}
    >
      {text}
    </button>
  );
}
