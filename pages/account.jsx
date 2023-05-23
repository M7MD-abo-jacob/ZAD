import { useTranslation } from "next-i18next";
import Head from "next/head";

export default function Account() {
  const { t } = useTranslation(["common", "account"]);

  const headData = {
    title: `${t("common:brand")} | ${t("common:account")}`,
    description: `${t("account:desc")}`,
  };

  return (
    <>
      <Head>
        <title>{headData.title}</title>
        <meta name="description" content={headData.description} />
      </Head>
      <section id="details" className="container mx-auto px-3 md:px-5">
        <dl class="divide-y divide-gray-600 dark:divide-gray-400">
          <div class="flex flex-col md:flex-row md:justify-between max-w-2xl mx-auto py-3">
            <dt class="mb-1 md:text-lg text-muted">اسم المشترك</dt>
            <dd class="text-lg font-semibold">mohammad</dd>
          </div>
          <div class="flex flex-col md:flex-row md:justify-between max-w-2xl mx-auto py-3">
            <dt class="mb-1 md:text-lg text-muted">اسم المستخدم</dt>
            <dd class="text-lg font-semibold">زاد</dd>
          </div>
          <div class="flex flex-col md:flex-row md:justify-between max-w-2xl mx-auto py-3">
            <dt class="mb-1 md:text-lg text-muted">الاشتراك مدفوع لغاية</dt>
            <dd class="text-lg font-semibold">2023-09-15</dd>
          </div>
          <div class="flex flex-col md:flex-row md:justify-between max-w-2xl mx-auto py-3">
            <dt class="mb-1 md:text-lg text-muted">اشتراك بسرعة</dt>
            <dd class="text-lg font-semibold">1 Mb/s</dd>
          </div>
          <div class="flex flex-col md:flex-row md:justify-between max-w-2xl mx-auto py-3">
            <dt class="mb-1 md:text-lg text-muted">رقم الموبايل</dt>
            <dd class="text-lg font-semibold">963991234567</dd>
          </div>
        </dl>
      </section>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "account"])),
    },
  };
}
