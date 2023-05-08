import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Image from "next/image";
import Button from "../shared/Button";
import { links } from "@/data/links";
import logoImg from "@/public/assets/zad-logo.png";

export default function Navbar() {
  const { t } = useTranslation();
  const { pathname } = useRouter();
  const [expanded, setExpanded] = useState(false);
  const [darkChecked, setDarkChecked] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDarkChecked(window.__theme == "dark");
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-50 dark:bg-gray-950 shadow-lg">
      <div className=" mx-auto">
        <div className="flex items-center justify-between w-full p-4 bg-gray-50 dark:bg-gray-950 container mx-auto">
          <Link href="https://zad.sy/" className="flex items-center">
            <Image
              src={logoImg}
              className="me-3"
              alt={t("brand")}
              width={130}
            />
          </Link>
          <div className="flex items-center">
            <Button
              onClick={() => {
                setDarkChecked((prev) => !prev);
                const newTheme = window.__theme === "dark" ? "light" : "dark";
                window.__setPreferredTheme(newTheme);
              }}
            >
              {darkChecked ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            </Button>
            <button
              onClick={() => setExpanded((prev) => !prev)}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <hr className="hidden lg:block" />

        <div
          //  lg:w-screen
          className={`${
            expanded ? "w-full" : "hidden"
          } lg:block bg-white dark:bg-gray-950 border-gray-200 mx-auto w-full`}
        >
          <ul
            className="container mx-auto font-medium flex flex-col lg:justify-between text-center p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0"
            // dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700
          >
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <li
                  key={link.title}
                  onClick={() => setExpanded(false)}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    className={`flex lg:block w-full items-center lg:text-center gap-4 py-2 ps-3 pe-4 rounded lg:py-2 lg:px-0 ${
                      link.href === pathname
                        ? " text-white bg-blue-700 lg:bg-transparent lg:text-blue-700 dark:text-white lg:dark:text-blue-500 font-bold"
                        : "text-gray-900 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700  dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    }`}
                  >
                    <Icon className="block lg:hidden" />
                    <span>{t(link.title)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
