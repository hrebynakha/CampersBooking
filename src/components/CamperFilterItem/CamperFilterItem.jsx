import { Field } from "formik";

import Icon from "../Icon/Icon";
import css from "./CamperFilterItem.module.css";

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
