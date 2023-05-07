import { appWithTranslation } from "next-i18next";
import RootLayout from "@/components/layouts/RootLayout";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default appWithTranslation(App);
