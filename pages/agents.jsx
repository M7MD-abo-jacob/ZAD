// this page is server side rendered
// gets the authorized agents for the selected area before loading for better SEO

import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Table from "@/components/shared/Table";
import SelectField from "@/components/shared/SelectField";
import AgentsService from "@/components/agents/AgentsService";
import Head from "next/head";
import getAgentsData from "@/lib/getAgentsData";
import getGovAreas from "@/lib/getGovAreas";

export default function Agents({ agents, governates }) {
  const { t } = useTranslation(["common", "agents"]);

  const router = useRouter();
  const { query, push } = router;
  const { gov, area } = query;

  const [selectedGovernate, setSelectedGovernate] = useState(gov);
  const [areas, setAreas] = useState([]);

  const handleGovernateChange = (value) => {
    setSelectedGovernate(value);
  };
  const handleAreaChange = (value) => {
    query.gov = selectedGovernate;
    query.area = value;
    push(router);
  };

  useEffect(() => {
    // fetch areas for the selected governate every time the user changes the governate
    // TODO: static data, change later
    const govAreas = getGovAreas(selectedGovernate);
    setAreas(govAreas);
  }, [selectedGovernate]);

  const headData = {
    title: `${t("common:brand")} | ${t("common:agents")}`,
    description: `${t("agents:search")}`,
  };

  return (
    <>
      <Head>
        <title>{headData.title}</title>
        <meta name="description" content={headData.description} />
      </Head>
      <section id="search-form" className="container px-3 mx-auto">
        <div className="container flex flex-col">
          <h1 data-aos="zoom-in-up" className="capitalize text-5xl w-full mb-4">
            {t("common:agents")}
          </h1>

          <div>
            <h2 data-aos="zoom-in-up" className="text-3xl mb-2 capitalize">
              {t("agents:services_header")}
            </h2>
            <ol className="list-decimal ps-5">
              <AgentsService service={"recharge"}>
                <p>{t("agents:recharge_details")}</p>
              </AgentsService>
              <AgentsService service={"change_speed"}>
                <p>{t("agents:change_speed_details")}</p>
                <ul className="list-disc ps-5">
                  <li data-aos="fade-right" data-aos-delay="50">
                    {t("agents:change_speed_1")}
                  </li>
                  <li data-aos="fade-right" data-aos-delay="100">
                    {t("agents:change_speed_2")}
                  </li>
                  <li data-aos="fade-right" data-aos-delay="150">
                    {t("agents:change_speed_3")}
                  </li>
                  <li data-aos="fade-right" data-aos-delay="200">
                    {t("agents:change_speed_4")}
                  </li>
                </ul>
              </AgentsService>
              <AgentsService service={"stop_service"}>
                <p>{t("agents:stop_service_details")}</p>
              </AgentsService>
            </ol>
          </div>
          <br />

          <div className="w-full">
            <h1
              data-aos="zoom-in-up"
              className="capitalize text-5xl w-full mb-4"
            >
              {t("agents:search")}
            </h1>
            <form className="w-full">
              {/* -------------------- GOVERNATE -------------------- */}
              <SelectField
                label={t("agents:governate")}
                options={governates}
                value={selectedGovernate}
                onChange={(e) => handleGovernateChange(e.target.value)}
              />
              {/* -------------------- AREA -------------------- */}
              {areas.length > 0 && (
                <SelectField
                  label={t("agents:area")}
                  options={areas}
                  value={area}
                  onChange={(e) => handleAreaChange(e.target.value)}
                />
              )}
            </form>
          </div>
          {!area && (
            <p
              data-aos="zoom-in-up"
              className="text-red-700 dark:text-red-500 text-center font-bold"
            >
              {t("agents:directions")}
            </p>
          )}
        </div>
      </section>
      {/* -------------------- TABLE SECTION -------------------- */}
      <section id="agents" className="container w-full px-3 mx-auto mt-5">
        {/* TODO: diferent h1 */}
        {agents?.length > 0 && (
          <>
            <h1 data-aos="zoom-in-up" className="text-5xl mb-3 capitalize">
              {t("agents:area_agents")}
            </h1>
            <Table
              dataAos="fade-up"
              caption={t("agents:area_agents")}
              data={agents}
              wrapperClass="big-table lg:min-w-3/4"
            />
          </>
        )}
      </section>
    </>
  );
}

export async function getServerSideProps({ locale, query }) {
  // get governates when page first loads and get agents when user select area
  const { agents, governates } = getAgentsData(query);
  return {
    props: {
      agents,
      governates,
      ...(await serverSideTranslations(locale, ["common", "agents"])),
    },
  };
}
