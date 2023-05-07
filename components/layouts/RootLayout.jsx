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
      <main className="mx-auto mt-24 lg:mt-32">{children}</main>
      <footer className="text-center md:text-start mt-9 pt-10 pb-20 bg-gradient">
        <Footer />
      </footer>
      <ScrollToTopBtn />
    </>
  );
}
