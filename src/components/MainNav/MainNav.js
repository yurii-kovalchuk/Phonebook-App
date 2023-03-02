import { MainNavLink } from './MainNav.styled';

export const MainNav = () => {
  return (
    <div>
      <MainNavLink to="/">Home</MainNavLink>
      <MainNavLink to="/phonebook">Phonebook</MainNavLink>
    </div>
  );
};
