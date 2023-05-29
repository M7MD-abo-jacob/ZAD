import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdOutlinePerson4,
} from "react-icons/md";
import { CgClose, CgMenu } from "react-icons/cg";
import Button from "../shared/Button";
import { links } from "@/data/links";
import logoImg from "@/public/assets/zad-logo.png";

export default function Navbar() {
  const { t } = useTranslation();
  const { pathname, query, asPath, locale, locales, replace } = useRouter();
  const [expanded, setExpanded] = useState(false);

  const [darkChecked, setDarkChecked] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDarkChecked(window.__theme == "dark");
    }
  }, []);

  return (
    <nav className="fixed top-0 start-0 w-full z-50 shadow-md shadow-zinc-400 dark:shadow-zinc-700">
      {/* -------------------- TOP BAR -------------------- */}
      <div className=" mx-auto bg-gray-50 dark:bg-zinc-950">
        <div className="container flex items-center justify-between w-full px-4 py-0.5 bg-gray-50 dark:bg-zinc-950 mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              src={logoImg}
              className="me-3"
              alt={t("brand")}
              width={140}
            />
          </Link>
          <div className="flex items-center">
            {/* -------------------- LANGUAGE BTN -------------------- */}
            <button
              type="button"
              className="group/btn hidden lg:inline-flex items-center p-2 ms-0 md:ms-3 text-4xl font-medium text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 "
              onClick={() => {
                replace({ pathname, query }, asPath, {
                  locale: locale === "ar" ? "en" : "ar",
                });
                document.documentElement.dir = locale === "ar" ? "ltr" : "rtl";
              }}
            >
              <span className="group-hover/btn:animate-heart-beat">
                {locale === "ar" ? "en" : "ar"}
              </span>
            </button>
            {/* -------------------- DARK THEME BTN -------------------- */}
            <button
              onClick={() => {
                setDarkChecked((prev) => !prev);
                const newTheme = window.__theme === "dark" ? "light" : "dark";
                window.__setPreferredTheme(newTheme);
              }}
              type="button"
              className="group/btn inline-flex items-center p-2 ms-0 md:ms-3 text-4xl text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              {darkChecked ? (
                <MdOutlineLightMode className="group-hover/btn:animate-spin-slow" />
              ) : (
                <MdOutlineDarkMode className="group-hover/btn:animate-wiggle" />
              )}
            </button>
            {/* -------------------- ACCOUNT BTN -------------------- */}
            <Link
              href="/account"
              className="group/btn inline-flex items-center p-2 ms-0 md:ms-3 text-4xl text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
              <MdOutlinePerson4 className="group-hover/btn:scale-125 duration-200" />
            </Link>

            {/* -------------------- MENU BTN -------------------- */}
            <button
              onClick={() => setExpanded((prev) => !prev)}
              data-collapse-toggle="navbar-default"
              type="button"
              className="group/btn inline-flex items-center p-2 ms-0 md:ms-3 text-4xl text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
              {expanded ? (
                <CgClose className="group-hover/btn:animate-wiggle" />
              ) : (
                <CgMenu className="group-hover/btn:scale-125 duration-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      <hr className="hidden lg:block dark:bg-gray-50 bg-zinc-950" />

      {/* -------------------- BOTTOM NAV BAR / DROPDOWN on small screens -------------------- */}
      <div
        className="grid lg:block"
        style={{
          gridTemplateRows: `${expanded ? "1fr" : "0fr"}`,
        }}
      >
        <div className="overflow-hidden">
          <div
            className="lg:block mx-auto w-full h-screen lg:h-auto backdrop-blur-sm lg:bg-gray-50 dark:lg:bg-zinc-950"
            onClick={() => {
              setExpanded(false);
            }}
          >
            {/* -------------------- LANGUAGE BUTTON -------------------- */}
            <div
              id="language-sm"
              className="container mx-auto block lg:hidden w-full rounded-lg px-4 py-3 bg-gray-50 dark:bg-zinc-950 text-center"
              onClick={(e) => {}}
            >
              <div className="flex flex-row w-full justify-around m-2">
                {locales.map((language) => (
                  <Button
                    key={language}
                    className="w-full mx-1 p-2 ms-0 md:ms-3 text-4xl text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 disabled:bg-blue-300 dark:disabled:bg-blue-300"
                    disabled={locale === language ? true : false}
                    onClick={() => {
                      replace({ pathname, query }, asPath, {
                        locale: language,
                      });
                      document.documentElement.dir =
                        language === "ar" ? "rtl" : "ltr";
                    }}
                  >
                    {language}
                  </Button>
                ))}
              </div>
            </div>

            {/* -------------------- MAIN NAVIGATION LIST -------------------- */}
            <ul className="container mx-auto font-medium flex flex-col lg:justify-between text-center p-4 lg:p-0 mt-0 border border-gray-100 bg-gray-50 dark:bg-zinc-950 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <li
                    key={link.title}
                    className={`w-full text-center ${
                      link.href === pathname
                        ? "lg:border-b-4 lg:border-primary"
                        : "hover:lg:border-b-4 hover:lg:border-accent"
                    }`}
                  >
                    <Link
                      href={link.href}
                      className={`flex lg:block w-full items-center lg:text-center gap-4 py-2 ps-3 pe-4 rounded lg:py-1 lg:px-0 dark:text-white lg:hover:text-accent transition-all duration-200 ${
                        link.href === pathname
                          ? "text-white bg-primary lg:bg-transparent lg:text-primary font-bold"
                          : "text-gray-900 lg:border-0 hover:bg-gray-300 dark:hover:bg-gray-700  "
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
      </div>
    </nav>
  );
}
