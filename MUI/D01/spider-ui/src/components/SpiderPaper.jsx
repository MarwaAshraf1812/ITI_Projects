import { Paper } from '@mui/material';

function SpiderPaper({elevation = 2, children, sx, ...props}) {
  return (
    <Paper
    elevation={elevation}
    sx={{
      p:3,
      borderRadius:3,
      bgcolor:'background.paper',
      ...sx
    }}
    {...props}
    >
      {children}
    </Paper>
  );
}

export default SpiderPaper;