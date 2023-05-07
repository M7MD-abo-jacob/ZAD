import Link from "next/link";
import { useTranslation } from "next-i18next";
import { links } from "@/data/links";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col md:flex-row justify-around ">
        <div md={8} className="">
          <h3 className="uppercase text-2xl">{t("brand")}</h3>
          <p className="accent">{t("lorem20")}</p>
        </div>

        <hr className="w-full md:hidden pb-0" />

        <div md={4} className="mb-md-0 mb-3">
          <h3 className="text-uppercase text-2xl">{t("links")}</h3>
          <nav>
            <ul className="list-unstyled">
              {links.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-primary">
                    {t(link.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer-copyright text-center py-3 ">
        <span>&#169; {t("copyright")}</span>
        <a
          href="https://m7md-abo-jacob.github.io/uShopia---my-fake-store/"
          className="text-primary"
        >
          {` ${t("author")} `}
        </a>
        {t("rights")}
      </div>
    </>
  );
};

export default Footer;
