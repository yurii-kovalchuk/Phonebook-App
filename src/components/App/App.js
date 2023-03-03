import { Routes, Route } from 'react-router-dom';

import { Phonebook } from 'pages/Phonebook/Phonebook';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home/Home';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { Login } from 'pages/LoginPage/Login';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<Login />} />
        <Route path="phonebook" element={<Phonebook />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
