// support / customer service page
// static page, no data required

import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MdPlaylistAdd, MdPlaylistAddCheck } from "react-icons/md";
import TicketForm from "@/components/shared/TicketForm";
import Button from "@/components/shared/Button";

export default function SupportPage() {
  const { t } = useTranslation(["common", "support"]);

  // meta data
  const headData = {
    title: `${t("common:brand")} | ${t("common:support")}`,
    description: `${t("support:support_header")}`,
  };

  return (
    <>
      <Head>
        <title>{headData.title}</title>
        <meta name="description" content={headData.description} />
      </Head>
      {/* -------------------- TOP SECTION -------------------- */}
      <section id="support-hero" className="container mx-auto px-4">
        <h1 data-aos="fade-up-left" className="text-5xl mb-2 uppercase">
          {t("common:support")}
        </h1>
        <h2 data-aos="fade-up-left" className="text-2xl mb-1">
          {t("support:support_header")}
        </h2>
        <p data-aos="zoom-in">{t("common:subtitle")}</p>
        <hr className="my-4" />
      </section>

      <div className="flex flex-col md:flex-row justify-between container mx-auto px-4">
        {/* -------------------- CHECK CARD STATUS SECTION -------------------- */}
        <section id="card-status" className="w-full mt-4 px-4">
          <h2 data-aos="zoom-in-up" className="text-2xl mb-2 capitalize">
            {/* TODO: css icon colors */}
            <MdPlaylistAddCheck className="inline-block text-primary text-5xl me-2" />
            <span>{t("support:status_header")}</span>
          </h2>
          <p data-aos="zoom-in" className="mb-2">
            {t("support:status_descriptions")}
          </p>
          <TicketForm />
        </section>

        <hr />

        {/* -------------------- CREATE NEW CARD SECTION -------------------- */}
        <section id="new-card" className="w-full mt-4 px-4">
          <h2 data-aos="zoom-in-up" className="text-2xl mb-2 capitalize">
            <MdPlaylistAdd className="inline-block text-primary text-5xl me-2" />
            <span>{t("support:new_header")}</span>
          </h2>
          <p data-aos="zoom-in" className="mb-1">
            {t("support:new_descriptions")}
          </p>
          <Link
            data-aos="zoom-in-up"
            href="/support/new"
            className="inline-block"
          >
            <Button>{t("support:new_header")}</Button>
          </Link>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "support"])),
    },
  };
}
