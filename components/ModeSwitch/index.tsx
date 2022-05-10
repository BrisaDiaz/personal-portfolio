import { ChangeEventHandler, useEffect, useState } from "react";
import styles from "./index.module.css";

const DarkMode = () => {
  const [isDarkDefault, setDefaultDarkTheme] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    setDefaultDarkTheme(true);
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    setDefaultDarkTheme(false);
  };

  useEffect(() => {
    const storedTheme = window?.localStorage?.getItem("theme");

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const defaultDark =
      storedTheme === "dark" || (storedTheme === null && prefersDark);
    setDefaultDarkTheme(defaultDark);
    if (defaultDark) {
      setDark();
    }
    setIsMounted(true);
  }, []);

  const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log("change");
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };
  if (!isMounted) return <div />;
  return (
    <div className={styles["toggle-theme-wrapper"]}>
      <label className={styles["toggle-theme"]} htmlFor="dark-mode-checkbox">
        toggle darkmode
        <input
          tabIndex={0}
          type="checkbox"
          id="dark-mode-checkbox"
          onChange={toggleTheme}
          defaultChecked={isDarkDefault}
        />
        <div className={`${styles["slider"]} ${styles["round"]}`}>
          <div className={styles["crescent"]}></div>
        </div>
      </label>
    </div>
  );
};

export default DarkMode;
