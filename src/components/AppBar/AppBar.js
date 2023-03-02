import { AuthNav } from 'components/AuthNav/AuthNav';
import { MainNav } from 'components/MainNav/MainNav';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <MainNav />
      <AuthNav />
      {/* <UserNav /> or <AuthNav /> */}
    </Header>
  );
};
