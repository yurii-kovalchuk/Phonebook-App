import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
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
  BtnsWrap,
  BtnCancel,
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
    if (name === initialValues.name && number === initialValues.number) {
      toast.error('Please change contact information and try again', {
        autoClose: 2000,
      });
      return;
    }
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
        <BtnsWrap>
          <Btn type="submit">
            <span>Edit contact </span>
            <BtnIcon size={20} />
          </Btn>
          <BtnCancel
            type="button"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            <span>Cancel </span>
          </BtnCancel>
        </BtnsWrap>
      </FormWrapper>
    </Formik>
  );
};
