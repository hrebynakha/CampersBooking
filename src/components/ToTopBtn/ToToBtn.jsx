import ScrollToTop from "react-scroll-to-top";
import { IconContext } from "react-icons";
import { AiOutlineArrowUp } from "react-icons/ai";

const ToTopBtn = () => {
  return (
    <ScrollToTop
      smooth
      component={
        <IconContext.Provider value={{ color: "#e44848", size: "25px" }}>
          <AiOutlineArrowUp />
        </IconContext.Provider>
      }
    />
  );
};

export default ToTopBtn;
