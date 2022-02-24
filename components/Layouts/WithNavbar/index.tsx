import React from "react";
import MenuNav from "@/components/MenuNav";
import SVG from "@/components/SVG";
import styles from "./index.module.css";
export default function WithNavbar({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuState, setMenuState] = React.useState<{
    isOpen: boolean;
    activeLink: string;
  }>({
    isOpen: false,
    activeLink: "aboutMe",
  });

  const handleNavigation = (href: string) => {
    setMenuState({
      isOpen: false,
      activeLink: href,
    });
  };
  const handleOpenMenu = () => {
    setMenuState({
      ...menuState,
      isOpen: true,
    });
  };
  const handleCloseMenu = () => {
    setMenuState({
      ...menuState,
      isOpen: false,
    });
  };
  const MENU_LINKS = [
    { title: "About Me", href: "/" },
    { title: "Tech Stack", href: "/technologies" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];
  return (
    <>
      <div className={styles["button-container"]}>
        <button
          onClick={handleOpenMenu}
          aria-label="menu"
          className={styles["button-container__button"]}
        />
        <SVG name="menu" />
      </div>
      <MenuNav
        isOpen={menuState.isOpen}
        links={MENU_LINKS}
        onClose={handleCloseMenu}
        activeLink={menuState.activeLink}
        onNavigate={handleNavigation}
      />
      {children}
    </>
  );
}
