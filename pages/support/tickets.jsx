import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function TicketsPage() {
  return <div>Tickets</div>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
