import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Typography,
  Button,
  Alert,
  Divider,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import VerticalDivider from '../components/VerticalDivider';

const Repairs = () => {
  const [alert, setAlert] = useState(false);
  const [values, setValues] = useState({ name: '', number: '', email: '' });

  const buttonClicked = () => {
    // return alert('clicked');
    setAlert(true);

    return (
      // <Alert variant="outlined" severity="success">
      //   Contact Submitted
      // </Alert>
      console.log('Alert is true')
    );
  };

  const alertContent = () => {
    return (
      <Alert variant="outlined" severity="success" sx={{ mt: 2 }}>
        Submitted
        <CloseIcon
          sx={{ color: 'red', alignContent: 'right' }}
          fontSize="inherit"
          onClick={() => {
            setAlert(false);
          }}
        />
      </Alert>
    );
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item sx={{ pb: 2 }}>
        <Typography variant="h2">Repairs and Maintenance</Typography>
      </Grid>
      <Grid item sx={{ pb: 2 }}>
        Contact
      </Grid>

      <VerticalDivider />

      {/* <Grid item>202-918-2132 </Grid> */}

      {/* <Grid item>unknown@mail.com</Grid> */}

      <Grid item sx={{ pb: 10 }}></Grid>
      <Grid item>
        <TextField value={values.name} label="Name" sx={{ mx: 2 }} />
        <TextField value={values.number} label="Phone Number" sx={{ mx: 2 }} />
        <TextField value={values.email} label="E-mail" sx={{ mx: 2 }} />
      </Grid>
      <Grid item sx={{ mt: 4 }}>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
        />
      </Grid>
      <Grid item>
        <Button
          type="submit"
          onClick={buttonClicked}
          variant="outlined"
          sx={{ marginTop: 2 }}
        >
          Submit
        </Button>
      </Grid>

      <Grid item>{alert ? alertContent() : console.log('didnt work')}</Grid>
    </Grid>
  );
};

export default Repairs;
