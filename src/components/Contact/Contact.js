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
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from 'redux/modal/slice';
import { deleteContact } from 'redux/contacts/operations';
import { Modal } from 'components/Modal/Modal';
import { selectIsModalOpen } from 'redux/modal/selectors';

export const Contact = ({ info: { id, name, number } }) => {
  const dispatch = useDispatch();
  const isModal = useSelector(selectIsModalOpen);

  return (
    <>
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

        <button
          type="button"
          onClick={() => {
            dispatch(openModal(id));
          }}
        >
          edit
        </button>
        <DeleteBtn
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          <MdDelete size={14} />
        </DeleteBtn>
      </Item>
      {isModal && <Modal />}
    </>
  );
};

Contact.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
