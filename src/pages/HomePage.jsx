import React from 'react';
import { Grid, Typography, CssBaseline, makeStyles } from '@mui/material';
import ImageCards from '../components/ImageCards';

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit pretium massa, quis rutrum urna cursus id. Sed feugiat fringilla sapien, ac venenatis orci laoreet a. Aliquam id tempor turpis. Aliquam et ultrices lorem. Curabitur placerat velit et sem rhoncus, at hendrerit sem ultrices. Ut.';

const HomePage = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
      md={12}
      sm={6}
    >
      <Grid item sx={{ pb: 10 }} md={6}>
        <Typography variant="h1" textAlign="center">
          Professional & Reliable Service
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2">What I Offer?</Typography>
      </Grid>
      <Grid item sx={{ px: 14, pb: 10 }}>
        <Typography textAlign="center">{content}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3">Repairs & Maintenance</Typography>
      </Grid>
      <Grid item sx={{ pt: 4, my: 3 }}>
        <ImageCards />
      </Grid>
    </Grid>
  );
};

export default HomePage;
