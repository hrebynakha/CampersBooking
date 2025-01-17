import { useSelector } from "react-redux";
import EquimentsList from "../EquimentsList/EquimentsList";
import { selectCamper } from "../../redux/campers/selectors";
import css from "./CamperFeatures.module.css";

const CamperFeatures = () => {
  const camper = useSelector(selectCamper);
  return (
    <div>
      <EquimentsList camper={camper} />
      <div className={css.title}>Vehicle details</div>
      <ul>
        <li>
          <div>Form</div>
          <div>{camper.form}</div>
        </li>

        <li>
          <div>Length</div>
          <div>{camper.form}</div>
        </li>
        <li>
          <div>Width</div>
          <div>{camper.form}</div>
        </li>
        <li>
          <div>Height</div>
          <div>{camper.form}</div>
        </li>
        <li>
          <div>Tank</div>
          <div>{camper.form}</div>
        </li>
        <li>
          <div>Consumption</div>
          <div>{camper.form}</div>
        </li>
      </ul>
    </div>
  );
};

export default CamperFeatures;
