import { appWithTranslation } from "next-i18next";
import RootLayout from "@/components/layouts/RootLayout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({}); // Initialize Animate On Scroll
  }, []);
  return (
    <>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default appWithTranslation(App);
