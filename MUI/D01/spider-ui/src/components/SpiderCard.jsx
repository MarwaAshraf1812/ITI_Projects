import { Card as MuiCard, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';

function SpiderCard({ title, description, image }) {
  return (
    <MuiCard 
      sx={{ 
        flex: '1 1 300px',
        maxWidth: '380px',
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        bgcolor: '#13132e',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 25px rgba(230, 57, 70, 0.4)'
        }
      }}
    >
      <CardMedia 
        component="img"
        height="220"
        image={image}
        alt={title}
        sx={{
          objectFit: 'cover'
        }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography gutterBottom variant="h5" component="h2" sx={{ color: '#fff', fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#aaa' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button 
          fullWidth 
          variant="contained" 
          sx={{ 
            background: 'linear-gradient(90deg, #e63946, #b5179e)',
            color: 'white',
            fontWeight: 'bold',
            '&:hover': {
              background: 'linear-gradient(90deg, #b5179e, #e63946)',
              transform: 'translateY(-2px)'
            }
          }}
        >
          EXPLORE
        </Button>
      </CardActions>
    </MuiCard>
  )
}

export default SpiderCard;