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
      <svg width="100%" height="100%" id="wave" viewBox="0 0 1440 390">
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 125.39285714285717,176.21428571428572 250.78571428571433,152.42857142857142 384,156 C 517.2142857142857,159.57142857142858 658.2499999999999,190.50000000000003 777,213 C 895.7500000000001,235.49999999999997 992.2142857142858,249.57142857142856 1099,246 C 1205.7857142857142,242.42857142857144 1322.892857142857,221.21428571428572 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          className="path-0"
        ></path>
      </svg>
      <footer className="text-center md:text-start pb-20 ">
        <Footer />
      </footer>
      <ScrollToTopBtn />
    </>
  );
}
