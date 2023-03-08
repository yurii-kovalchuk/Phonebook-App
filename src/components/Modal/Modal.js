import { UpdatingForm } from 'components/UpdatingForm/UpdatingForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/modal/slice';
import { ModalContent, Overlay } from './Modal.styled';

export const Modal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', onKeydown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeydown);
      document.body.style.overflow = 'unset';
    };
  });

  const onKeydown = e => {
    if (e.code === 'Escape') {
      dispatch(closeModal());
    }
  };

  const onOverlayClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(closeModal());
    }
  };

  return (
    <Overlay onClick={onOverlayClick}>
      <ModalContent>
        <UpdatingForm />
      </ModalContent>
    </Overlay>
  );
};
