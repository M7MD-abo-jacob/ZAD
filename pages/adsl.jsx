import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MdStarBorderPurple500 } from "react-icons/md";
import { BsFiletypePdf } from "react-icons/bs";
import Table from "@/components/shared/Table";
import Button from "@/components/shared/Button";
import adslSpecs from "@/data/adslSpecs";
import limitedSubs from "@/data/limitedSubs";
import recharge from "@/data/recharge";
import routerSettings from "@/data/routerSettings";

export default function Adsl() {
  const { t } = useTranslation(["common", "adsl"]);

  return (
    <>
      <section id="details" className="container mx-auto px-3 md:px-5">
        <h1 className="text-5xl mb-4 uppercase">{t("common:adsl")}</h1>
        {/* TODO: break lines */}
        <p>{t("adsl:main_p")}</p>
        <ul className="my-2">
          {adslSpecs.map((spec, index) => {
            return (
              <li key={index}>
                <MdStarBorderPurple500 className="inline text-primary me-2 text-xl mb-1" />
                <span>{t(`adsl:${spec}`)}</span>
              </li>
            );
          })}
        </ul>
        <a
          href="assets/ZAD-services.pdf"
          download
          className="inline-block mt-5"
        >
          <Button className="font-bold">
            <BsFiletypePdf className="text-2xl" />
            {t("adsl:details")}
          </Button>
        </a>
      </section>
      <br />

      {/* -------------------- limited-download subscriptions -------------------- */}
      <section id="pricing" className="container mx-auto px-3 md:px-5">
        <h1 className="text-5xl mb-4 uppercase">{t("adsl:limited")}</h1>
        <Table data={limitedSubs} caption={t("adsl:limited")} />
      </section>
      <br />

      {/* -------------------- recharge balance -------------------- */}
      <section id="recharge" className="container mx-auto px-3 md:px-5">
        <h1 className="text-5xl mb-4 uppercase">{t("adsl:recharge")}</h1>
        <Table data={recharge} caption={t("adsl:recharge")} />
      </section>
      <br />

      {/* -------------------- router setings -------------------- */}
      <section id="router-settings" className="container mx-auto px-3 md:px-5">
        <h1 className="text-5xl mb-4 uppercase">{t("adsl:router_settings")}</h1>
        <Table data={routerSettings} caption={t("adsl:router_settings")} />
      </section>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "adsl"])),
    },
  };
}
