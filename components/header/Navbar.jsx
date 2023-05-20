import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import Image from "next/image";
import { CgClose, CgMenu } from "react-icons/cg";
import Button from "../shared/Button";
import { links } from "@/data/links";
import logoImg from "@/public/assets/zad-logo.png";
import { BsGeoAlt } from "react-icons/bs";

export default function Navbar() {
  const { t } = useTranslation();
  const { pathname, query, asPath, locale, replace } = useRouter();
  const [expanded, setExpanded] = useState(false);
  const [darkChecked, setDarkChecked] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDarkChecked(window.__theme == "dark");
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50  shadow-lg">
      {/* -------------------- TOP BAR -------------------- */}
      <div className=" mx-auto bg-gray-50 dark:bg-gray-950">
        <div className="container flex items-center justify-between w-full px-4 py-2 lg:py-3 bg-gray-50 dark:bg-gray-950 mx-auto">
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
              className="hidden lg:inline-flex items-center p-2 ms-0 md:ms-3 text-4xl text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 "
              onClick={() => {
                replace({ pathname, query }, asPath, {
                  locale: locale === "ar" ? "en" : "ar",
                });
                document.documentElement.dir = locale === "ar" ? "ltr" : "rtl";
              }}
            >
              {locale === "ar" ? "en" : "ar"}
            </button>
            {/* -------------------- THEME BTN -------------------- */}
            <button
              onClick={() => {
                setDarkChecked((prev) => !prev);
                const newTheme = window.__theme === "dark" ? "light" : "dark";
                window.__setPreferredTheme(newTheme);
              }}
              type="button"
              className="inline-flex items-center p-2 ms-0 md:ms-3 text-4xl text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
              {darkChecked ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            </button>
            {/* -------------------- ACCOUNT BTN -------------------- */}
            <button
              onClick={() => setExpanded((prev) => !prev)}
              type="button"
              className="inline-flex items-center p-2 ms-0 md:ms-3 text-4xl text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
              <RxPerson />
            </button>

            {/* -------------------- MENU BTN -------------------- */}
            <button
              onClick={() => setExpanded((prev) => !prev)}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ms-0 md:ms-3 text-4xl text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
              {expanded ? <CgClose /> : <CgMenu />}
            </button>
          </div>
        </div>
      </div>

      <hr className="hidden lg:block dark:bg-gray-50 bg-gray-950" />

      {/* -------------------- BOTTOM NAV BAR / DROPDOWN on small screens -------------------- */}
      <div
        className={`${
          expanded ? "w-full" : "hidden"
        } lg:block mx-auto w-full h-screen lg:h-auto backdrop-blur-sm lg:bg-gray-50 dark:lg:bg-gray-950`}
        // bg-white dark:bg-gray-950
        onClick={() => {
          setExpanded(false);
        }}
      >
        {/* -------------------- personal info if logged in -------------------- */}
        <div
          id="personal-account"
          className="container mx-auto block lg:hidden w-full rounded-lg px-4 py-3 bg-gray-50 dark:bg-gray-950 text-center"
          onClick={(e) => {
            // e.stopPropagation();
            // e.preventDefault();
          }}
        >
          {/* TODO: add lgin logic and change static data to user */}
          {true ? (
            <>
              <div className="flex  justify-center max-h-40 w-fit">
                <div className="flex justify-center w-1/2">
                  <img
                    className="w-full md:w-1/2 object-contain aspect-square"
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="me"
                  />
                </div>
                <div className="flex flex-col justify-around m-2">
                  <h2 className="fs-3 fw-bold">username</h2>
                  <h3 className="fs-6">@ username</h3>
                  <div className="fs-6">
                    <BsGeoAlt className="inline-block me-1" />
                    Damascus
                  </div>
                </div>
                {/* -------------------- LANGUAGE BUTTON -------------------- */}
                <div className="flex flex-col justify-around m-2">
                  <Button
                    className="inline-flex justify-self-end items-center p-2 ms-0 md:ms-3 text-4xl text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 disabled:bg-blue-300 dark:disabled:bg-gray-400"
                    disabled={locale === "en" ? true : false}
                    onClick={() => {
                      replace({ pathname, query }, asPath, {
                        locale: "en",
                      });
                      document.documentElement.dir = "ltr";
                    }}
                  >
                    en
                  </Button>
                  <Button
                    className="inline-flex justify-self-end items-center p-2 ms-0 md:ms-3 text-4xl text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 disabled:bg-blue-300 dark:disabled:bg-blue-300"
                    disabled={locale === "ar" ? true : false}
                    onClick={() => {
                      replace({ pathname, query }, asPath, {
                        locale: "ar",
                      });
                      document.documentElement.dir = "rtl";
                    }}
                  >
                    ar
                  </Button>
                </div>
              </div>
              <hr className="mb-3" />
            </>
          ) : (
            <div className="flex gap-3 md:gap-5 justify-center">
              <Link
                // onClick={() => setExpanded(false)}
                // href="/auth/signin"
                href="#"
                className="w-full md:w-1/2 mx-auto"
              >
                <Button className="w-full justify-center">{t("login")}</Button>
              </Link>
              {/* <Link
                // onClick={() => setExpanded(false)}
                // href="/auth/register"
                href="#"
                className="w-1/2 mx-auto"
              >
                <Button className="w-full justify-center">
                  {t("sign_up")}
                </Button>
              </Link> */}
            </div>
          )}
        </div>
        {/* -------------------- MAIN NAVIGATION LIST -------------------- */}
        <ul className="container mx-auto font-medium flex flex-col lg:justify-between text-center p-4 lg:p-0 mt-0 border border-gray-100 bg-gray-50 dark:bg-gray-950 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <li
                key={link.title}
                // onClick={() => setExpanded(false)}
                className="w-full text-center"
              >
                <Link
                  href={link.href}
                  className={`flex lg:block w-full items-center lg:text-center gap-4 py-2 ps-3 pe-4 rounded lg:py-2 lg:px-0 ${
                    link.href === pathname
                      ? " text-white bg-primary lg:bg-transparent lg:text-primary dark:text-white lg:dark:text-primary font-bold"
                      : "text-gray-900 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-accent dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
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
    </nav>
  );
}
