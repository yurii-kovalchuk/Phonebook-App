import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUserEmail } from 'redux/auth/selectors';
import { LogOutBtn, LogOutIcon, UserWrap } from './UserNav.styled';

export const UserNav = () => {
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <UserWrap>
      <span>{userEmail}</span>
      <LogOutBtn onClick={handleClick}>
        <span>Log out</span>
        <LogOutIcon />
      </LogOutBtn>
    </UserWrap>
  );
};
