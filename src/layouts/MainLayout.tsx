import { Outlet } from 'react-router-dom';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import AppBar from '../components/AppBar';
import Sidebar from '../components/Sidebar';
import { useAppSelector } from '../redux/hooks';

const MainLayout = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Box sx={{ display: 'flex' }}>
       {/* <CssBaseline enableColorScheme/> */}
      <AppBar />
      {user && <Sidebar role={ 'client' } />}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar /> {/* For proper spacing below app bar */}
        <Outlet />
      </Box>
    </Box>
  );
};

const drawerWidth = 240;

export default MainLayout;