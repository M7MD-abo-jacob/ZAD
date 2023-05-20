import { useTranslation } from "next-i18next";
import React from "react";
import styles from "@/styles/Table.module.css";

export default function Table({ data, caption, wrapperClass, tableClass }) {
  const { t } = useTranslation();

  const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return (
    <div
      className={`wrapper relementative overflow-x-auto mx-auto  ${styles.wrapper} ${wrapperClass}`}
    >
      <table
        role="table"
        className={`text-sm text-center w-full ${styles.table} ${tableClass}`}
      >
        {caption && <caption role="caption">{caption}</caption>}
        <thead role="rowgroup" className="text-xs uppercase border-b-2">
          <tr role="row">
            {Object.keys(data[0]).map((element, i) => (
              <th key={i} role="columnheader" className="px-6 py-3">
                {t(element)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody role="rowgroup">
          {data.map((element, i) => (
            <tr key={i} role="row">
              {Object.keys(element).map((el, i) => (
                <td
                  key={i}
                  data-cell={t(el)}
                  role="cell"
                  className="px-6 py-4 align-middle"
                >
                  {/* display prices properly */}
                  {el.split(":")[1] === "price" ? (
                    priceFormatter.format(element[el]).replace(/\$/g, "")
                  ) : typeof element[el] === "object" ? (
                    <ul>
                      {element[el].map((i) =>
                        el.split(":")[1] === "phones" ? (
                          <li key={i}>
                            <a
                              target="_blank"
                              href={`tel:${i}`}
                              className="leading-7 p-2 underline underline-offset-4"
                            >
                              {i}
                            </a>
                          </li>
                        ) : (
                          <li key={i}>{i}</li>
                        )
                      )}
                    </ul>
                  ) : (
                    element[el]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
