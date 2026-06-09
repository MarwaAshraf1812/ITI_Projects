import React from 'react';
import { Box, Container, Typography, TextField, Button, Stack } from "@mui/material";
import contactImg from "../../assets/chocolate_coffee_mockup-removebg-preview.png";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Milton\'s newsletter!');
  };

  return (
    <Container maxWidth="xl" sx={{ my: 10 }}>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          borderRadius: '32px',
          px: { xs: 4, md: 8 },
          py: { xs: 6, md: 5 },
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 6,
          boxShadow: '0px 20px 40px rgba(74, 44, 17, 0.15)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box sx={{ width: { xs: '100%', md: '55%' }, zIndex: 2 }}>
          <Stack spacing={2.5} alignItems={{ xs: 'center', md: 'flex-start' }} textAlign={{ xs: 'center', md: 'left' }}>
            <Typography
              variant="overline"
              sx={{
                color: 'secondary.main',
                fontWeight: 800,
                letterSpacing: '2px',
                fontSize: '13px',
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              NEWSLETTER
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                color: '#f4f0eb',
                fontSize: { xs: '28px', md: '40px' },
                fontFamily: '"Poppins", sans-serif',
                lineHeight: 1.25,
              }}
            >
              Get New Updates & Discount Offers
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(244, 240, 235, 0.7)',
                fontSize: '15px',
                fontFamily: '"Poppins", sans-serif',
                lineHeight: 1.6,
                maxWidth: '500px',
              }}
            >
              Subscribe to our newsletter to receive updates on new products, special discounts, and coffee recipes!
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                width: '100%',
                gap: 2,
                pt: 1.5,
              }}
            >
              <TextField
                placeholder="Your Email Address"
                variant="outlined"
                fullWidth
                required
                type="email"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  input: {
                    color: '#f4f0eb',
                    fontFamily: '"Poppins", sans-serif',
                    padding: '16px 20px',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(244, 240, 235, 0.2)',
                      borderRadius: '12px',
                    },
                    '&:hover fieldset': {
                      borderColor: 'secondary.main',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'secondary.main',
                      borderWidth: '1.5px',
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: 'secondary.main',
                  color: 'primary.main',
                  fontWeight: 800,
                  fontSize: '14px',
                  fontFamily: '"Poppins", sans-serif',
                  px: 4,
                  py: { xs: 1.8, sm: 0 },
                  borderRadius: '12px',
                  whiteSpace: 'nowrap',
                  boxShadow: 'none',
                  '&:hover': {
                    bgcolor: '#b3956b',
                    boxShadow: '0px 4px 15px rgba(197, 168, 128, 0.3)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                SUBSCRIBE
              </Button>
            </Box>
          </Stack>
        </Box>

        <Box
          sx={{
            width: { xs: '65%', sm: '45%', md: '38%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Box
            component="img"
            src={contactImg}
            alt="Chocolate Coffee Mockup"
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '380px',
              objectFit: 'contain',
              filter: 'drop-shadow(0px 15px 30px rgba(0,0,0,0.15))',
              animation: 'floatContact 6s ease-in-out infinite',
            }}
          />

          <style>{`
            @keyframes floatContact {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0px); }
            }
          `}</style>
        </Box>
      </Box>
    </Container>
  );
}

export default Contact;