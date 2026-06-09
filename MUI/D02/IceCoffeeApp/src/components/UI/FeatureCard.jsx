import React from 'react';
import { Box, Typography } from '@mui/material';

function FeatureCard({
  icon,
  title,
  variant = 'primary',
  onClick,
}) {
  const isPrimary = variant === 'primary';

  return (
    <Box
      onClick={onClick}
      sx={{
        backgroundColor: isPrimary ? 'primary.main' : 'secondary.main',
        color: isPrimary ? '#f4f0eb' : 'primary.main',
        borderRadius: '24px',
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        minHeight: '200px',
        width: '100%',
        maxWidth: '300px',
        margin: '0 auto',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: isPrimary
            ? '0px 10px 25px rgba(74, 44, 17, 0.3)'
            : '0px 10px 25px rgba(197, 168, 128, 0.35)',
        },
      }}
    >
      <Box
        sx={{
          mb: 2.5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '& svg': {
            fontSize: '3rem',
            color: isPrimary ? 'secondary.main' : 'primary.main',
          },
        }}
      >
        {icon}
      </Box>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontFamily: '"Poppins", sans-serif',
          fontSize: '1.1rem',
          letterSpacing: '0.5px',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default FeatureCard;
