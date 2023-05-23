import Link from "next/link";
import { useTranslation } from "next-i18next";
import { BsGooglePlay } from "react-icons/bs";
import { links } from "@/data/links";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col md:flex-row justify-around">
        <div md={8} className="">
          <h3 className="uppercase text-2xl">{t("common:brand")}</h3>
          <p className="accent">{t("common:subtitle2")}</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.zad_it.zadisp&hl=en_US&pli=1"
            className="w-max mx-auto md:ms-0 my-3 px-3 py-1.5 flex gap-2 items-center rounded-xl border-2 border-black dark:border-white"
          >
            <div className="w-10">
              <BsGooglePlay className="h-full w-full text-green-800 dark:text-green-300" />
            </div>
            <div className="">
              <div className="text-sm font-extrabold">Download our app</div>
              <div className="text-2xl">Google Play</div>
            </div>
          </a>
        </div>

        <hr className="w-full md:hidden pb-0" />

        <div md={4} className="mb-md-0 mb-3">
          <h3 className="text-uppercase text-2xl">{t("common:links")}</h3>
          <nav>
            <ul className="list-unstyled">
              {links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-primary hover:text-accent duration-200 hover:drop-shadow-lg hover:drop-shadow-accent "
                  >
                    {t(link.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        <span>&#169; {new Date().getFullYear()}</span>
        <a
          href="https://m7md-abo-jacob.github.io/uShopia---my-fake-store/"
          className="text-primary"
        >
          {` ${t("common:author")} `}
        </a>
        {t("common:rights")}
      </div>
    </>
  );
}
