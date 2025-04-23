import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { User, UserRole } from '../types';
import { JSX } from 'react';

interface RequireAuthProps {
  children: JSX.Element;
  allowedRoles: UserRole[];
}

const PrivateAuth = ({ children, allowedRoles }: RequireAuthProps) => {
  const { user, token } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // if (user && !allowedRoles.includes(user?.role)) {
  //   return <Navigate to="/unauthorized" replace />;
  // }

  return children;
};

export default PrivateAuth;