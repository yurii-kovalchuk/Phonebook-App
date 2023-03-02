import { AuthNav } from 'components/AuthNav/AuthNav';
import { MainNav } from 'components/MainNav/MainNav';
import { UserNav } from 'components/UserNav/UserNav';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = false;
  return (
    <Header>
      <MainNav />
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </Header>
  );
};
