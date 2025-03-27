import React from "react";

import useEscapeKey from "../../hooks/useEscapeKey";

const ToastContext = React.createContext();

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(message, variant) {
    setToasts((toasts) => [
      ...toasts,
      { message, variant, id: crypto.randomUUID() },
    ]);
  }

  function removeToast(id) {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  }

  function resetToasts() {
    setToasts([]);
  }

  useEscapeKey(resetToasts);

  const value = {
    toasts,
    addToast,
    removeToast,
    resetToasts,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
