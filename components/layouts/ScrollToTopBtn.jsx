import { useState, useEffect } from "react";
import { BsCaretUp } from "react-icons/bs";
import Button from "../buttons/Button";

const ScrollToTopBtn = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showTopBtn && (
        <Button
          className="fixed bottom-4 right-8 shadow-md rounded-full px-2 py-2"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="go to top"
        >
          <BsCaretUp className="text-2xl font-bold" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTopBtn;
