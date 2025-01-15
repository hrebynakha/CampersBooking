const CamperReviewCard = ({ review }) => {
  return (
    <div>
      <div>{review.reviewer_name}</div>
      <div>{review.reviewer_rating}</div>
      <div>{review.comment}</div>
    </div>
  );
};

export default CamperReviewCard;
