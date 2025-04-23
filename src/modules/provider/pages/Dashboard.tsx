import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

import { Box, Typography, Grid, CircularProgress } from '@mui/material';

const ProviderDashboard = () => {
  const dispatch = useAppDispatch();
  //const { services, loading } = useAppSelector((state) => state?.provider);

  useEffect(() => {
    //dispatch(fetchProviderServices());
  }, [dispatch]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        My Services
      </Typography>
      {/* {loading ? (
        <CircularProgress />
      ) : (
        // <Grid container spacing={3}>
        //   {services.map((service) => (
        //     <Grid item xs={12} sm={6} md={4} key={service.id}>
        //       <ServiceCard service={service} />
        //     </Grid>
        //   ))}
        // </Grid>
        <h1>Dashboard screen</h1>
      )} */}
    </Box>
  );
};

export default ProviderDashboard;