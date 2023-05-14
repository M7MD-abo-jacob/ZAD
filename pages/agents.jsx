import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Table from "@/components/shared/Table";
import SelectField from "@/components/shared/SelectField";
import AgentsService from "@/components/agents/AgentsService";

export default function Agents({ agents, governates }) {
  const router = useRouter();
  const { query, push } = router;
  const { gov, area } = query;

  const { t } = useTranslation(["common", "agents"]);
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
    // const {data} = axios.get(`/areas`);
    // setAreas(data);

    // TODO: static data, change later
    setAreas(["latakia", "jableh", "anything", "any"]);
  }, [selectedGovernate]);

  return (
    <>
      <section id="search-form" className="container px-3 mx-auto">
        <div className="container flex flex-col">
          <h1 className="capitalize text-5xl w-full mb-4">
            {t("common:agents")}
          </h1>

          <div>
            <h2 className="text-3xl mb-2 capitalize">
              {t("agents:services_header")}
            </h2>
            <ol className="list-decimal ps-5">
              <AgentsService service={"recharge"}>
                <p>{t("agents:recharge_details")}</p>
              </AgentsService>
              <AgentsService service={"change_speed"}>
                <p>{t("agents:change_speed_details")}</p>
                <ul className="list-disc ps-5">
                  <li>{t("agents:change_speed_1")}</li>
                  <li>{t("agents:change_speed_2")}</li>
                  <li>{t("agents:change_speed_3")}</li>
                  <li>{t("agents:change_speed_4")}</li>
                </ul>
              </AgentsService>
              <AgentsService service={"stop_service"}>
                <p>{t("agents:stop_service_details")}</p>
              </AgentsService>
            </ol>
          </div>
          <br />

          <div className="w-full">
            <h1 className="capitalize text-5xl w-full mb-4">
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
            <p className="text-red-700 dark:text-red-500 text-center font-bold">
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
            <h1 className="text-5xl mb-3">{t("agents:area_agents")}</h1>
            <Table
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
  console.log(query);
  const gov = query?.gov || "";
  const area = query?.area || "";

  // fetch data depending on query
  // const {data: agents} = axios.get(`/agents?gov=${gov}&area=${area}`);

  // TODO: static data, change later
  const agents = gov && area ? require("@/data/agents.json") : [];
  const governates = ["damascus", "latakia", "tartus", "homs", "aleppo"];

  return {
    props: {
      agents,
      governates,
      ...(await serverSideTranslations(locale, ["common", "agents"])),
    },
  };
}
