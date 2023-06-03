import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument({ __NEXT_DATA__: { locale } }) {
  return (
    <Html dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
      <Head>
        <link
          rel="shortcut icon"
          href="http://www.zad.sy/images/zad/favicon.ico"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Changa:wght@400;500;600;700&family=El+Messiri:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        /> */}
        {/* <link rel="icon" href="/favicon.svg" /> */}
        <meta
          name="keywords"
          content="zad, zad isp, isp, syria, internet, adsl"
        />
        <meta name="author" content="Mohammad Kikhia" />
        <meta name="robots" content="index,follow" />
        <meta property="og:site_name" content="zad" />
        <meta property="og:url" content="https://zad.sy/" />
      </Head>
      <body className="transition-all text-lg">
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function () {
              // getting and setting light / dark theme
              function setTheme(newTheme) {
                window.__theme = newTheme;
                if (newTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (newTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                }
                window.dispatchEvent(new Event("themechange"));
                // Dispatch the themechange event for listeners
              }
              
              var preferredTheme;
    
              try {
                preferredTheme = localStorage.getItem('theme');
              } catch (err) { }
              
              window.__setPreferredTheme = function(newTheme) {
                preferredTheme = newTheme;
                setTheme(newTheme);
                try {
                  localStorage.setItem('theme', newTheme);
                } catch (err) { }
              };
              
              var initialTheme = preferredTheme;
              var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
              if (!initialTheme) {
                initialTheme = darkQuery.matches ? 'dark' : 'light';
              }
              setTheme(initialTheme);
    
              darkQuery.addEventListener('change', function (e) {
                if (!preferredTheme) {
                  setTheme(e.matches ? 'dark' : 'light');
                }
              });
            })();
              `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
