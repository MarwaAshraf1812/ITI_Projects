import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Rating, Stack } from '@mui/material';
import CustomButton from './CustomButton';

function ProductCard({
  image,
  tag = 'Chocolate',
  name = 'Hand Roasted Hot Chocolate With Milk',
  price = '$7.0',
  rating = 5,
  onAddToCart,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: hovered ? '0px 12px 30px rgba(74, 44, 17, 0.15)' : '0px 4px 15px rgba(74, 44, 17, 0.04)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        border: '1px solid rgba(74, 44, 17, 0.05)',
        width: '100%',
        maxWidth: 320,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          pt: 3,
          px: 3,
          backgroundColor: '#ffffff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          height: '240px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: '12%',
            right: '12%',
            top: '15%',
            backgroundColor: 'primary.main',
            borderRadius: '120px 120px 0 0',
            zIndex: 1,
            transition: 'background-color 0.4s ease',
            ...(hovered && {
              backgroundColor: 'secondary.main',
            }),
          }}
        />

        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: '85%',
            height: '95%',
            objectFit: 'contain',
            zIndex: 2,
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: hovered ? 'scale(1.15) translateY(-5px)' : 'scale(1.05)',
          }}
        />
      </Box>

      <CardContent sx={{ pt: 2.5, px: 3, pb: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 1.5 }}>
          <Typography
            variant="caption"
            sx={{
              backgroundColor: '#f7ebda',
              color: 'primary.main',
              fontWeight: 700,
              px: 2,
              py: 0.6,
              borderRadius: '20px',
              display: 'inline-block',
              textTransform: 'uppercase',
              fontSize: '0.7rem',
              letterSpacing: '0.5px',
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            {tag}
          </Typography>
        </Box>

        <Typography
          variant="body1"
          sx={{
            fontWeight: 700,
            color: 'primary.main',
            lineHeight: 1.4,
            mb: 1.5,
            minHeight: '44px',
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          {name}
        </Typography>

        {rating > 0 && (
          <Rating
            name="read-only"
            value={rating}
            readOnly
            size="small"
            sx={{
              color: 'secondary.main',
              mb: 2.5,
            }}
          />
        )}

        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 'auto',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              color: 'primary.main',
              fontSize: '1.25rem',
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            {price}
          </Typography>

          <CustomButton
            variant={hovered ? 'primary' : 'outline'}
            onClick={onAddToCart}
            sx={{
              py: 0.8,
              px: 2,
              borderRadius: '20px',
              fontSize: '0.75rem',
            }}
          >
            Add To Cart
          </CustomButton>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
