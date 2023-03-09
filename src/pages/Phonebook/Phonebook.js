import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Filter } from 'components/Filter/Filter';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactsList } from '../../components/ContactsList/ContactsList';
import { PhonebookWrap } from './Phonebook.styled';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

const Phonebook = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PhonebookWrap>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsList />
    </PhonebookWrap>
  );
};

export default Phonebook;
