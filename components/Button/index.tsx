import styles from "./index.module.css";
export default function Button({
  onClick,
  text,
  tabIndex,
}: {
  onClick?: () => void;
  text: string;
  className?: any;
  tabIndex?: number;
}) {
  return (
    <button
      className={styles.button}
      onClick={() => onClick && onClick()}
      tabIndex={tabIndex || 0}
    >
      {text}
    </button>
  );
}
