import { useTranslation } from "next-i18next";
import React from "react";

export default function SupportPage() {
  const { t } = useTranslation(["common", "support"]);
  return <div>{t("common:subtitle")}</div>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "support"])),
    },
  };
}
