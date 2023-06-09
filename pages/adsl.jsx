// static page, SSG
// needs to be rebuilt when data changes

import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MdStarBorderPurple500 } from "react-icons/md";
import { BsFiletypePdf } from "react-icons/bs";
import Table from "@/components/shared/Table";
import Button from "@/components/shared/Button";

export default function Adsl({
  adslSpecs,
  limitedSubs,
  recharge,
  routerSettings,
}) {
  const { t } = useTranslation(["common", "adsl"]);

  // meta data
  const headData = {
    title: `${t("common:brand")} | ${t("common:adsl")}`,
    description: `${t("adsl:adsl")}`,
  };

  return (
    <>
      <Head>
        <title>{headData.title}</title>
        <meta name="description" content={headData.description} />
      </Head>
      <section id="details" className="container mx-auto px-3 md:px-5">
        <h1 data-aos="zoom-in-up" className="text-5xl mb-4 uppercase">
          {t("common:adsl")}
        </h1>
        {/* TODO: break lines */}
        <p data-aos="zoom-in-up" style={{ whiteSpace: "pre-line" }}>
          {t("adsl:main_p")}
        </p>
        <ul className="my-2">
          {adslSpecs.map((spec, index) => {
            return (
              <li
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={index * 150}
              >
                <MdStarBorderPurple500 className="inline text-primary me-2 text-xl mb-1" />
                <span>{t(`adsl:${spec}`)}</span>
              </li>
            );
          })}
        </ul>
        <Link
          data-aos="fade-up"
          href="assets/ZAD-services.pdf"
          download
          className="inline-block mt-5"
        >
          <Button className="font-bold">
            <BsFiletypePdf className="group-hover/link:animate-heart-beat text-2xl" />
            {t("adsl:details")}
          </Button>
        </Link>
      </section>
      <br />

      {/* -------------------- limited-download subscriptions -------------------- */}
      <section id="pricing" className="container mx-auto px-3 md:px-5">
        <h1 data-aos="zoom-in-up" className="text-5xl mb-4 uppercase">
          {t("adsl:limited")}
        </h1>
        <Table data={limitedSubs} caption={t("adsl:limited")} />
      </section>
      <br />

      {/* -------------------- recharge balance -------------------- */}
      <section id="recharge" className="container mx-auto px-3 md:px-5">
        <h1 data-aos="zoom-in-up" className="text-5xl mb-4 uppercase">
          {t("adsl:recharge")}
        </h1>
        <Table data={recharge} caption={t("adsl:recharge")} />
      </section>
      <br />

      {/* -------------------- router setings -------------------- */}
      <section id="router-settings" className="container mx-auto px-3 md:px-5">
        <h1 data-aos="zoom-in-up" className="text-5xl mb-4 uppercase">
          {t("adsl:router_settings")}
        </h1>
        <Table data={routerSettings} caption={t("adsl:router_settings")} />
      </section>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const adslSpecs = require("../data/adslSpecs");
  const limitedSubs = require("../data/limitedSubs");
  const recharge = require("../data/recharge");
  const routerSettings = require("../data/routerSettings");

  return {
    props: {
      adslSpecs,
      limitedSubs,
      recharge,
      routerSettings,
      ...(await serverSideTranslations(locale, ["common", "adsl"])),
    },
  };
}
