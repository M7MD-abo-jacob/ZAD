import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import Earth from "@/components/layouts/Earth";
import Button from "@/components/shared/Button";

export default function Home() {
  const { t } = useTranslation(["common", "home"]);

  const headData = {
    title: `${t("common:brand")} | ${t("common:subtitle2")}`,
    description: `${t("home:brand_subtitle2")}`,
  };

  return (
    <>
      <Head>
        <title>{headData.title}</title>
        <meta name="description" content={headData.description} />
      </Head>
      <section className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-blue-950 opacity-80 z-10"></div>
        <div className="absolute inset-0 opacity-90 z-10">
          {/* <Image
            src="/assets/fslide05.jpg"
            fill
            alt="hero section"
            className="absolute inset-0 object-cover w-full"
          /> */}
          <Canvas>
            <Suspense fallback="loading">{/* <Earth /> */}</Suspense>
          </Canvas>
        </div>
        <div className="container relative mx-auto px-4 sm:px-6">
          <div className="text-center md:text-start py-10 md:py-12">
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
      </section>
      <br />
      <br />
      <Link href="http://selfcare.zad.sy/adsl/register/step1"></Link>
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
