import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import DateFormField from "../DateFormField/DateFormField";
import css from "./BookingForm.module.css";

const BookingForm = ({ onSubmit }) => {
  const contactForm = {
    initialValues: {
      name: "",
      email: "",
      bookingDate: "",
      comment: "",
    },
    schema: Yup.object({
      name: Yup.string()
        .min(3, "too short")
        .max(30, "Must be 30 characters or less")
        .required("Required"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
          "Email format must be email@example.com"
        ),
      bookingDate: Yup.date()
        .min(new Date(), "Select a date between today")
        .required("Required"),
    }),
    submit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  };

  return (
    <Formik
      initialValues={contactForm.initialValues}
      onSubmit={contactForm.submit}
      validationSchema={contactForm.schema}
    >
      <Form className={css.form}>
        <div className={css.formField}>
          <label htmlFor="name">Name</label>
          <div className={css.inputWrap}>
            <Field id="name" name="name" placeholder="Name*"></Field>
          </div>
          <ErrorMessage name="name">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>
        </div>
        <div className={css.formField}>
          <label htmlFor="email">email</label>
          <div className={css.inputWrap}>
            <Field type="email" name="email" placeholder="Email*" />
          </div>
          <ErrorMessage name="email">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>
        </div>

        <div className={css.formField}>
          <label htmlFor="bookingDate">Date</label>

          <DateFormField
            name="bookingDate"
            id="bookingDate"
            placeholder="Booking date*"
          />

          <ErrorMessage name="bookingDate">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>
        </div>
        <div className={css.formField}>
          <label htmlFor="comment">Comment</label>
          <div className={css.inputWrap}>
            <Field
              id="comment"
              name="comment"
              type="text"
              component="textarea"
              placeholder="Comment"
              className={css.textarea}
            />
          </div>
          <ErrorMessage name="comment">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>
        </div>
        <div className={css.btnWrap}>
          <button type="submit" className="btnMain red">
            Send
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default BookingForm;
