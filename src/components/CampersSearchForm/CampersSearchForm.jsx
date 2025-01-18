import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./CampersSearchForm.module.css";
import Icon from "../Icon/Icon";
import clsx from "clsx";
import CamperFilterItem from "../CamperFilterItem/CamperFilterItem";

const CampersSearchForm = ({ onSubmit }) => {
  const campersForm = {
    initialValues: {
      location: "",
    },
    schema: Yup.object({
      location: Yup.string()
        .min(3, "Too short")
        .max(30, "Must be 30 characters or less"),
    }),
    submit: (values) => {
      const filteredValues = Object.fromEntries(
        Object.entries(values).filter(([, value]) => value !== false)
      );
      onSubmit(filteredValues);
    },
  };
  return (
    <Formik
      initialValues={campersForm.initialValues}
      onSubmit={campersForm.submit}
      validationSchema={campersForm.schema}
    >
      <Form className={css.form}>
        <div className={css.location}>
          <label htmlFor="location" className={css.locationLabel}>
            Location
            <div className={css.inputWrap}>
              <Field
                id="location"
                name="location"
                placeholder="Location"
                className={css.locationInput}
              ></Field>
              <Icon
                name="location"
                color="black"
                size={20}
                className={css.icon}
              />
            </div>
          </label>
          <ErrorMessage name="location">
            {(msg) => <div className={css.error}>{msg}</div>}
          </ErrorMessage>
        </div>
        <span className={css.filtersTitle}>Filters</span>
        <div className={css.label}>Vehicle equipment</div>
        <div className={css.equipment}>
          <CamperFilterItem name="AC" text="AC" />
          <CamperFilterItem
            name="transmission"
            value="automatic"
            text="Automatic"
          />
          <CamperFilterItem name="TV" text="TV" />
          <CamperFilterItem name="kitchen" text="Kitchen" />
          <CamperFilterItem name="bathroom" text="Bathroom" />
        </div>
        <div className={css.label}>Vehicle type</div>

        <div
          role="group"
          aria-labelledby="my-radio-group"
          className={css.vehicle}
        >
          <CamperFilterItem
            type="radio"
            name="form"
            value="panelTruck"
            text="Van"
            iconId="grid1x2"
          />

          <CamperFilterItem
            type="radio"
            name="form"
            value="fullyIntegrated"
            text="Fully Integrated"
            iconId="grid2x2"
          />
          <CamperFilterItem
            type="radio"
            name="form"
            value="alcove"
            text="Alcove"
            iconId="grid3x3"
          />
        </div>
        <button type="submit" className={clsx("btnMain", "red", css.btn)}>
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default CampersSearchForm;
