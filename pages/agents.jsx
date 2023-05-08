import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Table from "@/components/shared/Table";
import SelectField from "@/components/shared/SelectField";

export default function Agents({ agents }) {
  const { t } = useTranslation(["common", "agents"]);
  const [selectedGovernate, setSelectedGovernate] = useState("");
  const [governates, setGovernates] = useState([]);

  const [selectedArea, setSelectedArea] = useState("");
  const [areas, setAreas] = useState([]);

  const handleGovernateChange = (value) => {
    setSelectedGovernate(value);
  };
  const handleAreaChange = (value) => {
    setSelectedArea(value);
  };

  useEffect(() => {
    setGovernates(["damascus", "latakia", "tartus", "homs", "aleppo"]);
  }, []);

  return (
    <>
      <section id="search-form" className="container px-2">
        <div className="container flex flex-col">
          <h1 className="capitalize text-5xl w-full">{t("common:agents")}</h1>
          <br />

          <div className="w-full">
            <form className="w-full">
              {/* -------------------- GOVERNATE -------------------- */}
              <SelectField
                label={t("agents:governate")}
                options={governates}
                value={selectedGovernate}
                onChange={(e) => handleGovernateChange(e.target.value)}
              />
              {/* <label
                for="countries"
                className="block md:inline-block w-full md:w-1/2 md:text-center text-sm font-medium text-gray-900 dark:text-white"
              >
                {t("agents:governate")}
              </label>
              <select
                id="governate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:inline-block w-full md:w-1/2 mb-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {governates.map((gov) => (
                  <option key={gov}>{gov}</option>
                ))}
              </select> */}
              {/* -------------------- AREA -------------------- */}
              <SelectField
                label={t("agents:area")}
                options={areas}
                value={selectedArea}
                onChange={(e) => handleAreaChange(e.target.value)}
              />
              {/* <label
                for="countries"
                className="block md:inline-block w-full md:w-1/2 md:text-center text-sm font-medium text-gray-900 dark:text-white"
              >
                {t("agents:governate")}
              </label>
              <select
                id="area"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:inline-block w-full md:w-1/2 mb-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {areas && areas.map((gov) => <option key={gov}>{gov}</option>)}
              </select> */}
            </form>
          </div>
          {!selectedArea && (
            <p className="text-red-700 dark:text-red-500 text-center font-bold">
              {t("agents:directions")}
            </p>
          )}
        </div>
      </section>
      {/* -------------------- TABLE SECTION -------------------- */}
      <section id="agents" className="container w-full mx-auto px-3 mt-5">
        {/* TODO: diferent h1 */}
        <h1 className="text-5xl">{t("common:agents")}</h1>
        {agents && agents.length > 0 && (
          <Table
            caption={t("common:agents")}
            data={agents}
            wrapperclassName="lg:min-w-full"
          />
        )}
      </section>
    </>
  );
}

export async function getStaticProps({ locale, query }) {
  console.log(query);
  // fetch data depending on query
  const agents = require("@/data/agents.json");
  console.log("agents:  ", agents);
  // const gov = query.gov;
  // const area = query.area;
  return {
    props: {
      agents,
      ...(await serverSideTranslations(locale, ["common", "agents"])),
    },
  };
}
