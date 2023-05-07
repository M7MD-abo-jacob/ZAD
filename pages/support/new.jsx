import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function NewTicketPage() {
  return <div>NewTicketPage</div>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
