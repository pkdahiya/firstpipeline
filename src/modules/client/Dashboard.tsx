import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
// import { fetchAvailableServices } from '../../../redux/client/clientSlice';
// import { ServiceCard } from '../components/ServiceCard';
import { Box, Typography, Grid, CircularProgress } from '@mui/material';

const ClientDashboard = () => {
  const dispatch = useAppDispatch();
  // const { services, loading } = useAppSelector((state) => state?.client);

  useEffect(() => {
    //dispatch(fetchAvailableServices());
  }, [dispatch]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Available Services
      </Typography>
      {false ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {/* {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <ServiceCard service={service} />
            </Grid>
          ))} */}
           
        </Grid>
      )}
    </Box>
  );
};

export default ClientDashboard;