// import { TbLogout } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUserName } from 'redux/auth/selectors';
import { LogOutBtn, LogOutIcon, UserWrap } from './UserNav.styled';

export const UserNav = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <UserWrap>
      <span>Hi, {userName} </span>
      <LogOutBtn onClick={handleClick}>
        <span>Log out</span>
        <LogOutIcon />
      </LogOutBtn>
    </UserWrap>
  );
};
