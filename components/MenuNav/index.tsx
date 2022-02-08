import React from "react";
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
          aria-hidden="true"
          placeholder="blur"
          blurDataURL="/svg/close.svg"
        />
      </div>
      <nav role="menubar">
        <ul>
          {links.map((link) => (
            <li key={link.href} role="menuitem">
              <a
                href={link.href}
                title={link.title + " section"}
                onClick={() => onNavigate(link.href)}
                tabIndex={tabIndex}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
