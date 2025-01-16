import { Rating } from "@mui/material";
import Icon from "../Icon/Icon";
import css from "./CamperSecondaryInfo.module.css";

const CamperSecondaryInfo = ({ rating, reviewsCount, location }) => {
  return (
    <div className={css.secondaryInfo}>
      <div className={css.rating}>
        <Rating max={1} value={rating} readOnly />
        <span className={css.ratingValue}>
          {rating}({reviewsCount} Reviews)
        </span>
      </div>
      <div className={css.location}>
        <Icon name="location" color="black" size={16} />
        <span>{location}</span>
      </div>
    </div>
  );
};
export default CamperSecondaryInfo;
