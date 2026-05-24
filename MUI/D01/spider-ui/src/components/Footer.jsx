import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        py: 4,
        px: 2,
        mt: 'auto',
        borderTop: '1px solid rgba(255, 77, 90, 0.15)',
        textAlign: 'center'
      }}
    >
      <Box maxWidth="lg">
        <Typography variant="body1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
          Spider-Man Tech 🕸️
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Equipping neighborhood heroes with Stark-level gear.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 2 }}>
          <Link href="#" color="inherit" underline="hover">Web-Shooters</Link>
          <Link href="#" color="inherit" underline="hover">Suits</Link>
          <Link href="#" color="inherit" underline="hover">Drones</Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
