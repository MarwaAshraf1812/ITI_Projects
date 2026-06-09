import React, { useState } from 'react';
import { Box, Typography, Rating, Stack } from '@mui/material';
import CustomizeShowcase from '../UI/CustomizeShowcase';
import QuantitySelector from '../UI/QuantitySelector';
import OrderMenu from '../UI/OrderMenu';
import CustomButton from '../UI/CustomButton';

import cupWhite from '../../assets/cup_white_chocolate-removebg-preview.png';
import cupMilk from '../../assets/cup_milk_chocolate-removebg-preview.png';
import cupDark from '../../assets/cup_dark_chocolate-removebg-preview.png';

function CustomizeSection() {
  const [selectedIngredient, setSelectedIngredient] = useState('Milk');
  const [quantity, setQuantity] = useState(2);

  const options = [
    { id: 'White', label: 'White', image: cupWhite },
    { id: 'Milk', label: 'Milk', image: cupMilk },
    { id: 'Dark', label: 'Dark', image: cupDark },
  ];

  const getIngredientDescription = () => {
    switch (selectedIngredient) {
      case 'White':
        return 'Our White Chocolate mocha features a silky, sweet white cocoa base, perfectly balanced with freshly pulled espresso shots and steamed milk, topped with light fluffy whipped cream.';
      case 'Dark':
        return 'Our Dark Chocolate mocha delivers a bold, rich cocoa flavour, combining intense espresso shots with dark chocolate syrup, steamed milk, and a dusting of dark cocoa sprinkles.';
      case 'Milk':
      default:
        return 'Chocolate coffee, also known as a mocha, is a delightful drink that combines the rich flavors of chocolate with the invigorating taste of coffee. This classic combination can be enjoyed hot or cold, and is customizable to your preference.';
    }
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default', px: { xs: '4%', md: '8%' } , margin: '0 auto' }}>
      <OrderMenu />
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '50px',
          margin: '0 auto',
          pt: 4
        }}
      >
        <Box sx={{ width: { xs: '100%', md: '45%' }, display: 'flex', justifyContent: 'center' }}>
          <CustomizeShowcase
            options={options}
            selected={selectedIngredient}
            onChange={setSelectedIngredient}
          />
        </Box>
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Stack spacing={3.5}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                color: '#2b1b10',
                fontFamily: '"Poppins", sans-serif',
                lineHeight: 1.2,
                fontSize: { xs: '32px', md: '44px' },
              }}
            >
              MILTON'S CHOCO COFFEE
            </Typography>

            <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
              <Rating value={5} readOnly sx={{ color: '#c5a880' }} /> 
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  color: '#2b1b10',
                  fontSize: '1.25rem',
                }}
              >
                $1.2
              </Typography>
            </Stack>

            <Typography
              variant="body1"
              sx={{
                color: '#6e5a4b',
                lineHeight: 1.8,
                fontSize: '16px',
                fontFamily: '"Poppins", sans-serif',
                minHeight: '100px',
              }}
            >
              {getIngredientDescription()}
            </Typography>

            <Stack direction="row" spacing={3} sx={{ alignItems: 'center', pt: 2 }}>
              <QuantitySelector value={quantity} onChange={setQuantity} />
              <CustomButton
                variant="secondary"
                onClick={() => alert(`Added ${quantity} Milton's Choco Coffee (${selectedIngredient} chocolate) to cart!`)}
              >
                ADD TO CART
              </CustomButton>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default CustomizeSection;