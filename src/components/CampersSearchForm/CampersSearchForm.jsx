import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import css from "./CampersSearchForm.module.css";
import Icon from "../Icon/Icon";
import clsx from "clsx";

const CampersSearchForm = ({ onSubmit }) => {
  const campersForm = {
    initialValues: {
      location: "",
    },
    schema: Yup.object({
      location: Yup.string()
        .min(3, "too short")
        .max(30, "Must be 30 characters or less"),
    }),
    submit: (values) => {
      onSubmit(values);
    },
  };
  return (
    <Formik
      initialValues={campersForm.initialValues}
      onSubmit={campersForm.submit}
      validationSchema={campersForm.schema}
    >
      {({ values, setFieldValue }) => (
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
            <label>
              <div className={css.checkbox}>
                <Icon name="ac" color="black" size={32} />
                AC
              </div>
              <Field
                type="checkbox"
                name="AC"
                className={clsx(css.checkItem, "visuallyHidden")}
              />
            </label>
            <label>
              <Field type="checkbox" name="transmission" value="automatic" />
              Automatic
            </label>
            <label>
              <Field type="checkbox" name="kitchen" />
              Kithen
            </label>
            <label>
              <Field type="checkbox" name="TV" />
              TV
            </label>
            <label>
              <Field type="checkbox" name="bathroom" />
              Bathroom
            </label>
          </div>
          <div className={css.label}>Vehicle type</div>
          <div className={css.vehicle}>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="form" value="panelTruck" />
                Van
              </label>
              <label>
                <Field type="radio" name="form" value="fullyIntegrated" />
                Fully Integrated
              </label>
              <label>
                <Field type="radio" name="form" value="alcove" />
                Alcove
              </label>
            </div>
            <button type="submit" className={clsx("btnMain", "red", css.btn)}>
              Search
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CampersSearchForm;
