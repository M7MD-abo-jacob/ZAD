// 404 PAGE

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Button from "@/components/shared/Button";

export default function NotFoundPage() {
  const { back } = useRouter();
  const { t } = useTranslation(["common", "404"]);

  // meta data
  const headData = {
    title: `${t("common:brand")} | ${t("404:err404")}`,
    description: `${t("404:err404")}`,
  };

  return (
    <>
      <Head>
        <title>{headData.title}</title>
        <meta name="description" content={headData.description} />
        <meta name="robots" content="noindex" />
      </Head>
      <section id="top" className="container mx-auto p-3 text-center relative">
        <h1 className="text-4xl py-2 uppercase">{t("404:oh_no")}</h1>
        <h2 className="text-2xl py-1 capitalize">{t("404:err404")}</h2>
        <div className="flex justify-center gap-3 py-2">
          <Link href="/sadasda" className="w-auto">
            <Button>{t("common:home")}</Button>
          </Link>
          <Button className="w-auto" onClick={() => back()}>
            {t("404:back")}
          </Button>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "404"])),
    },
  };
}
