import { Link, useLocation } from "react-router-dom";
import EquimentsList from "../EquimentsList/EquimentsList";
import css from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  const location = useLocation();

  return (
    <div className={css.item}>
      <img
        src={camper.gallery[0].thumb}
        alt={camper.name}
        className={css.img}
      />
      <div className={css.info}>
        <div className={css.mainInfo}>
          <span>{camper.name}</span>
          <div className={css.price}>
            <span>{camper.price}</span>
            <button className={css.btnLike}>Like</button>
          </div>
        </div>
        <div className={css.secondaryInfo}>
          <span>
            {camper.rating}({camper.reviews.length} Reviews)
          </span>
          <span>{camper.location}</span>
        </div>
        <span className={css.description}>{camper.description}</span>
        <EquimentsList camper={camper} />
        <Link
          to={"/catalog/" + camper.id}
          state={location}
          className="btn-link"
        >
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
