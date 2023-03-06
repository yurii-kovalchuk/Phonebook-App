import { AuthNav } from 'components/AuthNav/AuthNav';
import { MainNav } from 'components/MainNav/MainNav';
import { UserNav } from 'components/UserNav/UserNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <MainNav />
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </Header>
  );
};
