import React from "react";

import Toast from "../Toast";
import { useToast } from "../ToastProvider";

import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, removeToast } = useToast();

  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} dismiss={() => removeToast(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
