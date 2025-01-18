import { useSelector } from "react-redux";

import EquimentsList from "../EquimentsList/EquimentsList";
import { selectCamper } from "../../redux/campers/selectors";
import { capitalize } from "../../utils/helpers/helpers";
import css from "./CamperFeatures.module.css";

const CamperFeatures = () => {
  const camper = useSelector(selectCamper);
  return (
    <div>
      <EquimentsList camper={camper} />
      <div className={css.title}>Vehicle details</div>
      <ul className={css.camperDetail}>
        <li className={css.camperItem}>
          <div>Form</div>
          <div>{capitalize(camper.form)}</div>
        </li>
        <li className={css.camperItem}>
          <div>Length</div>
          <div>{camper.length}</div>
        </li>
        <li className={css.camperItem}>
          <div>Width</div>
          <div>{camper.width}</div>
        </li>
        <li className={css.camperItem}>
          <div>Height</div>
          <div>{camper.height}</div>
        </li>
        <li className={css.camperItem}>
          <div>Tank</div>
          <div>{camper.tank}</div>
        </li>
        <li className={css.camperItem}>
          <div>Consumption</div>
          <div>{camper.consumption}</div>
        </li>
      </ul>
    </div>
  );
};

export default CamperFeatures;
