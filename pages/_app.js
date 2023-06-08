import { useEffect } from "react";
import { appWithTranslation } from "next-i18next";
import AOS from "aos";
import RootLayout from "@/components/layouts/RootLayout";
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
