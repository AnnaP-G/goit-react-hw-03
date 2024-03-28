import { Field, Form, Formik } from "formik";

const FormInitialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={FormInitialValues} onSubmit={handleSubmit}>
      <Form>
        <label>
          <span>Name</span>
          <Field type="text" name="name" />
        </label>
        <label>
          <span>Number</span>
          <Field type="text" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
