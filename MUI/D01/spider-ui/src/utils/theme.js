import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a0a16',
      paper: '#13132e',
    },
    primary: {
      main: '#e63946',
    },
    secondary: {
      main: '#7209b7',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
      letterSpacing: '1px',
    },
  },
});

export default theme;