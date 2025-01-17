import { useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./DateFormField.module.css";
const DateFormField = ({ name = "", placeholder = "" }) => {
  const [field, meta, helpers] = useField(name);
  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePicker
      {...field}
      minDate={new Date()}
      selected={value}
      placeholderText={placeholder}
      className={css.date}
      calendarClassName={css.calendar}
      dayClassName={() => css.day}
      onChange={(date) => setValue(date)}
    />
  );
};

export default DateFormField;
