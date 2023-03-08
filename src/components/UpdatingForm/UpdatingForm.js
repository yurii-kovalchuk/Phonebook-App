import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { selectModalIdx } from 'redux/modal/selectors';
import { closeModal } from 'redux/modal/slice';
import {
  FormWrapper,
  Label,
  Input,
  Btn,
  LabelsWrap,
  BtnIcon,
} from './UpdatingForm.styled';

export const UpdatingForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const id = useSelector(selectModalIdx);
  const currentContact = contacts.find(contact => contact.id === id);

  const initialValues = {
    name: currentContact.name,
    number: currentContact.number,
  };
  const onSubmit = ({ name, number }, { resetForm }) => {
    dispatch(updateContact([id, { name, number }]));
    resetForm();
    dispatch(closeModal());
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
          <span>Edit contact </span>
          <BtnIcon size={20} />
        </Btn>
      </FormWrapper>
    </Formik>
  );
};
