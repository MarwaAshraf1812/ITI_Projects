import { Chip } from '@mui/material';

function SpiderChip({ label, color = 'primary', ...props }) {
  return (
    <Chip 
      label={label} 
      color={color} 
      sx={{ fontWeight: 'bold', mb: 2, letterSpacing: '1px' }} 
      {...props} 
    />
  );
}
export default SpiderChip;