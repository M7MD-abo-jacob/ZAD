import { useTranslation } from "next-i18next";
import { useState } from "react";
import { BiInfoCircle, BiX } from "react-icons/bi";

export default function AgentsService({ service, children }) {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  return (
    <li key={service}>
      <h3 data-aos="fade-down" className="text-xl mt-3 capitalize">
        <span>{t(`agents:${service}_header`)}</span>
        <button
          className="ps-4 underline underline-offset-4 text-gray-600 dark:text-gray-400"
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          {show ? (
            <>
              {t("common:close")}
              <BiX
                title={t("common:close")}
                className="inline-block ms-1 p-1 text-4xl"
              />
            </>
          ) : (
            <>
              {t("common:read_more")}
              <BiInfoCircle
                title={t("common:read_more")}
                className="inline-block ms-1 p-1 text-4xl"
              />
            </>
          )}
        </button>
      </h3>
      <div
        className="grid"
        style={{
          gridTemplateRows: `${show ? "1fr" : "0fr"}`,
        }}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </li>
  );
}
