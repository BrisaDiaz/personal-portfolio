import React, { useEffect } from "react";
export default function useModalFocus({
  modalSelector,
  isOpen,
  onClose,
  openKey,
  closeKey,
  onOpen,
}: {
  modalSelector: string;
  isOpen: boolean;
  openKey?: string;
  closeKey?: string;
  onClose?: () => void;
  onOpen?: () => void;
}) {
  const [tabIndex, setTabIndex] = React.useState<-1 | 0>(-1);
  React.useEffect(() => {
    handleBodyState();
    if (!isOpen) return setTabIndex(-1);

    setTabIndex(0);
    handleFocus();
  }, [isOpen]);

  const handleFocus = () => {
    const focusableElements =
      'a,button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = document.querySelector(modalSelector);

    if (!modal) return;

    const firstFocusableElement = modal.querySelectorAll(
      focusableElements
    )[0] as HTMLElement; // get first element to be focused inside modal
    const focusableContent = modal.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[
      focusableContent.length - 1
    ] as HTMLElement; // get last element to be focused inside modal

    document.addEventListener("keydown", function (e) {
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
  const handleKeydown = (e: KeyboardEvent) => {
    if (isOpen && e.key === closeKey && onClose) {
      onClose();
    }
    if (!isOpen && e.key === openKey && onOpen) {
      onOpen();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeydown, false);
    return () => document.removeEventListener("keydown", handleKeydown, false);
  }, []);
  function handleBodyState() {
    if (document) {
      const body = window.document.body;
      const html = window.document?.querySelector("html");

      if (!body || !html) return;

      if (isOpen) {
        body.style.overflow = "hidden";
        html.style.overflow = "hidden";
      } else {
        body.style.overflowY = "auto";
        html.style.overflowY = "auto";
      }
    }
  }

  return { tabIndex };
}
