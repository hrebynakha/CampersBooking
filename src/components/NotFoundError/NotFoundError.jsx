import clsx from "clsx";
import css from "./NotFoundError.module.css";

const NotFoundError = ({
  text = "We’re sorry, but we couldn’t find the information you’re looking for...",
  type = "start",
}) => {
  return <div className={clsx(css.text, type)}>{text}</div>;
};

export default NotFoundError;
