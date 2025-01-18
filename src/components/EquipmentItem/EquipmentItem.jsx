import css from "./EquipmentItem.module.css";
import Icon from "../Icon/Icon";
import { capitalize } from "../../utils/helpers/helpers";

const EquipmentItem = ({
  name,
  color = "#101828",
  iconColor = "#101828",
  size = 25,
  text,
}) => {
  const txt = text ? text : capitalize(name);
  return (
    <span className={css.item} style={{ color: color }}>
      <Icon name={name} color={iconColor} size={size} />
      {txt}
    </span>
  );
};

export default EquipmentItem;
