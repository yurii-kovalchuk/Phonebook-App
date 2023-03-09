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
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { selectFilter } from 'redux/filter/selectors';

const Phonebook = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  const vivsibleContacts = filteredContacts();

  return (
    <PhonebookWrap>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length === 0 ? <p>Your contacts will be here...</p> : null}
      {vivsibleContacts.length === 0 && contacts.length !== 0 ? (
        <p>Sorry! There are no contacts with this name</p>
      ) : (
        <ContactsList contacts={vivsibleContacts} />
      )}
    </PhonebookWrap>
  );
};

export default Phonebook;
