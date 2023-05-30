import { BsCaretUp } from "react-icons/bs";
import Button from "../shared/Button";

export default function ScrollToTopBtn() {
  return (
    <>
      <Button
        data-aos="fade-up"
        className="fixed bottom-4 end-8 rounded-full px-2 py-2"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        aria-label="go to top"
      >
        <BsCaretUp className="group-hover/btn:animate-heart-beat text-2xl font-bold" />
      </Button>
    </>
  );
}
