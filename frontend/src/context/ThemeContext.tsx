import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ThemeContext,
} from "./theme-context";

interface ThemeProviderProps {

  children: React.ReactNode;
}

export function ThemeProvider({
  children,
}: ThemeProviderProps) {

  const [dark, setDark] =
    useState(() => {

      return localStorage.getItem(
        "theme"
      ) !== "light";
    });

  useEffect(() => {

    if (dark) {

      document.documentElement
        .classList.add("dark");

      localStorage.setItem(
        "theme",
        "dark"
      );

    } else {

      document.documentElement
        .classList.remove("dark");

      localStorage.setItem(
        "theme",
        "light"
      );
    }

  }, [dark]);

  function toggleTheme() {

    setDark((prev) => !prev);
  }

  const value = useMemo(() => ({
      dark,
      toggleTheme,
    }),
    [dark]
  );

  return (

    <ThemeContext.Provider
      value={value}
    >

      {children}

    </ThemeContext.Provider>
  );
}