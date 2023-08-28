import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { StyledForm, Label, ErrorMsg } from './AddContactForm.styled';

const phonePattern = /^\d{3}-\d{2}-\d{2}$/;

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  number: Yup.string()
    .matches(phonePattern, 'Invalid phone number format. Use XXX-XX-XX.')
    .required('Required'),
});

export const AddContactForm = ({ onAdd }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={FormSchema}
        onSubmit={(values, actions) => {
            onAdd(values);
            actions.resetForm();
        }}
      >
        <StyledForm>
          <Label>
            Name
            <Field name="name" type="text" />
            <ErrorMsg name="name" component="div" />
          </Label>

          <Label>
            Number
            <Field name="number" type="tel" />
            <ErrorMsg name="number" component="div" />
          </Label>

          <button type="submit">Add contact</button>
        </StyledForm>
      </Formik>
    </div>
  );
};
