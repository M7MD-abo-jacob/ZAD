import { useState } from "react";
import { useTranslation } from "next-i18next";
import Button from "./Button";

export default function TicketForm() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  return (
    <form data-aos="fade-up-left" className="mb-2">
      <label
        htmlFor="email"
        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
      >
        {t("support:email")}
      </label>
      <input
        id="email"
        type="email"
        required={true}
        placeholder={`test@test.test`}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="input block w-full "
      />
      <label
        htmlFor="card-number"
        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
      >
        {t("support:number")}
      </label>
      <input
        id="card-number"
        type="text"
        required={true}
        placeholder={`1234`}
        value={cardNumber}
        onChange={(e) => {
          setCardNumber(e.target.value);
        }}
        className="input block w-full"
      />
      <Button
        type="submit"
        className="mb-2"
        onClick={(e) => {
          e.preventDefault();
          // fetch or set query params and push new route
          console.log(`email: ${email}, card number: ${cardNumber}`);
        }}
      >
        {t("support:check_status")}
      </Button>
    </form>
  );
}
