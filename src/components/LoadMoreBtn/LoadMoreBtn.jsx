import clsx from "clsx";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={clsx(css.btn, "btnLink", "white")}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
