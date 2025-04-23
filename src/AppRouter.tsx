import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './navigation/PrivateRoute';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import Login from './modules/auth/Login';
import Signup from './modules/auth/Signin';
import ForgotPassword from './modules/auth/ForgotPassword';
import ClientDashboard from './modules/client/Dashboard';
import ProviderDashboard from './modules/provider/pages/Dashboard';
import Unauthorized from './components/Unauthorized';
import RequireAuth from './navigation/PrivateRoute'


// import AuthLayout from './layouts/AuthLayout';
// import MainLayout from './layouts/MainLayout';


// import ForgotPassword from './modules/auth/pages/ForgotPassword';
// import ClientDashboard from './modules/client/pages/Dashboard';
// import ProviderDashboard from './modules/provider/pages/Dashboard';
// import Unauthorized from './components/Unauthorized';
// import ServiceList from './modules/client/pages/ServiceList';
// import MyServices from './modules/provider/pages/MyServices';
// import Bookings from './modules/provider/pages/Bookings';
// import Profile from './modules/shared/pages/Profile';


const Router = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>

      {/* Client Routes */}
      <Route
        element={
          <RequireAuth allowedRoles={['client']}>
            <MainLayout />
          </RequireAuth>
        }
      >
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        {/* <Route path="/client/services" element={<ServiceList />} />
        <Route path="/client/profile" element={<Profile />} /> */}
      </Route>

      {/* Provider Routes */}
      <Route
        element={
          <RequireAuth allowedRoles={['provider']}>
            <MainLayout />
          </RequireAuth>
        }
      >
        <Route path="/provider/dashboard" element={<ProviderDashboard />} />
        {/* <Route path="/provider/services" element={<MyServices />} />
        <Route path="/provider/bookings" element={<Bookings />} />
        <Route path="/provider/profile" element={<Profile />} /> */}
      </Route>

      {/* Shared Routes */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default Router;