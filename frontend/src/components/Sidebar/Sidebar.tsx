import {
  useState,
} from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  Menu,
  X,
} from "lucide-react";

export function Sidebar() {

  const [open, setOpen] =
    useState(false);

  const location =
    useLocation();

  function isActive(
    path: string
  ) {

    return (
      location.pathname === path
    );
  }

  return (

    <>

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          md:hidden
          fixed
          top-4
          left-4
          z-50
          bg-zinc-800
          p-2
          rounded-lg
          text-white
        "
      >

        {
          open
            ? <X />
            : <Menu />
        }

      </button>

      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-64
          bg-zinc-900
          border-r
          border-zinc-800
          p-6
          z-40
          transition-transform
          duration-300

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }

          md:translate-x-0
        `}
      >

        <h1
          className="
            text-2xl
            font-bold
            text-white
            mb-8
          "
        >

          Music Study

        </h1>

        <nav
          className="
            flex
            flex-col
            gap-3
          "
        >

          <Link
            to="/dashboard"
            className={`
              p-3
              rounded-xl
              transition
              text-white

              ${
                isActive(
                  "/dashboard"
                )
                  ? "bg-zinc-700"
                  : "hover:bg-zinc-800"
              }
            `}
          >

            Dashboard

          </Link>

          <Link
            to="/trainings"
            className={`
              p-3
              rounded-xl
              transition
              text-white

              ${
                isActive(
                  "/trainings"
                )
                  ? "bg-zinc-700"
                  : "hover:bg-zinc-800"
              }
            `}
          >

            Treinos

          </Link>

          <Link
            to="/instruments"
            className={`
              p-3
              rounded-xl
              transition
              text-white

              ${
                isActive(
                  "/instruments"
                )
                  ? "bg-zinc-700"
                  : "hover:bg-zinc-800"
              }
            `}
          >

            Instrumentos

          </Link>

          <Link
            to="/repertoire"
            className={`
              p-3
              rounded-xl
              transition
              text-white

              ${
                isActive(
                  "/repertoire"
                )
                  ? "bg-zinc-700"
                  : "hover:bg-zinc-800"
              }
            `}
          >

            Repertório

          </Link>

        </nav>

      </aside>

    </>
  );
}