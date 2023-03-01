import { Link } from 'react-router-dom';

export const AppBar = () => {
  return (
    <header>
      <p>Home</p>
      <p>Login/Register component</p>
      <Link to="/phonebook">Phonebook</Link>
      <br />
      <Link to="/login">login</Link>
      <br />
      <Link to="/register">register</Link>
    </header>
  );
};
