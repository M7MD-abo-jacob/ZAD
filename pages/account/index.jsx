import Button from "@/components/shared/Button";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useState } from "react";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { TbReportMoney } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
import Link from "next/link";

export default function Account() {
  const { t } = useTranslation(["common", "account"]);
  const [showActions, setShowActions] = useState(false);

  const headData = {
    title: `${t("common:brand")} | ${t("common:account")}`,
    description: `${t("account:desc")}`,
  };

  return (
    <>
      {/* -------------------- HEAD -------------------- */}
      <Head>
        <title>{headData.title}</title>
        <meta name="description" content={headData.description} />
      </Head>
      {/* -------------------- ACCOUNT DETAILS SECTION -------------------- */}
      <section id="details" className="container mx-auto px-3 md:px-5">
        <dl className="divide-y divide-gray-600 dark:divide-gray-400">
          <div className="flex flex-col md:flex-row md:justify-between md:flex-auto max-w-2xl mx-auto py-3">
            <dt className="mb-1 md:text-lg text-muted">{t("account:name")}</dt>
            <dd className="text-lg font-semibold">mohammad</dd>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between max-w-2xl mx-auto py-3">
            <dt className="mb-1 md:text-lg text-muted">
              {t("account:username")}
            </dt>
            <dd className="text-lg font-semibold">زاد</dd>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between max-w-2xl mx-auto py-3">
            <dt className="mb-1 md:text-lg text-muted">
              {t("account:paid_until")}
            </dt>
            <dd className="text-lg font-semibold">2023-09-15</dd>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between max-w-2xl mx-auto py-3">
            <dt className="mb-1 md:text-lg text-muted">{t("account:speed")}</dt>
            <dd className="text-lg font-semibold">1 Mb/s</dd>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between max-w-2xl mx-auto py-3">
            <dt className="mb-1 md:text-lg text-muted">{t("account:phone")}</dt>
            <dd className="text-lg font-semibold">963991234567</dd>
          </div>
        </dl>
      </section>
      {/* -------------------- ACTIONS FLOATING BUTTON -------------------- */}
      <section id="actions">
        <div
          onClick={() => {
            setShowActions((prev) => !prev);
          }}
          className={`${
            showActions ? "block" : "hidden"
          } bg-zinc-500 backdrop-blur-sm bg-opacity-30 fixed inset-0 h-screen w-screen`}
        ></div>
        <div className={`group/btns ${showActions ? "shown" : "notshown"}`}>
          <Button
            onClick={() => {
              setShowActions((prev) => !prev);
            }}
            className="fixed bottom-4 start-8 shadow-md rounded-full px-2 py-2"
          >
            <FiSettings className="text-2xl font-bold group-[.shown]/btns:rotate-180 transition-transform duration-1000" />
          </Button>
          <div
            className={`fixed grid bottom-16 start-8 group my-5 transition-all duration-1000`}
            style={{
              gridTemplateRows: `${showActions ? "1fr" : "0fr"}`,
            }}
          >
            <div className="overflow-hidden flex flex-col gap-6">
              {/* -------------------- change password -------------------- */}
              <Link
                href="/change-password"
                className="group/link flex gap-2 items-center"
              >
                <Button className="group-hover/link:bg-accent group-hover/link:shadow-lg group-hover/link:shadow-accent">
                  <RiLockPasswordLine className="group-hover/link:animate-heart-beat text-2xl font-bold" />
                </Button>
                <span className="text-lg font-bold">
                  {t("account:change_password")}
                </span>
              </Link>
              {/* -------------------- financial report -------------------- */}
              <Link
                href="/financial-report"
                className="group/link flex gap-2 items-center"
              >
                <Button className="group-hover/link:bg-accent group-hover/link:shadow-lg group-hover/link:shadow-accent">
                  <TbReportMoney className="group-hover/link:animate-heart-beat text-2xl font-bold" />
                </Button>
                <span className="text-lg font-bold">
                  {t("account:financial_report")}
                </span>
              </Link>
              {/* -------------------- log out -------------------- */}
              <Link
                href="/account"
                className="group/link flex gap-2 items-center"
              >
                <Button className="group-hover/link:bg-accent group-hover/link:shadow-lg group-hover/link:shadow-accent">
                  <FiLogOut className="group-hover/link:animate-heart-beat text-2xl font-bold" />
                </Button>
                <span className="text-lg font-bold">{t("account:logout")}</span>
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
