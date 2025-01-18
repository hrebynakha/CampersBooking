import { Avatar, Rating } from "@mui/material";
import { getAvatarLetter } from "../../utils/helpers/helpers";
import css from "./CamperReviewCard.module.css";

const CamperReviewCard = ({ review }) => {
  const avatarLetter = getAvatarLetter(review.reviewer_name[0]);

  return (
    <div>
      <div className={css.reviwer}>
        <Avatar
          sx={{ bgcolor: "#F2F4F7", width: 60, height: 60, color: "#E44848" }}
          className={css.avatar}
          alt={review.reviewer_name}
        >
          {avatarLetter}
        </Avatar>
        <div className={css.reviwerInfo}>
          <div>{review.reviewer_name}</div>
          <Rating
            max={5}
            value={review.reviewer_rating}
            readOnly
            size="small"
          />
        </div>
      </div>
      <p className={css.comment}>{review.comment}</p>
    </div>
  );
};

export default CamperReviewCard;
