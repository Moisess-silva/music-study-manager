import {
  useState,
} from "react";

import {
  SidebarContext,
} from "./sidebar-context";

interface SidebarProviderProps {

  children: React.ReactNode;
}

export function SidebarProvider({
  children,
}: SidebarProviderProps) {

  const [isOpen, setIsOpen] =
    useState(false);

  function toggleSidebar() {

    setIsOpen((prev) => !prev);
  }

  return (

    <SidebarContext.Provider
      value={{
        isOpen,
        toggleSidebar,
      }}
    >

      {children}

    </SidebarContext.Provider>
  );
}