import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f4f0eb',
      paper: '#ffffff',
    },
    primary: {
      main: '#4a2c11',
    },
    secondary: {
      main: '#c5a880',
    },
    text: {
      primary: '#2b1b10',
      secondary: '#6e5a4b',
    }
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h2: {
      fontWeight: 800,
      color: '#2b1b10',
    },
    h5: {
      fontWeight: 700,
    }
  },
});

export default theme;