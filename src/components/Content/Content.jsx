import css from "./Content.module.css";

const Content = ({ children }) => {
  return <main className={css.main}>{children}</main>;
};

export default Content;
