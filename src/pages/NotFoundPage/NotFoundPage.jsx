import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.wrap}>
      <div className={css.text}>
        <span className={css.notFound}>404</span>
        <p className={css.desc}>
          Ooops...seems like this page is not avaliable
        </p>
        <Link to="/" className="btnLink red">
          Go home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
