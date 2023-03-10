import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Filter } from 'components/Filter/Filter';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactsList } from '../../components/ContactsList/ContactsList';
import { PhonebookWrap } from './Phonebook.styled';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

const Phonebook = () => {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
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
      {contacts.length === 0 ? <p>Your contacts will be here...</p> : null}
      {visibleContacts.length === 0 && contacts.length !== 0 ? (
        <p>Sorry! There are no contacts with this name</p>
      ) : (
        <ContactsList />
      )}
    </PhonebookWrap>
  );
};

export default Phonebook;
