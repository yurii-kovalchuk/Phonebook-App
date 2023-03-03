import {
  LoginWrap,
  LoginTitle,
  LoginLabel,
  LoginInput,
  LoginBtn,
} from './Login.styled';

export const Login = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.dir({
      email: e.currentTarget.elements.email.value,
      password: e.currentTarget.elements.password.value,
    });
    e.currentTarget.reset();
  };
  return (
    <LoginWrap>
      <LoginTitle>Log in to Phonebook</LoginTitle>
      <form onSubmit={handleSubmit}>
        <LoginLabel>
          Email
          <LoginInput type="email" name="email" />
        </LoginLabel>

        <LoginLabel>
          Password
          <LoginInput type="password" name="password" />
        </LoginLabel>
        <LoginBtn type="submit">Log in</LoginBtn>
      </form>
    </LoginWrap>
  );
};
