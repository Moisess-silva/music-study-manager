import React from "react";

import ReactDOM from "react-dom/client";

import "./index.css";

import {
  Router,
} from "./routes";

import {
  ThemeProvider,
} from "./context/ThemeContext";

import {
  SidebarProvider,
} from "./context/SidebarContext";

import {
  ErrorBoundary,
} from "./components/ErrorBoundary";

import {
  ToastProvider,
} from "./context/ToastProvider";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(

  <React.StrictMode>

    <ErrorBoundary>

      <ThemeProvider>

        <SidebarProvider>

          <ToastProvider>

            <Router />

          </ToastProvider>

        </SidebarProvider>

      </ThemeProvider>

    </ErrorBoundary>

  </React.StrictMode>
);