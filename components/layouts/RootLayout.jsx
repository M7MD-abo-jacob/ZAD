import React from "react";
import Navbar from "../header/Navbar";
import Footer from "./Footer";
import ScrollToTopBtn from "./ScrollToTopBtn";

export default function RootLayout({ children }) {
  return (
    <>
      <header className="">
        <Navbar />
      </header>
      <main className="mt-24 lg:mt-32">{children}</main>
      {/* -------------------- FOOTER WAVE SVG -------------------- */}
      <svg
        width="100%"
        height="100%"
        id="wave"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#F78DA7"></stop>
            <stop offset="95%" stop-color="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 125.39285714285717,176.21428571428572 250.78571428571433,152.42857142857142 384,156 C 517.2142857142857,159.57142857142858 658.2499999999999,190.50000000000003 777,213 C 895.7500000000001,235.49999999999997 992.2142857142858,249.57142857142856 1099,246 C 1205.7857142857142,242.42857142857144 1322.892857142857,221.21428571428572 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>
      <footer className="text-center md:text-start pb-20 ">
        <Footer />
      </footer>
      <ScrollToTopBtn />
    </>
  );
}
