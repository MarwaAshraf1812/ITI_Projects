import React, { useState } from 'react';
import { Box, Typography, Stack, IconButton, Menu, MenuItem, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function Navbar() {
  const navLinks = ['Home', 'Menu', 'Deals', 'Favourite'];
  const [anchorEl, setAnchorEl] = useState(null);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMobileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setAnchorEl(null);
  };

  const isMobileMenuOpen = Boolean(anchorEl);

  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: '4%', md: '8%' },
        py: 2.5,
        bgcolor: '#f4f0eb',
        borderBottom: '1px solid rgba(74, 44, 17, 0.08)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: '900',
          color: '#2b1b10',
          letterSpacing: '1.5px',
          fontSize: { xs: '18px', md: '22px' }
        }}
      >
        MILTON'S
      </Typography>

      {/* Desktop Navigation Links */}
      <Stack
        direction="row"
        spacing={4}
        alignItems='center'
        sx={{ display: { xs: 'none', md: 'flex' } }}
      >
        {
          navLinks.map((link, idx) => (
            <Typography
              key={idx}
              sx={{
                fontWeight: idx === 0 ? 900 : 500,
                color: '#2b1b10',
                cursor: 'pointer',
                fontSize: '15px',
                position: 'relative',
                pb: '2px',
                borderBottom: idx === 0 ? '2px solid #c5a880' : 'none',
                '&:hover': { color: '#c5a880', borderBottom: '2px solid #c5a880' }
              }}
            >
              {link}
            </Typography>
          ))
        }
      </Stack>

      {/* Action Icons */}
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
      >
        <IconButton sx={{ color: '#2b1b10' }}>
          <ShoppingBagOutlinedIcon />
        </IconButton>
        <IconButton
          onClick={handleMobileMenuOpen}
          sx={{
            color: '#2b1b10',
            display: { xs: 'flex', md: 'none' }
          }}
        >
          <MenuIcon />
        </IconButton>
      </Stack>

      {/* Mobile Menu Dropdown */}
      <Menu
        anchorEl={anchorEl}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        PaperProps={{
          sx: {
            bgcolor: '#f4f0eb',
            minWidth: '180px',
            boxShadow: '0px 8px 16px rgba(0,0,0,0.1)',
            borderRadius: '8px'
          }
        }}
      >
        {navLinks.map((link) => (
          <MenuItem
            key={link}
            onClick={handleMobileMenuClose}
            sx={{ color: '#2b1b10', fontWeight: '500', py: 1.5 }}
          >
            {link}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default Navbar;
