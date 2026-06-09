import React from 'react';
import { Box, Typography } from "@mui/material";
import FeatureCard from "../UI/FeatureCard";
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';

function About() {
  const processData = [
    {
      icon: <LocalCafeOutlinedIcon />,
      text: 'Hand Roasted',
      variant: 'primary'
    },
    {
      icon: <HandshakeOutlinedIcon />,
      text: 'Direct Trade',
      variant: 'secondary'
    },
    {
      icon: <SpaOutlinedIcon />,
      text: 'Organic Taste',
      variant: 'primary'
    },
  ];

  return (
    <Box sx={{ my: 10, px: { xs: '4%', md: '8%' } , margin: '0 auto' }}>
      
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between', 
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: 4,
          mb: 8
        }}
      >
        <Typography 
          component="h2" 
          variant="h2" 
          sx={{
            fontWeight: 900,
            fontSize: { xs: "32px", md: "42px" },
            color: '#2b1b10',
            textAlign: 'left',
            fontFamily: '"Poppins", sans-serif',
            maxWidth: '550px',
            lineHeight: 1.25
          }}
        >
          The Best Taste From The Process
        </Typography>
        <Typography 
          sx={{
            fontSize: "16px",
            color: 'text.secondary',
            textAlign: 'left',
            fontFamily: '"Poppins", sans-serif',
            maxWidth: '500px',
            lineHeight: 1.8
          }}
        >
          We pride ourselves on our meticulous craft. Every cup tells a story of direct-trade sourcing, careful small-batch roasting, and entirely natural flavor profiles.
        </Typography>
      </Box>

      
      <Box 
        sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '32px' 
        }}
      >
        {processData.map((process, index) => (
          <Box key={index} sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)', md: '340px' } }}>
            <FeatureCard
              icon={process.icon}
              title={process.text}
              variant={process.variant}
            />
          </Box>
        ))}
      </Box>

    </Box>
  );
}

export default About;