import React from "react";
import Link from "next/link";
import styles from "./index.module.css";
import SVG from "@/components/SVG";
export default function MenuNav({
  isOpen,
  links,
  onClose,
  activeLink,
  onNavigate,
}: {
  isOpen: boolean;
  links: Array<{ title: string; href: string }>;
  onClose: () => void;
  activeLink: string;
  onNavigate: (href: string) => void;
}) {
  return (
    <header
      aria-hidden={isOpen ? "true" : false}
      className={`${styles.menu} ${isOpen ? styles["menu--open"] : ""}`}
    >
      <button
        onClick={onClose}
        aria-label="close menu"
        className={styles["menu__close-btn"]}
      >
        ✖
      </button>

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
