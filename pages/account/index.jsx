import Button from "@/components/shared/Button";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { TbReportMoney } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
import Link from "next/link";

export default function Account() {
  // TODO: log out
  const { t } = useTranslation(["common", "account"]);
  const [showActions, setShowActions] = useState(false);

  const headData = {
    title: `${t("common:brand")} | ${t("common:account")}`,
    description: `${t("account:desc")}`,
  };

  return (
    <>
      <Head>
        <title>{headData.title}</title>
        <meta name="description" content={headData.description} />
      </Head>
      <section id="details" className="container mx-auto px-3 md:px-5">
        <dl className="divide-y divide-gray-600 dark:divide-gray-400">
          <div className="flex flex-col md:flex-row md:justify-between md:flex-auto max-w-2xl mx-auto py-3">
            <dt className="mb-1 md:text-lg text-muted">{t("name")}</dt>
            <dd className="text-lg font-semibold">mohammad</dd>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between max-w-2xl mx-auto py-3">
            <dt className="mb-1 md:text-lg text-muted">{t("username")}</dt>
            <dd className="text-lg font-semibold">زاد</dd>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between max-w-2xl mx-auto py-3">
            <dt className="mb-1 md:text-lg text-muted">
              {t("accout:paid_until")}
            </dt>
            <dd className="text-lg font-semibold">2023-09-15</dd>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between max-w-2xl mx-auto py-3">
            <dt className="mb-1 md:text-lg text-muted">{t("accout:speed")}</dt>
            <dd className="text-lg font-semibold">1 Mb/s</dd>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between max-w-2xl mx-auto py-3">
            <dt className="mb-1 md:text-lg text-muted">{t("accout:phone")}</dt>
            <dd className="text-lg font-semibold">963991234567</dd>
          </div>
        </dl>
      </section>
      <section id="actions">
        {/* {showActions && ( */}
        <>
          <div
            onClick={() => {
              setShowActions((prev) => !prev);
            }}
            className={`${
              showActions ? "block" : "hidden"
            } bg-zinc-500 backdrop-blur-sm bg-opacity-30 fixed inset-0 h-screen w-screen`}
          >
            hi
          </div>
        </>
        {/* )} */}
        <div className={`group/btns ${showActions ? "shown" : "notshown"}`}>
          <Button
            onClick={() => {
              setShowActions((prev) => !prev);
            }}
            className="fixed bottom-4 left-8 shadow-md rounded-full px-2 py-2"
          >
            <FiSettings className="text-2xl font-bold group-[.shown]/btns:rotate-180 transition-transform duration-1000" />
          </Button>
          <div
            className={`fixed grid bottom-16 left-8 group my-5 transition-all duration-1000`}
            style={{
              gridTemplateRows: `${showActions ? "1fr" : "0fr"}`,
            }}
          >
            <div className="overflow-hidden flex flex-col gap-6">
              <Link
                href="/change-password"
                className="group/link flex gap-2 items-center "
              >
                <Button className="group-hover/link:bg-accent group-hover/link:shadow-lg group-hover/link:shadow-accent">
                  <RiLockPasswordLine className="text-2xl font-bold" />
                </Button>
                <span className="text-lg font-bold">
                  {t("account:change_password")}
                </span>
              </Link>
              <Link
                href="/financial-report"
                className="group/link flex gap-2 items-center"
              >
                <Button className="group-hover/link:bg-accent group-hover/link:shadow-lg group-hover/link:shadow-accent">
                  <TbReportMoney className="text-2xl font-bold" />
                </Button>
                <span className="text-lg font-bold">
                  {t("account:financial_report")}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "account"])),
    },
  };
}
