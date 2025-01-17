import { NavLink } from "react-router-dom";
import css from "./Cta.module.css";
import { TypeAnimation } from "react-type-animation";

const Cta = () => {
  const dreamsSynonyms = [
    "ambitions",
    "desires",
    "visions",
    "hopes",
    "ideas",
    "wishes",
  ];
  return (
    <div className={css.cta}>
      <video className={css.video} autoPlay muted loop>
        <source src="/cta.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={css.content}>
        <TypeAnimation
          sequence={[
            "Campers of your dreams",
            1000,
            `Campers for your ${dreamsSynonyms[0]}`,
            1000,
            `Campers for your ${dreamsSynonyms[1]}`,
            1000,
            `Campers for your ${dreamsSynonyms[2]}`,
            1000,
            `Campers for your ${dreamsSynonyms[3]}`,
            1000,
            `Campers for your ${dreamsSynonyms[4]}`,
            1000,
            `Campers for your ${dreamsSynonyms[5]}`,
            1000,
            "Campers of your dreams",
            1000,
          ]}
          wrapper="h1"
          cursor={false}
          repeat={Infinity}
          className={css.title}
        />
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
