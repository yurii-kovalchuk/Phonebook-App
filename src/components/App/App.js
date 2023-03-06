import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Phonebook } from 'pages/Phonebook/Phonebook';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { refresh } from 'redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <ToastContainer autoClose={1000} position="top-center" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="phonebook" element={<Phonebook />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
