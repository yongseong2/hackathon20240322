import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../store/store';
import { RoutesNames } from './routes_names';

const ProtectedRoute = () => {
  const location = useLocation();
  const { isAuthenticated } = useAppSelector(state => state.user);

  if (!isAuthenticated) {
    return (
      <Navigate
        to={RoutesNames.home}
        state={{ from: location.pathname }}
        replace
      />
    );
  }
  return <Outlet />;
};

export default ProtectedRoute;
