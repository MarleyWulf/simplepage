import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Grid,
} from '@mui/material';
import Brake from '../images/brake.jpg';
import Diesel from '../images/diesel.jpg';
import Mower from '../images/mower.jpg';
import OilChange from '../images/oilchange.jpg';

const images = [
  {
    url: <img src={Brake} />,
    title: 'Brake',
    width: '40%',
  },
  {
    url: <img src={Diesel} />,
    title: 'Diesel',
    width: '30%',
  },
  {
    url: <img src={Mower} />,
    title: 'Mower',
    width: '30%',
  },
  {
    url: <img src={OilChange} />,
    title: 'Oil',
    width: '30%',
  },
];

const renderImages = images.map(image => {
  return image.url;
});

const renderTitle = images.map(image => {
  return image.title;
});

const style = {
  color: 'black',
};

const ImageCards = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Card sx={{ mx: '1em', my: '10px' }}>
          {/* <CardHeader>ImageCards</CardHeader> */}
          <CardMedia>
            <img src={Brake} height="200" width="315" />
          </CardMedia>
          <CardContent>
            <Typography sx={style}>Brakes</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ mx: '1em', my: '10px' }}>
          {/* <CardHeader>ImageCards</CardHeader> */}
          <CardMedia>
            <img src={Diesel} height="200" width="315" />
          </CardMedia>
          <CardContent>
            <Typography sx={style}>Diesel</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ mx: '1em', my: '10px' }}>
          {/* <CardHeader>ImageCards</CardHeader> */}
          <CardMedia>
            <img src={Mower} height="200" width="315" />
          </CardMedia>
          <CardContent>
            <Typography sx={style}>Lawn Equipment</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ mx: '1em', my: '10px' }}>
          {/* <CardHeader>ImageCards</CardHeader> */}
          <CardMedia>
            <img src={OilChange} height="200" width="315" />
          </CardMedia>
          <CardContent>
            <Typography sx={style}>Oil Change</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ImageCards;
