import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './utils/theme';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <Navbar />
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Home />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
