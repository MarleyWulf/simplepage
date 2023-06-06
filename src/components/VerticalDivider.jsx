import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton, Typography } from '@mui/material';

// const socials = [
//   { name: 'Facebook', url: <a href="facebook.com" /> },
//   { name: 'Twitter', url: <a href="twitter.com" /> },
//   { name: 'Instagram', url: <a href="instagram.com" /> },
// ];

const VerticalDivider = () => {
  // const iconClick = label => {
  //   if (socials.name === label) {
  //     return socials.url;
  //   } else {
  //     return console.log('did not link');
  //   }
  // };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          // border: theme => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
        <Typography>202-918-2132</Typography>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            height: '35px',
            width: '2px',
            px: '3px',
            mr: '2px',
          }}
        />
        <Typography sx={{ pl: 1 }}>unknown@mail.com</Typography>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ height: '35px', width: '2px', px: '3px' }}
        />
        <IconButton onClick={() => window.open('https://www.facebook.com')}>
          <FacebookIcon label="Facebook" sx={{ fontSize: 'large' }} />
        </IconButton>
        <IconButton onClick={() => window.open('https://www.twitter.com')}>
          <TwitterIcon label="Twitter" sx={{ fontSize: 'large' }} />
        </IconButton>
        <IconButton onClick={() => window.open('https://www.instagram.com')}>
          <InstagramIcon label="Instagram" sx={{ fontSize: 'large' }} />
        </IconButton>
      </Box>
    </div>
  );
};

export default VerticalDivider;
