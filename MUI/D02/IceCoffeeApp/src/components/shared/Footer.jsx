import React from 'react';
import { Box, Container, Grid, Typography, Stack, Link, IconButton } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FacebookIcon fontSize="small" />, url: '#' },
    { icon: <InstagramIcon fontSize="small" />, url: '#' },
    { icon: <TwitterIcon fontSize="small" />, url: '#' },
  ];

  const contactInfo = [
    { icon: <PlaceOutlinedIcon fontSize="small" sx={{ color: 'secondary.main' }} />, text: '123 Coffee Lane, Brewtown, CA 90210' },
    { icon: <PhoneOutlinedIcon fontSize="small" sx={{ color: 'secondary.main' }} />, text: '+1 (555) 123-4567' },
    { icon: <EmailOutlinedIcon fontSize="small" sx={{ color: 'secondary.main' }} />, text: 'hello@miltonscoffee.com' },
  ];

  const quickLinks = ['Home', 'Menu', 'Deals', 'Favourite'];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#2b1b10',
        color: '#f4f0eb',
        pt: { xs: 8, md: 10 },
        pb: 4,
        borderTop: '2px solid rgba(197, 168, 128, 0.15)',
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={3}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 900,
                  fontSize: '1.5rem',
                  letterSpacing: '1.5px',
                  color: 'secondary.main',
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                MILTON'S
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(244, 240, 235, 0.7)',
                  lineHeight: 1.8,
                  fontFamily: '"Poppins", sans-serif',
                  maxWidth: '320px',
                }}
              >
                Experience premium coffee crafted with hand-roasted organic beans and the finest artisanal chocolate base.
              </Typography>
              <Stack direction="row" spacing={1.5}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    component="a"
                    href={social.url}
                    sx={{
                      color: '#f4f0eb',
                      backgroundColor: 'rgba(244, 240, 235, 0.05)',
                      '&:hover': {
                        backgroundColor: 'secondary.main',
                        color: '#2b1b10',
                      },
                      transition: 'all 0.3s ease',
                      width: '36px',
                      height: '36px',
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 4, md: 2.5 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: '#f4f0eb',
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              {quickLinks.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  underline="none"
                  sx={{
                    color: 'rgba(244, 240, 235, 0.7)',
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '14px',
                    '&:hover': {
                      color: 'secondary.main',
                      paddingLeft: '4px',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: '#f4f0eb',
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Contact Us
            </Typography>
            <Stack spacing={2.5}>
              {contactInfo.map((info, index) => (
                <Stack key={index} direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                  {info.icon}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(244, 240, 235, 0.7)',
                      lineHeight: 1.5,
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    {info.text}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 4, md: 2.5 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: '#f4f0eb',
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Opening Hours
            </Typography>
            <Stack spacing={1.5}>
              <Box>
                <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                  Monday - Friday
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(244, 240, 235, 0.7)' }}>
                  7:00 AM - 9:00 PM
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                  Saturday - Sunday
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(244, 240, 235, 0.7)' }}>
                  8:00 AM - 10:00 PM
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 8,
            pt: 3,
            borderTop: '1px solid rgba(244, 240, 235, 0.08)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(244, 240, 235, 0.5)',
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            &copy; {currentYear} MILTON'S Coffee. All rights reserved. Developed with ❤️.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
