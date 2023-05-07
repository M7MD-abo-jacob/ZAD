import axios from "axios";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Agents() {
  const { t } = useTranslation(["common", "agents"]);

  const fetchData = async () => {
    console.log("started");
    const res = await axios.post(
      "http://www.zad.sy/index.php?option=site&task=pos",
      {
        gov_id: 3,
        area_id: 145,
      }
    );

    console.log("ended");
    console.log(res);
  };

  return (
    <div>
      Agents
      <br />
      <button
        onClick={() => {
          fetchData();
        }}
      >
        zad
      </button>
      <form>
        {/* -------------------- GOVERNATE -------------------- */}
        <label
          for="countries"
          class="block md:inline mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {t("agents:governate")}
        </label>
        <select
          id="governate"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full md:w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>
        {/* -------------------- AREA -------------------- */}
        <label
          for="countries"
          class="block md:inline mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {t("agents:governate")}
        </label>
        <select
          id="governate"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full md:w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>
      </form>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "agents"])),
    },
  };
}
