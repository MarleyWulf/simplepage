import React from 'react';
import { ButtonGroup, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
// import { About, HomePage, Repairs } from './pages';

const Navbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& > *': {
          m: 1,
          backgroundColor: 'white',
          width: '100%',
          // px: 79,
          // py: 2,
        },
      }}
    >
      <ButtonGroup variant="text">
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/repairs">
          <Button>Contact</Button>
        </Link>
        <Link to="/about">
          <Button>About</Button>
        </Link>
      </ButtonGroup>
    </Box>
  );
};

export default Navbar;
