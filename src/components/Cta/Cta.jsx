import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { useDispatch } from "react-redux";
import { changeSearchFilter } from "../../redux/campers/slice";
import { buildSynonyms } from "../../utils/helpers/helpers";
import clsx from "clsx";
import css from "./Cta.module.css";

const Cta = () => {
  const sequence = buildSynonyms(
    "Campers of your dreams",
    "Campers for yours",
    ["ambitions", "desires", "visions", "hopes", "ideas", "wishes"],
    1000
  );
  const dispatch = useDispatch();
  const handleResetFilters = () => {
    dispatch(changeSearchFilter({}));
  };
  return (
    <div className={css.cta}>
      <video className={css.video} autoPlay muted loop>
        <source src="/cta.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={css.content}>
        <TypeAnimation
          sequence={sequence}
          wrapper="h1"
          cursor={false}
          repeat={Infinity}
          className={css.title}
        />
        <p className={css.desc}>
          You can find everything you want in our catalog
        </p>
        <NavLink
          to="/catalog"
          className={clsx("btnLink red btnAnimated", css.btn)}
          onClick={handleResetFilters}
        >
          View Now
        </NavLink>
      </div>
    </div>
  );
};

export default Cta;
