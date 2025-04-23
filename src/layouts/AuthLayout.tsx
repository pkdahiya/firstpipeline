import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import AuthBackground from '../logo.svg';

const AuthLayout = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${AuthBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
       {/* <CssBaseline enableColorScheme/> */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 450,
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
          mx: 2,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AuthLayout;