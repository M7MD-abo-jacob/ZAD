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
import { RxPerson } from "react-icons/rx";
import { CgClose, CgMenu } from "react-icons/cg";
import Button from "../shared/Button";
import { links } from "@/data/links";
import logoImg from "@/public/assets/zad-logo.png";

export default function Navbar() {
  const { t } = useTranslation();
  const { locales } = useRouter();
  const { pathname, query, asPath, locale, replace } = useRouter();
  const [expanded, setExpanded] = useState(false);
  const [darkChecked, setDarkChecked] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDarkChecked(window.__theme == "dark");
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md shadow-zinc-400 dark:shadow-zinc-700">
      {/* -------------------- TOP BAR -------------------- */}
      <div className=" mx-auto bg-gray-50 dark:bg-zinc-950">
        <div className="container flex items-center justify-between w-full px-4 py-2 bg-gray-50 dark:bg-zinc-950 mx-auto">
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
              <span className="group-hover/btn:scale-125 transition-all">
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
              // <button
              className="group/btn inline-flex items-center p-2 ms-0 md:ms-3 text-4xl text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
              {/* <RxPerson className="group-hover/btn:scale-125 duration-200" /> */}
              <MdOutlinePerson4 className="group-hover/btn:scale-125 duration-200" />
              {/* </button> */}
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
            {/* -------------------- personal info if logged in -------------------- */}
            <div
              id="personal-account"
              className="container mx-auto block lg:hidden w-full rounded-lg px-4 py-3 bg-gray-50 dark:bg-zinc-950 text-center"
              onClick={(e) => {
                // e.stopPropagation();
                // e.preventDefault();
              }}
            >
              {/* TODO: add lgin logic and change static data to user */}
              {true ? (
                <>
                  <div className="flex w-full gap-2 justify-center items-center max-h-40">
                    {/* <div className="flex justify-center w-1/2">
                      <img
                        className="w-full md:w-1/2 object-contain aspect-square"
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="me"
                      />
                    </div>
                    <div className="flex flex-col justify-around m-2">
                      <h2 className="fs-3 fw-bold">username</h2>
                      <h3 className="fs-6">@username</h3>
                      <div className="fs-6">
                        <BsGeoAlt className="inline-block me-1" />
                        Damascus
                      </div>
                    </div> */}
                    {/* -------------------- LANGUAGE BUTTON -------------------- */}
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
                    <Button className="w-full justify-center">
                      {t("login")}
                    </Button>
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
            <ul className="container mx-auto font-medium flex flex-col lg:justify-between text-center p-4 lg:p-0 mt-0 border border-gray-100 bg-gray-50 dark:bg-zinc-950 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0">
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
        </div>
      </div>
    </nav>
  );
}
