import Modal from "@/components/Dialog";

import styles from "./index.module.css";
export default function PopNotification({
  title,
  message,
  isOpen,
  onClose,
}: {
  onClose: () => void;
  isOpen: boolean;
  title: string;
  message?: string;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.notification} test-id="notification">
        <h2 className={`${styles["notification__title"]} title3 `}>{title}</h2>
        {message && (
          <p className={styles["notification__message"]}>{message}</p>
        )}
      </div>
    </Modal>
  );
}
