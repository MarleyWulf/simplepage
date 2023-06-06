import React from 'react';
import { Box, Grid, Divider, Typography } from '@mui/material';
import Garage from '../images/garage.jpg';
import Paragraphs from '../components/Paragraphs';

const image = [
  {
    name: 'Mechanic',
    url: <img src={Garage} width="80%" />,
  },
];

const renderImage = image.map(image => {
  return image.url;
});

const renderName = image.map(image => {
  return image.name;
});

const About = () => {
  return (
    <Box>
      <Grid container>
        <Grid item sx={{ mb: 2 }}></Grid>
      </Grid>
      <Grid
        container
        sx={{ px: '10rem', py: '1rem' }}
        direction="row"
        display="flex"
      >
        <Grid item md={6}>
          {renderImage}
          <Typography>{renderName}</Typography>
        </Grid>
        <Grid item md={1}>
          <Divider
            style={{
              height: '33%',
              pr: '5px',
              width: '5px',
              borderColor: 'white',
            }}
            orientation="vertical"
            variant="middle"
            flexItem
          />
        </Grid>

        <Grid item md={5}>
          <Box display="flex">
            <Typography>
              <Paragraphs />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
