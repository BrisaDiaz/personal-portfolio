import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import useModalFocus from "@/hooks/useModalFocus";
export default function MenuNav({
  isOpen,
  links,
  onClose,
  activeLink,
  onNavegate,
}: {
  isOpen: boolean;
  links: Array<{ title: string; href: string }>;
  onClose: () => void;

  activeLink: string;
  onNavegate: (href: string) => void;
}) {
  const { tabIndex } = useModalFocus({
    isOpen,
    onEscape: onClose,
    moldalSelector: '[aria-label="navegation menu"]',
  });

  return (
    <aside
      tabIndex={tabIndex}
      className={`${styles.menu} ${isOpen ? styles.openMenu : ""}`}
      aria-label="navegation menu"
    >
      <div className={styles.closeBtn}>
        <button onClick={onClose} aria-label="close" tabIndex={tabIndex} />
        <Image
          layout="fill"
          src="/icons/close.svg"
          alt="clouse"
          objectFit="contain"
        />
      </div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => onNavegate(link.href)}
                tabIndex={tabIndex}
              >
                <h2>{link.title}</h2>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
