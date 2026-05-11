import { useState, type ReactNode } from "react";
import { ToastContext } from "./ToastContext"; 

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  function showToast(message: string) {
    setMessage(message);
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {visible && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-xl shadow-xl z-50">
          {message}
        </div>
      )}
    </ToastContext.Provider>
  );
}