import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import {
  Item,
  NameWrapper,
  Letters,
  Text,
  Phone,
  DeleteBtn,
} from './Contact.styled';

export const Contact = ({ info: { id, name, number }, onDelete }) => {
  return (
    <Item>
      <NameWrapper>
        <Letters>
          {name
            .split(' ')
            .map(item => item.slice(0, 1))
            .join('')
            .toUpperCase()}
        </Letters>
        <div>
          <Text>{name}</Text>
          <Phone href={`tel: &{number}`}>
            <BsTelephoneFill size={12} /> {number}
          </Phone>
        </div>
      </NameWrapper>
      <DeleteBtn
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        <MdDelete size={14} />
      </DeleteBtn>
    </Item>
  );
};

Contact.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
