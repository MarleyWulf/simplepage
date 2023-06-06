import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
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

const picButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const renderImages = images.map(image => {
  return image.url;
});

const renderTitle = images.map(image => {
  return image.title;
});

const ImageButton = () => {
  return (
    <Grid container>
      <Grid item>{renderImages}</Grid>
      <Grid item>{renderTitle}</Grid>
    </Grid>
  );
};

export default ImageButton;
