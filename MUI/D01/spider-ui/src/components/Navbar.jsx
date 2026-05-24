import { Box, Typography } from '@mui/material';
import SpiderButton from './SpiderButton';

function Navbar() {
  return (
    <Box 
      component="nav"
      sx={{
        background: '',
        padding: '10px 50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 4,
        width: '100%',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Typography variant='h4' sx={{ color: 'white', fontWeight: 'bold' }}>
        SpiderMan
      </Typography>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <SpiderButton sx={{ backgroundColor: 'ff5e36', color: 'white', fontWeight: 'bold' }}>
          Login
        </SpiderButton>
        <SpiderButton variant='outlined' sx={{ borderColor: 'white', color: 'white', fontWeight: 'bold' }}>
          Register
        </SpiderButton>
      </Box>
    </Box>
  );
}

export default Navbar;
