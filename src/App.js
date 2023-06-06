import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { About, HomePage, Repairs, Navbar } from './pages';

const themeDark = createTheme({
  palette: {
    background: {
      default: '#222222',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <BrowserRouter>
        <Box>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/repairs" element={<Repairs />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
