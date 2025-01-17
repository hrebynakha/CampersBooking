import { useSelector } from "react-redux";
import { selectCamperReviews } from "../../redux/campers/selectors";
import CamperReviewCard from "../CamperReviewCard/CamperReviewCard";
import css from "./CamperReviews.module.css";

const CamperReviews = () => {
  const reviews = useSelector(selectCamperReviews);
  return (
    <ul className={css.list}>
      {reviews.map((review, i) => {
        return (
          <li key={i}>
            <CamperReviewCard review={review} />
          </li>
        );
      })}
    </ul>
  );
};

export default CamperReviews;
