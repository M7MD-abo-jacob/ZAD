// import Link from "next/link";
// import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const NotFoundPage = () => {
  const { t } = useTranslation();

  // const headData = {
  //   title: `${t("common:brand")} | ${t("404:err404")}`,
  //   description: `${t("404:err404")}`,
  // };

  return (
    <>
      {/* <Head>
        <title>{headData.title}</title>
        <meta name="description" content={headData.description} />
        <meta name="robots" content="noindex" />
      </Head> */}
      oh noooooo!
    </>
  );
};

export default NotFoundPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
