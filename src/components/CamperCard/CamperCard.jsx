import { Link, useLocation } from "react-router-dom";
import EquimentsList from "../EquimentsList/EquimentsList";
import css from "./CamperCard.module.css";
import Icon from "../Icon/Icon";
import { trasnformToCurrencyText } from "../../utils/helpers/helpers";
import { Rating } from "@mui/material";

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
          <span className={css.title}>{camper.name}</span>
          <div className={css.priceWrap}>
            <h4 className={css.price}>
              {trasnformToCurrencyText(camper.price)}
            </h4>
            <button className="btnLike">
              <Icon name={"like"} color={"black"} size={24} />
            </button>
          </div>
        </div>
        <div className={css.secondaryInfo}>
          <div className={css.rating}>
            <Rating max={1} value={camper.rating} readOnly />
            <span className={css.ratingValue}>
              {camper.rating}({camper.reviews.length} Reviews)
            </span>
          </div>
          <div className={css.location}>
            <Icon name="location" color="black" size={16} />
            <span>{camper.location}</span>
          </div>
        </div>
        <span className={css.description}>{camper.description}</span>
        <div className={css.equimentsList}>
          <EquimentsList camper={camper} />
          <Link
            to={"/catalog/" + camper.id}
            state={location}
            className="btnLink red"
          >
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
