import MaskedInput from "react-text-mask";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
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
    }),
    submit: (values, { resetForm }) => {
      console.log(values);
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
      {({ values, setFieldValue }) => (
        <Form className={css.form}>
          <div className={css.formField}>
            <label htmlFor="name">Name</label>
            <div className={css.inputWrap}>
              <Field id="name" name="name" placeholder="Name"></Field>
            </div>
            <ErrorMessage name="name">
              {(msg) => <div className={css.error}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div className={css.formField}>
            <label htmlFor="email">email</label>
            <div className={css.inputWrap}>
              <Field type="email" name="email" placeholder="Email" />
            </div>
            <ErrorMessage name="email">
              {(msg) => <div className={css.error}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div className={css.formField}>
            <label htmlFor="bookingDate">Date</label>
            <div className={css.inputWrap}>
              <Field
                id="bookingDate"
                name="bookingDate"
                placeholder="bookingDate"
              ></Field>
            </div>
            <ErrorMessage name="bookingDate">
              {(msg) => <div className={css.error}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div className={css.formField}>
            <label htmlFor="comment">Comment</label>
            <div className={css.inputWrap}>
              <Field id="comment" name="comment" type="text"></Field>
            </div>
            <ErrorMessage name="comment">
              {(msg) => <div className={css.error}>{msg}</div>}
            </ErrorMessage>
          </div>
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
