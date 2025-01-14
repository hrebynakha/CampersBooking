import css from "./EquipmentItem.module.css";
import Icon from "../Icon/Icon";
import { capitalize } from "../../utils/helpers/helpers";

const EquipmentItem = ({ name, color = "black", size = 25, text }) => {
  const txt = text ? text : capitalize(name);
  return (
    <span className={css.item}>
      <Icon name={name} color={color} size={size} />
      {txt}
    </span>
  );
};

export default EquipmentItem;
