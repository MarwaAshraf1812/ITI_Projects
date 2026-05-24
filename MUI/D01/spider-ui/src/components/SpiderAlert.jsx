import { Alert, AlertTitle } from '@mui/material';

function SpiderAlert({ severity = 'info', title, children, ...props }) {
  return (
    <Alert severity={severity} sx={{ mb: 3, borderRadius: 2 }} {...props}>
      {title && <AlertTitle sx={{ fontWeight: 'bold' }}>{title}</AlertTitle>}
      {children}
    </Alert>
  );
}

export default SpiderAlert;