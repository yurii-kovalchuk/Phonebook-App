import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  LoginWrap,
  LoginTitle,
  LoginAccent,
  LoginLabel,
  LoginInput,
  LoginBtn,
} from './Login.styled';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <LoginWrap>
      <LoginTitle>
        Log in to <LoginAccent>Phonebook App</LoginAccent>
      </LoginTitle>
      <form onSubmit={handleSubmit}>
        <LoginLabel>
          Email
          <LoginInput type="email" name="email" required />
        </LoginLabel>

        <LoginLabel>
          Password
          <LoginInput type="password" name="password" required />
        </LoginLabel>
        <LoginBtn type="submit">Log in</LoginBtn>
      </form>
    </LoginWrap>
  );
};
