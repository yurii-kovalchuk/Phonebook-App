import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { MainNavLink } from './MainNav.styled';

export const MainNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <MainNavLink to="/">Home</MainNavLink>
      {isLoggedIn && <MainNavLink to="/phonebook">Phonebook</MainNavLink>}
    </div>
  );
};
