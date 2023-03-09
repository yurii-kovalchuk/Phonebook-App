import { Contact } from 'components/Contact/Contact';
import { List } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  const vivsibleContacts = filteredContacts();

  return (
    <List>
      {vivsibleContacts.map(contact => (
        <Contact key={contact.id} info={contact} />
      ))}
    </List>
  );
};
