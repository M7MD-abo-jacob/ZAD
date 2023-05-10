import Button from "@/components/shared/Button";
import TicketForm from "@/components/shared/TicketForm";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

export default function TicketsPage() {
  const { t } = useTranslation(["common", "support"]);

  return (
    <section className="container mx-auto px-4 ">
      <h1 className="text-5xl mb-2">{t("support:status_header")}</h1>
      <p className="mb-2">{t("support:status_paragraph")}</p>
      <Link href="/support/new" className="inline-block">
        <Button className="mb-5">{t("support:new_header")}</Button>
      </Link>
      <TicketForm />
    </section>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "support"])),
    },
  };
}
