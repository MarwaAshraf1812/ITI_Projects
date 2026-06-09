import React from 'react';
import { Stack, IconButton, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function QuantitySelector({ value = 1, onChange, min = 1, max = 99 }) {
  const handleDecrement = () => {
    if (value > min && onChange) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max && onChange) {
      onChange(value + 1);
    }
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'primary.main',
        color: '#ffffff',
        borderRadius: '50px',
        py: 0.5,
        px: 1.5,
        width: 'fit-content',
      }}
    >
      <IconButton
        onClick={handleDecrement}
        disabled={value <= min}
        size="small"
        sx={{
          color: '#ffffff',
          '&.Mui-disabled': { color: 'rgba(255,255,255,0.3)' },
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
        }}
      >
        <RemoveIcon fontSize="small" />
      </IconButton>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 600,
          minWidth: '24px',
          textAlign: 'center',
          fontFamily: '"Poppins", sans-serif',
          userSelect: 'none'
        }}
      >
        {value}
      </Typography>
      <IconButton
        onClick={handleIncrement}
        disabled={value >= max}
        size="small"
        sx={{
          color: '#ffffff',
          '&.Mui-disabled': { color: 'rgba(255,255,255,0.3)' },
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
        }}
      >
        <AddIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
}

export default QuantitySelector;
