import {
  HomeAccent,
  HomeLink,
  HomeLoginBtn,
  HomeNavigate,
  HomeRegisterBtn,
  HomeTitle,
  HomeWrap,
} from './Home.styled';

export const Home = () => {
  return (
    <div>
      <HomeWrap>
        <HomeTitle>
          Welcome to <HomeAccent>Phonebook App</HomeAccent>
        </HomeTitle>
        <HomeNavigate>
          <HomeLink to="/login">
            <HomeLoginBtn>Log in</HomeLoginBtn>
          </HomeLink>
          <HomeLink to="/register">
            <HomeRegisterBtn>Sign up</HomeRegisterBtn>
          </HomeLink>
        </HomeNavigate>
      </HomeWrap>
    </div>
  );
};
