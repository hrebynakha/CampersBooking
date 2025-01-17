import { Avatar, Rating } from "@mui/material";
import css from "./CamperReviewCard.module.css";

const CamperReviewCard = ({ review }) => {
  const avatarLetter = review.reviewer_name[0].toUpperCase();

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
