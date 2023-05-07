import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import contactMethods from "@/data/contactMethods";

export default function ContactPage() {
  const { t } = useTranslation(["common", "contact"]);

  return (
    <section id="contact-us" className="container">
      <p>{t("contact:contact_p")}</p>
      <br />

      <h2 className="text-2xl mb-3">{t("contact:contact_us")}</h2>
      <ul>
        {contactMethods.map((method) => (
          <li
            key={method.title}
            className="flex rounded-lg mb-6 flex-col md:flex-row items-stretch bg-neutral-500 bg-opacity-25"
          >
            <h3 className="text-3xl flex flex-1 text-center p-3 justify-center items-center">
              {t(`contact:${method.title}`)}
            </h3>
            <div className="flex flex-col items-center justify-center flex-1 w-full rounded-b-lg md:rounded-none md:rounded-e-lg text-center md:text-start bg-neutral-500 bg-opacity-25">
              {method.links.map((link) => (
                <Link href={link.href} key={link.title} className="p-1">
                  {link.title}
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "contact"])),
    },
  };
}
