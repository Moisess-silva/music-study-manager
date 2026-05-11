import { createContext } from "react";

export interface ToastContextData {
  showToast: (message: string) => void;
}

export const ToastContext = createContext<ToastContextData>({} as ToastContextData);