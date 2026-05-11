import type {
  ReactNode,
} from "react";

import {
  Sidebar,
} from "../../components/Sidebar/Sidebar";

import {
  Header,
} from "../../components/Header";

interface Props {

  children: ReactNode;
}

export function AppLayout({
  children,
}: Props) {

  return (

    <div
      className="
        min-h-screen
        bg-zinc-950
        text-white
        flex
      "
    >

      <Sidebar />

      <div
        className="
          flex-1
          flex
          flex-col
          md:ml-64
        "
      >

        <Header />

        <main
          className="
            flex-1
            p-4
            md:p-6
          "
        >

          {children}

        </main>

      </div>

    </div>
  );
}