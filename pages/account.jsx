import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function Account() {
  // TODO: change passwod and money
  const { t } = useTranslation(["common", "account"]);

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
