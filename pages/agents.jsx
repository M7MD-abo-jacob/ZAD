import axios from "axios";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Agents() {
  const { t } = useTranslation(["common", "agents"]);

  const fetchData = () => {
    // const {data} = await axios.post(
    //   "http://www.zad.sy/index.php?option=site&task=pos",
    //   {
    //     gov_id: 3,
    //     area_id: 145,
    //   }
    // );
    const data = ["damascus", "latakia", "tartus", "homs", "aleppo"];
    // console.log(data);
    return data;
  };

  return (
    <section className="container ">
      <div className="">
        <h1 className="capitalize text-5xl w-full">{t("common:agents")}</h1>
        <br />
        {/* <button
          onClick={() => {
            fetchData();
          }}
        >
        </button> */}
        <form className="w-full">
          {/* -------------------- GOVERNATE -------------------- */}
          <label
            for="countries"
            class="block w-full mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {t("agents:governate")}
          </label>
          <select
            id="governate"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {fetchData().map((gov) => (
              <option key={gov}>{gov}</option>
            ))}
            {/* <option>Canada</option>
            <option>France</option>
            <option>Germany</option> */}
          </select>
          {/* -------------------- AREA -------------------- */}
          <label
            for="countries"
            class="block w-full mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {t("agents:governate")}
          </label>
          <select
            id="governate"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {fetchData().map((gov) => (
              <option key={gov}>{gov}</option>
            ))}
            {/* <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option> */}
          </select>
        </form>
        <p>{t("agents:directions")}</p>
      </div>
    </section>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "agents"])),
    },
  };
}
