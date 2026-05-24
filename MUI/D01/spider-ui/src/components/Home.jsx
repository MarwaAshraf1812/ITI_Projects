import { Box, Typography } from '@mui/material';
import spiderMask from '../assets/spider_mask.png';
import spiderHand from '../assets/spider_hand.png';

import FlashOnIcon from '@mui/icons-material/FlashOn';
import PaletteIcon from '@mui/icons-material/Palette';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import SpiderButton from './SpiderButton';
import SpiderCard from './SpiderCard';
import SpiderPaper from './SpiderPaper';

function Home() {
  const cardsData = [
    {
      title: "Web-Shooter Tech",
      description: "Advanced synthetic web fluid formula with electrostatic trigger mechanism for rapid traversal.",
      image: spiderMask
    },
    {
      title: "Spidey Suit Mk II",
      description: "Advanced synthetic web fluid formula with electrostatic trigger mechanism for rapid traversal.",
      image: spiderMask
    },
    {
      title: "Spider-Drone",
      description: "Tactical aerial surveillance drone with holographic decoy projection and sonic disrupters.",
      image: spiderMask
    }
  ];

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box 
        sx={{ 
          width: '90%', 
          textAlign: 'center', 
          pt: 8, 
          pb: 8,
          backgroundImage: `url(${spiderHand})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(230, 57, 70, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          margin: '20px auto 40px auto',
          height: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography component="h1" variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
          Welcome Hero 🕸️
        </Typography>
        <SpiderButton variant="contained">EXPLORE HERO</SpiderButton>
      </Box>
      
      <Box sx={{ width: '90%', display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', mt: 4 }}>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', gap: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
          {cardsData.map((card, index) => (
            <SpiderCard 
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </Box>
        
        <Box 
          sx={{ 
            background: 'linear-gradient(135deg, #13132e 0%, #0a0a16 100%)', 
            py: 6, 
            width: '100%',
            borderRadius: 3,
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            gap: '40px',
            border: '1px solid rgba(255, 77, 90, 0.15)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)'
          }}
        >
          <Box sx={{ width: '280px' }}>
            <SpiderPaper sx={{ bgcolor: 'rgba(255,255,255,0.05)', textAlign: 'center', color: 'white', border: '1px solid rgba(255,255,255,0.05)' }}>
              <FlashOnIcon sx={{ fontSize: 40, mb: 1, color: '#ff3366' }} />
              <Typography variant="h6">Speed</Typography>
              <Typography variant="body2">Amazing experience with modern UI</Typography>
            </SpiderPaper>
          </Box>

          <Box sx={{ width: '280px' }}>
            <SpiderPaper sx={{ bgcolor: 'rgba(255,255,255,0.05)', textAlign: 'center', color: 'white', border: '1px solid rgba(255,255,255,0.05)' }}>
              <PaletteIcon sx={{ fontSize: 40, mb: 1, color: '#ff5e36' }} />
              <Typography variant="h6">Design</Typography>
              <Typography variant="body2">Amazing experience with modern UI</Typography>
            </SpiderPaper>
          </Box>

          <Box sx={{ width: '280px' }}>
            <SpiderPaper sx={{ bgcolor: 'rgba(255,255,255,0.05)', textAlign: 'center', color: 'white', border: '1px solid rgba(255,255,255,0.05)' }}>
              <StayCurrentPortraitIcon sx={{ fontSize: 40, mb: 1, color: '#b5179e' }} />
              <Typography variant="h6">Responsive</Typography>
              <Typography variant="body2">Amazing experience with modern UI</Typography>
            </SpiderPaper>
          </Box>
        </Box>

        <Box 
          sx={{ 
            background: 'linear-gradient(135deg, #7209b7 0%, #ff3366 100%)', 
            py: 8, 
            width: '100%',
            borderRadius: 3,
            textAlign: 'center', 
            flexGrow: 1,
            boxShadow: '0 8px 32px rgba(114, 9, 183, 0.3)',
            mb: 4
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'medium', color: 'white' }}>
            Ready to build something awesome?
          </Typography>
          <SpiderButton sx={{ bgcolor: 'black', color: 'white', mt: 2, '&:hover': { bgcolor: '#222' } }}>
            JOIN NOW
          </SpiderButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
