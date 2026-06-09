import { Box, Typography, Stack, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const ORBITAL_POSITIONS = [
  { top: '12%', left: '8%', transform: 'translate(-50%, -50%)' },
  { top: '50%', left: '-2%', transform: 'translate(-50%, -50%)' },
  { top: '88%', left: '8%', transform: 'translate(-50%, -50%)' },
];

function CustomizeShowcase({ options = [], selected, onChange }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const activeOption = options.find((opt) => opt.id === selected) || options[0] || {};

  if (isMobile) {
    return (
      <Stack spacing={4} alignItems="center" width="100%">
        <Box
          sx={{
            position: 'relative',
            width: '260px',
            height: '320px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: '200px',
              height: '200px',
              border: '1.5px dashed rgba(74, 44, 17, 0.15)',
              borderRadius: '50%',
            }}
          />
          <Box
            component="img"
            src={activeOption.image}
            alt={activeOption.label}
            sx={{
              width: '90%',
              height: '95%',
              objectFit: 'contain',
              zIndex: 2,
              mixBlendMode: 'multiply',
              filter: 'drop-shadow(0px 15px 25px rgba(74, 44, 17, 0.18))',
              transition: 'transform 0.4s ease-in-out',
            }}
          />
        </Box>

        <Stack direction="row" spacing={3} justifyContent="center" width="100%">
          {options.map((opt) => {
            const isSelected = selected === opt.id;
            return (
              <Stack
                key={opt.id}
                alignItems="center"
                spacing={1}
                onClick={() => onChange(opt.id)}
                sx={{ cursor: 'pointer' }}
              >
                <Box
                  sx={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    border: '2px solid',
                    borderColor: isSelected ? 'secondary.main' : 'rgba(74, 44, 17, 0.12)',
                    p: '2px',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    boxShadow: '0px 4px 10px rgba(0,0,0,0.03)',
                    transition: 'all 0.3s',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Box
                    component="img"
                    src={opt.image}
                    alt={opt.label}
                    sx={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      mixBlendMode: 'multiply' 
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: isSelected ? 700 : 500,
                    color: isSelected ? 'primary.main' : 'text.secondary',
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  {opt.label}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    );
  }

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '450px',
        width: '100%',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: '10%',
          width: '380px',
          height: '380px',
          border: '1.5px solid rgba(74, 44, 17, 0.12)',
          borderRadius: '50%',
          zIndex: 1,
        }}
      >
        {options.map((opt, index) => {
          const isSelected = selected === opt.id;
          const pos = ORBITAL_POSITIONS[index] || ORBITAL_POSITIONS[1];

          return (
            <Box
              key={opt.id}
              onClick={() => onChange(opt.id)}
              sx={{
                position: 'absolute',
                ...pos,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                cursor: 'pointer',
                zIndex: 10,
              }}
            >
              <Box
                sx={{
                  width: '75px',
                  height: '75px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  border: '2.5px solid',
                  borderColor: isSelected ? 'secondary.main' : 'rgba(74, 44, 17, 0.12)',
                  p: '2px',
                  boxShadow: '0px 6px 15px rgba(74, 44, 17, 0.05)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    transform: 'scale(1.08)',
                    borderColor: 'secondary.main',
                  },
                }}
              >
                <Box
                  component="img"
                  src={opt.image}
                  alt={opt.label}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'multiply' }}
                />
              </Box>
              <Typography
                sx={{
                  fontWeight: isSelected ? 800 : 600,
                  color: isSelected ? 'primary.main' : 'text.secondary',
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '15px',
                }}
              >
                {opt.label}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Box
        sx={{
          ml: 'auto',
          width: '60%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
        }}
      >
        {activeOption.image && (
          <Box
            component="img"
            src={activeOption.image}
            alt={activeOption.label}
            sx={{
              width: '85%',
              height: '95%',
              objectFit: 'contain',
              filter: 'drop-shadow(0px 20px 40px rgba(74, 44, 17, 0.15))',
              mixBlendMode: 'multiply',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              animation: 'floatCup 6s ease-in-out infinite',
              '&:hover': {
                transform: 'scale(1.03) translateY(-8px)',
                filter: 'drop-shadow(0px 30px 45px rgba(74, 44, 17, 0.22))'
              }
            }}
          />
        )}

        <style>{`
          @keyframes floatCup {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }
        `}</style>
      </Box>
    </Box>
  );
}

export default CustomizeShowcase;