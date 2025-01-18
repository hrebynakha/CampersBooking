import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { trasnformToCurrencyText } from "../../utils/helpers/helpers";
import { selectFavoriteItems } from "../../redux/favorites/selectors";
import {
  addFavoriteItem,
  removeFavoriteItem,
} from "../../redux/favorites/slice";
import EquimentsList from "../EquimentsList/EquimentsList";
import CamperSecondaryInfo from "../CamperSecondaryInfo/CamperSecondaryInfo";
import Icon from "../Icon/Icon";
import css from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favoritesItems = useSelector(selectFavoriteItems);

  const handleLikeClick = () => {
    if (favoritesItems.includes(camper.id)) {
      dispatch(removeFavoriteItem(camper.id));
      toast.success("You can alway return it back :)");
      return;
    }
    dispatch(addFavoriteItem(camper.id));
    toast.success("We remember that!");
  };
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
            <button className="btnLike" onClick={handleLikeClick}>
              <Icon
                name={"like"}
                color={"black"}
                size={24}
                className={favoritesItems.includes(camper.id) ? "liked" : ""}
              />
            </button>
          </div>
        </div>
        <CamperSecondaryInfo
          rating={camper.rating}
          reviewsCount={camper.reviews.length}
          location={camper.location}
        />
        <span className={css.description}>{camper.description}</span>
        <div className={css.equimentsList}>
          <EquimentsList camper={camper} />
          <Link to={"/catalog/" + camper.id} className="btnLink red">
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
