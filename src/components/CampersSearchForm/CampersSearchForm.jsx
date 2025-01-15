import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import css from "./CampersSearchForm.module.css";

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
        <Form className={css.form} style={{ display: "block" }}>
          <div className={css.formField}>
            <label htmlFor="location">Location</label>
            <div className={css.inputWrap}>
              <Field
                id="location"
                name="location"
                placeholder="Location"
              ></Field>
            </div>
            <ErrorMessage name="location">
              {(msg) => <div className={css.error}>{msg}</div>}
            </ErrorMessage>
          </div>
          <span>Filters</span>
          <div className={css.label}>Vehicle equipment</div>
          <label>
            <Field type="checkbox" name="AC" />
            AC
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
          <div className={css.label}>Vehicle type</div>
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
          <button type="submit" className={css.btn}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CampersSearchForm;
