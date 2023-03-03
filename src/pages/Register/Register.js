import {
  RegisterWrap,
  RegisterTitle,
  RegisterAccent,
  RegisterLabel,
  RegisterInput,
  RegisterBtn,
} from './Register.styled';

export const Register = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.dir({
      name: e.currentTarget.elements.name.value,
      email: e.currentTarget.elements.email.value,
      password: e.currentTarget.elements.password.value,
    });
    e.currentTarget.reset();
  };
  return (
    <RegisterWrap>
      <RegisterTitle>
        Create a <RegisterAccent>Phonebook App</RegisterAccent> account
      </RegisterTitle>
      <form onSubmit={handleSubmit}>
        <RegisterLabel>
          Name
          <RegisterInput type="name" name="name" required />
        </RegisterLabel>

        <RegisterLabel>
          Email
          <RegisterInput type="email" name="email" required />
        </RegisterLabel>

        <RegisterLabel>
          Password
          <RegisterInput type="password" name="password" required />
        </RegisterLabel>
        <RegisterBtn type="submit">Log in</RegisterBtn>
      </form>
    </RegisterWrap>
  );
};
