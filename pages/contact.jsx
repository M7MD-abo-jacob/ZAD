// CONTACT US page
// this is a static generated page
// should be build again if we change Contact Methods

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Head from "next/head";

// takes contactMethods returned from getStaticProps at the bottom
export default function ContactPage({ contactMethods }) {
  const { t } = useTranslation(["common", "contact"]);

  // meta data
  const headData = {
    title: `${t("common:brand")} | ${t("common:contact")}`,
    description: `${t("contact:contact_us")}`,
  };

  return (
    <>
      <Head>
        <title>{headData.title}</title>
        <meta name="description" content={headData.description} />
      </Head>
      <section id="contact-us" className="container mx-auto px-3">
        <h1 data-aos="zoom-in-up" className="text-5xl uppercase">
          {t("common:contact")}
        </h1>
        <p data-aos="zoom-in" style={{ whiteSpace: "pre-line" }}>
          {t("contact:contact_p")}
        </p>
        <br />

        <h2 data-aos="zoom-in-up" className="text-2xl mb-3 capitalize">
          {t("contact:contact_us")}
        </h2>
        <ul className="rounded-lg overflow-hidden divide-y divide-primary ">
          {contactMethods.map((method) => (
            <li
              data-aos="zoom-in-up"
              key={method.title}
              className="flex flex-col gap-2 md:flex-row items-stretch bg-accent-semitransparent"
            >
              <h3 className="text-3xl flex flex-1 text-center bg-neutral-500 bg-opacity-25 p-3 justify-center items-center">
                {t(`contact:${method.title}`)}
              </h3>
              <div className="flex flex-col items-center justify-center flex-1 w-full rounded-b-lg md:rounded-none md:rounded-e-lg text-center md:text-start ">
                <ul className="w-full text-center">
                  {method.links.map((link, index) => (
                    <li key={link.title}>
                      <Link
                        data-aos="jiggle"
                        data-aos-delay={index * 100}
                        href={link.href}
                        className="block w-1/2 mx-auto py-1 px-5 underline underline-offset-4"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export async function getStaticProps({ locale }) {
  // contact methods, static data for now!
  const contactMethods = require("../data/contactMethods");
  return {
    props: {
      contactMethods,
      ...(await serverSideTranslations(locale, ["common", "contact"])),
    },
  };
}
