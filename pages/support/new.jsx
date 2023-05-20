import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useReducer } from "react";
import Button from "@/components/shared/Button";
import styles from "@/styles/NewTicket.module.css";
import { BiSend, BiTrash } from "react-icons/bi";
import Head from "next/head";

const initialState = {
  name: "",
  email: "",
  user_name: "",
  phone: "",
  phone_ext: "",
  mobile_no: "",
  deptId: "0",
  subject: "",
  message: "",
  pri: "2",
  captcha: "",
};

export default function NewTicketPage() {
  const { t } = useTranslation(["common", "newTicket"]);

  const [reducerState, dispatch] = useReducer(reducer, initialState);

  const headData = {
    title: `${t("common:brand")} | ${t("common:support")}`,
    description: `${t("newTicket:new_header")}`,
  };

  // TODO: add placeholders
  return (
    <>
      <Head>
        <title>{headData.title}</title>
        <meta name="description" content={headData.description} />
      </Head>
      <section className="container mx-auto">
        <h2 className="text-center text-xl font-bold uppercase">
          {t("newTicket:enter_details")}
        </h2>
        <p
          id="error"
          className="text-center text-red-600 dark:text-red-400 font-semibold capitalize"
        >
          {t("newTicket:enter_correctly")}
        </p>
        <form
          // action="open.php"
          // method="POST"
          // encType="multipart/form-data"
          // name="open_new_ticket"
          onSubmit={() => {
            submit(reducerState);
          }}
          className={`${styles.ticket_form} flex flex-col w-full my-4`}
        >
          {/* -------------------- NAME -------------------- */}
          <div className="label-input">
            <label htmlFor="name">{t("newTicket:name")}</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              size="25"
              value={reducerState.name}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  value: e.target.value,
                  key: "name",
                })
              }
            />
          </div>
          {/* -------------------- EMAIL -------------------- */}
          <div className={`label-input `}>
            <label htmlFor="email">{t("newTicket:email")}</label>
            <input
              type="text"
              name="email"
              id="email"
              required
              size="25"
              value={reducerState.email}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  value: e.target.value,
                  key: "email",
                })
              }
            />
          </div>
          {/* -------------------- USER_NAME -------------------- */}
          <div className="label-input">
            <label htmlFor="user_name">{t("newTicket:user_name")}</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              size="25"
              value={reducerState.user_name}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  value: e.target.value,
                  key: "user_name",
                })
              }
            />
          </div>
          {/* -------------------- PHONE -------------------- */}
          <div className="label-input">
            <label htmlFor="phone">{t("newTicket:phone")}</label>
            <input
              type="text"
              name="phone"
              id="phone"
              size="25"
              value={reducerState.phone}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  value: e.target.value,
                  key: "phone",
                })
              }
            />
          </div>
          {/* -------------------- PHONE_EXT -------------------- */}
          <div className="label-input">
            <label htmlFor="phone_ext">{t("newTicket:phone_ext")}</label>
            <select
              name="phone_ext"
              id="phone_ext"
              required
              value={reducerState.phone_ext}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  value: e.target.value,
                  key: "phone_ext",
                })
              }
            >
              <option value="">{t("newTicket:phone_ext")}</option>
              <option value="011">دمشق </option>
              <option value="011">ريف دمشق </option>
              <option value="021">حلب </option>
              <option value="041">اللاذقية </option>
              <option value="031">حمص </option>
              <option value="015">درعا </option>
              <option value="033">حماه </option>
              <option value="051">دير الزور </option>
              <option value="022">الرقة </option>
              <option value="052">الحسكة </option>
              <option value="052">القامشلي </option>
              <option value="023">إدلب </option>
              <option value="043">طرطوس </option>
              <option value="016">السويداء </option>
              <option value="014">القنيطرة </option>
            </select>
          </div>
          {/* -------------------- MOBILE_NO -------------------- */}
          <div className="label-input">
            <label htmlFor="mobile_no">{t("newTicket:mobile_no")}</label>
            <input
              type="text"
              name="mobile_no"
              id="mobile_no"
              size="25"
              value={reducerState.mobile_no}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  value: e.target.value,
                  key: "mobile_no",
                })
              }
            />
          </div>
          {/* -------------------- deptID -------------------- */}
          <div className="label-input">
            <label htmlFor="deptId">{t("newTicket:deptId")}</label>
            <select
              name="deptId"
              id="deptId"
              required
              value={reducerState.deptId}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  value: e.target.value,
                  key: "deptId",
                })
              }
            >
              <option value="0">{t("newTicket:choose_dept")}</option>
              <option value="1">الدعم الفني</option>
              <option value="2">الحسابات</option>
              <option value="4">تفعيل الحسابات الجديدة</option>
              <option value="7">التسويق</option>
              <option value="8">خدمات التصفح والشبكة</option>
              <option value="10">خدمات عقود الدي اس ال</option>
              <option value="12">الخدمات الادارية</option>
              <option value="13">الوكلاء</option>
              <option value="14">الزبائن</option>
              <option value="16">غير ذلك</option>
            </select>
          </div>
          {/* -------------------- SUBJECT -------------------- */}
          <div className="label-input">
            <label htmlFor="subject">{t("newTicket:subject")}</label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              size="35"
              value={reducerState.subject}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  value: e.target.value,
                  key: "subject",
                })
              }
            />
          </div>
          {/* -------------------- MESSAGE -------------------- */}
          <div className="label-input">
            <label htmlFor="message">{t("newTicket:message")}</label>
            <textarea
              name="message"
              id="message"
              required
              cols="35"
              rows="8"
              wrap="soft"
              value={reducerState.message}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  value: e.target.value,
                  key: "message",
                })
              }
            ></textarea>
          </div>
          {/* -------------------- PRI -------------------- */}
          <div className="label-input">
            <label htmlFor="pri">{t("newTicket:pri")}</label>
            <select
              name="pri"
              id="pri"
              value={reducerState.pri}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  value: e.target.value,
                  key: "pri",
                })
              }
            >
              <option value="1">Low</option>
              <option value="2">Normal</option>
              <option value="3">High</option>
            </select>
          </div>
          {/* -------------------- CAPTCHA -------------------- */}
          <div className="label-input">
            <label htmlFor="captcha">{t("newTicket:captcha")}</label>
            <img src="/assets/captcha.png" border="0" align="left" />
            <input
              type="text"
              name="captcha"
              id="captcha"
              required
              // TODO: translate
              placeholder={t("newTicket:captcha_placeholder")}
              size="7"
              value={reducerState.captcha}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  value: e.target.value,
                  key: "captcha",
                })
              }
            />
          </div>
          {/* -------------------- BUTTONS -------------------- */}
          <div
            className="flex flex-col md:flex-row gap-5 justify-center mt-5 rounded-md shadow-sm"
            role="group"
          >
            {/* -------------------- SEND BUTTON -------------------- */}
            <Button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                submit();
              }}
            >
              <BiSend />
              {t("newTicket:send")}
            </Button>
            {/* -------------------- RESET BUTTON -------------------- */}
            <Button
              onClick={(e) => {
                e.preventDefault();
                dispatch({
                  type: "DELETE",
                });
              }}
            >
              <BiTrash />
              {t("newTicket:reset")}
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "newTicket"])),
    },
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        [action.key]: action.value,
      };
    case "DELETE":
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

function submit(reducerState) {
  // "if(verify(open_new_ticket)==true){open_new_ticket.submit();}"
  console.log({
    name: reducerState.name,
    email: reducerState.email,
    user_name: reducerState.user_name,
    phone: reducerState.phone,
    phone_ext: reducerState.phone_ext,
    mobile_no: reducerState.mobile_no,
    deptId: reducerState.deptId,
    subject: reducerState.subject,
    message: reducerState.message,
    pri: reducerState.pri,
    captcha: reducerState.captcha,
  });
}
