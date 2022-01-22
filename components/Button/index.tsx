import styles from "./index.module.css";
export default function Button({
  onClick,
  text,
  className,
}: {
  onClick: () => void;
  text: string;
  className?: any;
}) {
  return (
    <button className={styles.button} onClick={onClick} tabIndex={0}>
      {text}
    </button>
  );
}
