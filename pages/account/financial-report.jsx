import { useTranslation } from "next-i18next";

export default function FinancialReport() {
  const { t } = useTranslation(["common", "account"]);
  return <div>financial-report</div>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "account"])),
    },
  };
}
