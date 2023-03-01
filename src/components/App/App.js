import { Routes, Route } from 'react-router-dom';

import { Phonebook } from 'pages/Phonebook/Phonebook';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home/Home';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" elements={<RegisterPage />} />
        <Route path="/login" elements={<LoginPage />} />
        <Route path="/phonebook" elements={<Phonebook />} />
      </Route>
    </Routes>
  );
};
