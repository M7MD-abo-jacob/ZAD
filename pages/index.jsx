import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Button from "@/components/shared/Button";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const { t } = useTranslation(["common", "home"]);

  return (
    <>
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-blue-950 opacity-80 z-10"></div>
        <div className="absolute inset-0  opacity-50 z-10">
          <Image
            src="/assets/fslide05.jpg"
            fill
            alt="hero section"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center md:text-start py-20 md:py-32">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4 leading-tight relative z-10">
              {t("home:header")}
            </h1>
            <p className="text-lg md:text-2xl text-gray-100 mb-8 relative z-10">
              {t("common:subtitle")}
            </p>
            <Link href="/adsl" className="inline-block">
              <Button className="text-2xl font-bold py-3 px-6 relative z-10">
                {t("home:check_services")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <section></section>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}
