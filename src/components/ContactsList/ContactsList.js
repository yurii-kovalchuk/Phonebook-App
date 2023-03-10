import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { List } from './ContactsList.styled';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <List>
      {visibleContacts.map(contact => (
        <Contact key={contact.id} info={contact} />
      ))}
    </List>
  );
};
