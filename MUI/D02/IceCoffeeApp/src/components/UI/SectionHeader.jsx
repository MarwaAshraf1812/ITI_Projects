import React from 'react';
import { Box, Typography } from '@mui/material';

function SectionHeader({
  title,
  subtitle,
  tag,
  align = 'center',
  sx = {},
}) {
  const isCentered = align === 'center';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isCentered ? 'center' : 'flex-start',
        textAlign: align,
        mb: 6,
        ...sx,
      }}
    >
      {tag && (
        <Typography
          variant="overline"
          sx={{
            color: 'secondary.main',
            fontWeight: 800,
            letterSpacing: '2px',
            fontSize: '13px',
            fontFamily: '"Poppins", sans-serif',
            mb: 1.5,
            display: 'block',
          }}
        >
          {tag}
        </Typography>
      )}

      <Typography
        component="h2"
        variant="h2"
        sx={{
          fontWeight: 900,
          color: 'primary.main',
          fontFamily: '"Poppins", sans-serif',
          lineHeight: 1.25,
          fontSize: { xs: '28px', sm: '36px', md: '42px' },
          maxWidth: '650px',
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            fontSize: '16px',
            fontFamily: '"Poppins", sans-serif',
            lineHeight: 1.7,
            mt: 2,
            maxWidth: '600px',
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

export default SectionHeader;
