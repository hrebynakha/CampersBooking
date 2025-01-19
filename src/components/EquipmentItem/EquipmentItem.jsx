import { capitalize } from "../../utils/helpers/helpers";
import Icon from "../Icon/Icon";
import css from "./EquipmentItem.module.css";

const EquipmentItem = ({
  name,
  text,
  color = "#101828",
  iconColor = "#101828",
  size = 25,
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
