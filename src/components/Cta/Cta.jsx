import { NavLink } from "react-router-dom";
import css from "./Cta.module.css";

const Cta = () => {
  return (
    <div className={css.cta}>
      <video className={css.video} autoPlay muted loop>
        <source src="/cta.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={css.content}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.desc}>
          You can find everything you want in our catalog
        </p>
        <NavLink to="/catalog" className="btnLink red">
          View Now
        </NavLink>
      </div>
    </div>
  );
};

export default Cta;
