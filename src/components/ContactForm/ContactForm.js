import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import {
  FormWrapper,
  Label,
  Input,
  Btn,
  LabelsWrap,
  BtnIcon,
} from './ContactForm.styled';
import { addContact } from 'redux/contacts/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const initialValues = {
    name: '',
    number: '',
  };

  const addContacts = (name, number) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error(`Contact is already in list`);
    } else {
      dispatch(addContact({ name, number }));
    }
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
