import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

export const PrivateRoute = ({ redirectTo = '/', component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  const shoudRedirect = !isLoggedIn && !isRefreshing;

  return shoudRedirect ? <Navigate to={redirectTo} /> : component;
};
