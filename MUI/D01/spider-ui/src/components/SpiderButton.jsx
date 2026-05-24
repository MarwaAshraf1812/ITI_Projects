import React from 'react';
import { Button } from '@mui/material';

function SpiderButton({variant = 'contained', children, sx, ...props}) {
  return (
    <Button variant={variant} sx={{
      borderRadius: '8px',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      px: 4,
      py: 1,
      ...sx
    }}
    {...props}
    >
      {children}
    </Button>
  );
}

export default SpiderButton;