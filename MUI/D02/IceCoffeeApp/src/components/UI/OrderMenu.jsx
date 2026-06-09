import React from 'react';
import { Box, Typography } from "@mui/material";

function OrderMenu() {
  const tabs = ["Ice Coffee", "Hot Coffee", "Juice", "Cooler", "Smoothies"];
  const activeTab = "Ice Coffee";

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 4,
        mb: 4,
        flexWrap: 'wrap',
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab === activeTab;
        return (
          <Typography
            key={tab}
            sx={{
              cursor: 'pointer',
              fontWeight: isActive ? 800 : 500,
              fontSize: '15px',
              color: 'primary.main',
              position: 'relative',
              pb: '4px',
              borderBottom: isActive ? '2px solid #4a2c11' : 'none',
              opacity: isActive ? 1 : 0.6,
              transition: 'all 0.2s',
              fontFamily: '"Poppins", sans-serif',
              '&:hover': {
                opacity: 1,
                color: 'secondary.main',
              }
            }}
          >
            {tab}
          </Typography>
        );
      })}
    </Box>
  );
}

export default OrderMenu;