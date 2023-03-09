import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { List } from './ContactsList.styled';

export const ContactsList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Contact key={contact.id} info={contact} />
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
