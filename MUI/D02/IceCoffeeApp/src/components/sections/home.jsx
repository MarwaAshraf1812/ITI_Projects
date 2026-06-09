import { Box, Typography, Stack } from "@mui/material";
import coffeeHeroBg from "../../assets/coffee_hero_background.png";
import CustomButton from "../UI/CustomButton";

function Home() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: 'calc(100vh - 75px)',
        backgroundImage: `url(${coffeeHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        px: { xs: '4%', md: '8%' },
        py: 6,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: '100%', md: '50%' },
          zIndex: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: 'secondary.main',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            mb: 1,
            fontSize: '14px',
          }}
        >
          Special Blend
        </Typography>
        
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 900,
            color: 'text.primary',
            lineHeight: 1.1,
            fontSize: { xs: '40px', md: '64px' },
            mb: 2,
          }}
        >
          IT'S A BREAK <br />
          WITH <Box component="span" sx={{ color: 'primary.main' }}>COFFEE</Box>
        </Typography>

        <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
          <CustomButton
            variant="primary"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '16px',
            }}
          >
            Order Now
          </CustomButton>
          <CustomButton
            variant="outline"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '16px',
            }}
          >
            Explore Menu
          </CustomButton>
        </Stack>
      </Box>
    </Box>
  );
}

export default Home;