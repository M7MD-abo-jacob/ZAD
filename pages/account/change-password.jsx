import { useTranslation } from "next-i18next";

export default function ChangePassord() {
  const { t } = useTranslation(["common", "account"]);
  return <div>ChangePassord</div>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "account"])),
    },
  };
}
