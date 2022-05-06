import React from "react";
import Link from "next/link";
import styles from "./index.module.css";


export default function MenuNav({
  isOpen,
  links,
  onClose,

  onNavigate,
}: {
  isOpen: boolean;
  links: Array<{ title: string; href: string }>;
  onClose: () => void;

  onNavigate: (href: string) => void;
}) {
  return (
    <header
      aria-hidden={isOpen ? "true" : false}
      className={`${styles.menu} ${isOpen ? styles["menu--open"] : ""}`}
    >
      <CloseBtn onClick={onClose} />
      <nav aria-label="primary" role="menubar" className={styles["menu__nav"]}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} passHref>
            <a
              role="menuitem"
              href=""
              title={link.title + " section"}
              className={styles["menu__nav-link"]}
              onClick={() => onNavigate(link.href)}
            >
              {link.title}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
}
function CloseBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="close menu"
      className={styles["menu__close-btn"]}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 0 24 24"
        width="30px"
        fill="var(--font-color)"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    </button>
  );
}
