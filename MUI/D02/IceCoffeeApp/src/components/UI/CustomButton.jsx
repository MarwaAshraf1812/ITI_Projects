import React from 'react';
import { Button } from '@mui/material';

function CustomButton({
  children,
  variant = 'primary',
  onClick,
  fullWidth = false,
  sx = {},
  ...props
}) {
  const getStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: 'secondary.main',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: 'primary.main',
            color: '#f4f0eb',
          },
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'primary.main',
          border: '1.5px solid rgba(74, 44, 17, 0.4)',
          '&:hover': {
            borderColor: 'primary.main',
            backgroundColor: 'rgba(74, 44, 17, 0.04)',
          },
        };
      case 'primary':
      default:
        return {
          backgroundColor: 'primary.main',
          color: '#f4f0eb',
          '&:hover': {
            backgroundColor: 'secondary.main',
            color: 'primary.main',
          },
        };
    }
  };

  return (
    <Button
      onClick={onClick}
      fullWidth={fullWidth}
      sx={{
        py: 1.2,
        px: 3,
        borderRadius: '50px',
        fontWeight: 600,
        textTransform: 'uppercase',
        fontSize: '0.85rem',
        letterSpacing: '1px',
        fontFamily: '"Poppins", sans-serif',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: 'scale(1)',
        '&:hover': {
          transform: 'scale(1.03)',
        },
        ...getStyles(),
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
