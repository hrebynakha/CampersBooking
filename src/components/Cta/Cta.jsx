import { NavLink } from "react-router-dom";
import css from "./Cta.module.css";

const Cta = () => {
  return (
    <div className={css.cta}>
      <div className={css.wrap}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.desc}>
          You can find everything you want in our catalog
        </p>
        <NavLink to="/catalog" className={css.btnLink}>
          View Now
        </NavLink>
      </div>
    </div>
  );
};

export default Cta;
