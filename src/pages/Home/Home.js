import { BsFillPersonPlusFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from 'redux/auth/selectors';
import {
  HomeAccent,
  HomeLink,
  HomeDivider,
  HomeLinkRegister,
  HomeLinkAddContact,
  HomeNavigate,
  HomeTitle,
  HomeWrap,
} from './Home.styled';

export const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectUserName);
  return (
    <div>
      {isLoggedIn ? (
        <HomeWrap>
          <HomeTitle>
            Welcome, {name} in <HomeAccent>Phonebook App</HomeAccent>
          </HomeTitle>
          <HomeNavigate>
            <HomeLinkAddContact to="/phonebook">
              <span>Add contact</span> <BsFillPersonPlusFill size="18px" />
            </HomeLinkAddContact>
          </HomeNavigate>
        </HomeWrap>
      ) : (
        <HomeWrap>
          <HomeTitle>
            Welcome to <HomeAccent>Phonebook App</HomeAccent>
          </HomeTitle>
          <HomeNavigate>
            <HomeLink to="/login">Log in</HomeLink>
            <HomeDivider />
            <HomeLinkRegister to="/register">Register</HomeLinkRegister>
          </HomeNavigate>
        </HomeWrap>
      )}
    </div>
  );
};
