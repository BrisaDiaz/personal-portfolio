import { ChangeEvent } from "react";
import styles from "./index.module.css";
export default function Checkbox({
  name,
  className,
  defaultChecked,
  tabIndex,
  label,
  disabled,
  onChange,
}: {
  label: string;
  name: string;
  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  tabIndex?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={`${styles["form-check"]} ${className}`}>
      <input
        disabled={disabled || false}
        type="checkbox"
        defaultChecked={defaultChecked || false}
        className={styles["form-check-input"]}
        name={name}
        tabIndex={tabIndex || 0}
        id={name}
        onChange={(e) => onChange && onChange(e)}
      />
      <label className={styles["form-check-label"]} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
