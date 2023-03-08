import { Formik } from 'formik';
import PropTypes from 'prop-types';
import {
  FormWrapper,
  Label,
  Input,
  Btn,
  LabelsWrap,
  BtnIcon,
} from './ContactForm.styled';

export const ContactForm = ({ addContacts }) => {
  const initialValues = {
    name: '',
    number: '',
  };
  const onSubmit = ({ name, number }, { resetForm }) => {
    addContacts(name, number);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <FormWrapper>
        <LabelsWrap>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
        </LabelsWrap>
        <Btn type="submit">
          <span>Add contact </span>
          <BtnIcon size={20} />
        </Btn>
      </FormWrapper>
    </Formik>
  );
};

ContactForm.proprTypes = {
  addContact: PropTypes.func.isRequired,
};
