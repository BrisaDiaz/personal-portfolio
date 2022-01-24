import React from "react";
export default function useModalFocus({
  moldalSelector,
  isOpen,
  onEscape,
}: {
  moldalSelector: string;
  isOpen: boolean;
  onEscape?: () => void;
}) {
  const [tabIndex, setTabIndex] = React.useState<-1 | 0>(-1);
  React.useEffect(() => {
    if (!isOpen) return setTabIndex(-1);
    setTabIndex(0);
    handleFocus();
  }, [isOpen]);

  const handleFocus = () => {
    const focusableElements =
      'a,button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = document.querySelector(moldalSelector);

    if (!modal) return;

    const firstFocusableElement = modal.querySelectorAll(
      focusableElements
    )[0] as HTMLElement; // get first element to be focused inside modal
    const focusableContent = modal.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[
      focusableContent.length - 1
    ] as HTMLElement; // get last element to be focused inside modal

    document.addEventListener("keydown", function (e) {
      e.key === "Escape" && onEscape && onEscape();

      let isTabPressed = e.key === "Tab" || e.keyCode === 9;

      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) {
        // if shift key pressed for shift + tab combination
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus(); // add focus for the last focusable element
          e.preventDefault();
        }
      } else {
        // if tab key is pressed
        if (document.activeElement === lastFocusableElement) {
          // if focused has reached to last focusable element then focus first focusable element after pressing tab
          firstFocusableElement.focus(); // add focus for the first focusable element
          e.preventDefault();
        }
      }
    });

    firstFocusableElement.focus();
  };
  return { tabIndex };
}