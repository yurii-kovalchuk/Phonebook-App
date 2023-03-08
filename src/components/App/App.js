import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { Layout } from 'components/Layout/Layout';

const Home = lazy(() => import('../../pages/Home/Home.js'));
const Register = lazy(() => import('../../pages/Register/Register.js'));
const Login = lazy(() => import('../../pages/Login/Login.js'));
const Phonebook = lazy(() => import('../../pages/Phonebook/Phonebook.js'));

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
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo={'/phonebook'}
                  component={<Register />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/phonebook"
                  component={<Login />}
                />
              }
            />
            <Route
              path="phonebook"
              element={
                <PrivateRoute redirectTo="/login" component={<Phonebook />} />
              }
            />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
