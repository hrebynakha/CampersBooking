import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectVisibleCampers } from "../../redux/campers/selectors";
import css from "./CampersList.module.css";
import EquimentsList from "../EquimentsList/EquimentsList";
const CampersList = () => {
  const location = useLocation();
  const campers = useSelector(selectVisibleCampers);
  return (
    <div>
      {campers.length > 0 ? (
        <ul className={css.list}>
          {campers.map((camper) => {
            return (
              <li key={camper.id} className={css.item}>
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
              </li>
            );
          })}
        </ul>
      ) : (
        <h1>Not found camp</h1>
      )}
    </div>
  );
};

export default CampersList;
