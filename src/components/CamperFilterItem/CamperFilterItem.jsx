import { Field } from "formik";
import css from "./CamperFilterItem.module.css";
import Icon from "../Icon/Icon";
const CamperFilterItem = ({
  name,
  text,
  value = "",
  iconId = "",
  type = "checkbox",
  size = 32,
  color = "black",
}) => {
  return (
    <label className={css.checkboxLabel}>
      <Field type={type} name={name} {...(value && { value })} />
      <div className={css.checkboxContent}>
        <Icon name={iconId ? iconId : name} color={color} size={size} />
        <span>{text}</span>
      </div>
    </label>
  );
};

export default CamperFilterItem;
