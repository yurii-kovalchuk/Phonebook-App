import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi';
import { BsTelephoneFill } from 'react-icons/bs';
import {
  Item,
  NameWrapper,
  BtnWrapper,
  Letters,
  Text,
  Phone,
  DeleteBtn,
  EditBtn,
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
        <BtnWrapper>
          <EditBtn
            type="button"
            title="Edit"
            onClick={() => {
              dispatch(openModal(id));
            }}
          >
            <FiEdit2 size={14} />
          </EditBtn>
          <DeleteBtn
            type="button"
            title="Delete"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            <MdDelete size={14} />
          </DeleteBtn>
        </BtnWrapper>
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
