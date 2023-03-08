import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';

import {
  RegisterWrap,
  RegisterTitle,
  RegisterAccent,
  RegisterLabel,
  RegisterInput,
  RegisterBtn,
} from './Register.styled';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
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
        <RegisterBtn type="submit">Register</RegisterBtn>
      </form>
    </RegisterWrap>
  );
};

export default Register;
