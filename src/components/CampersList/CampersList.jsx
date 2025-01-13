import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectVisibleCampers } from "../../redux/campers/selectors";
import EquipmentItem from "../EquipmentItem/EquipmentItem";

import css from "./CampersList.module.css";
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
                <img src={camper.thumb} alt={camper.name} className={css.img} />
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
                  <div className={css.func}>
                    {camper.AC ? <EquipmentItem name={"ac"} text="AC" /> : null}
                    {camper.bathroom ? (
                      <EquipmentItem name={"bathroom"} />
                    ) : null}
                    {camper.kitchen ? (
                      <EquipmentItem name={"cup-hot"} text="Kitchen" />
                    ) : null}
                    {camper.TV ? <EquipmentItem name={"tv"} text="TV" /> : null}
                    {camper.radio ? (
                      <EquipmentItem name={"ui-radios"} text={"Radio"} />
                    ) : null}
                    {camper.refrigerator ? (
                      <EquipmentItem
                        name={"solar-fridge"}
                        text={"Refrigerator"}
                      />
                    ) : null}
                    {camper.microwave ? (
                      <EquipmentItem name={"microwave"} />
                    ) : null}
                    {camper.gas ? (
                      <EquipmentItem name={"gas"} color="yellow" />
                    ) : null}
                    {camper.water ? (
                      <EquipmentItem
                        name={"ion-water"}
                        text="Water"
                        color="blue"
                      />
                    ) : null}
                  </div>
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
