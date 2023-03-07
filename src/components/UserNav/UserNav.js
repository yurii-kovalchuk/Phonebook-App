import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUserName } from 'redux/auth/selectors';

export const UserNav = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <span>Hello, {userName} </span>
      <button onClick={handleClick}>Log Out</button>
    </div>
  );
};
