import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Phonebook } from 'pages/Phonebook/Phonebook';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { refresh } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from 'components/RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <ToastContainer autoClose={1000} position="top-center" />
      {isRefreshing ? (
        <p>Refreshing user...</p>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="register" element={<Register />} /> */}
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo={'/phonebook'}
                  component={<Register />}
                />
              }
            />
            {/* <Route path="login" element={<Login />} /> */}
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/phonebook"
                  component={<Login />}
                />
              }
            />
            <Route path="phonebook" element={<Phonebook />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
