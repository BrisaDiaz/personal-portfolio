import React from "react";
import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import useModalFocus from "@/hooks/useModalFocus";
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
  const { tabIndex } = useModalFocus({
    isOpen,
    onEscape: () => onClose(),
    modalSelector: '[aria-label="navigation menu"]',
  });

  return (
    <aside
      role="complementary"
      aria-hidden={isOpen ? "true" : false}
      tabIndex={tabIndex}
      className={`${styles.menu} ${isOpen ? styles.openMenu : ""}`}
      aria-label="navigation menu"
    >
      <div className={styles.closeBtn}>
        <button onClick={onClose} aria-label="close" tabIndex={tabIndex} />
        <Image
          layout="fill"
          src="/icons/close.svg"
          alt="close"
          objectFit="contain"
          loading="eager"
        />
      </div>
      <nav aria-label="primary" role="menubar">
        {links.map((link) => (
          <Link key={link.href} href={link.href} passHref>
            <a
              role="menuitem"
              href=""
              title={link.title + " section"}
              onClick={() => onNavigate(link.href)}
            >
              {link.title}
            </a>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
