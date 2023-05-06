import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";


const FeedBack = ({message, setMessage, severity}) => {
    const handleClose = (event) => {
      setMessage(null)
    };
    return (
      <Snackbar 
      open={Boolean(message?.message)}
      onClose={handleClose}>
        { message && 
          <Alert 
          onClose={handleClose}
          severity={severity}
          sx={{ 
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            lineHeight: 1,
          }}>
            {message?.message}
          </Alert>
        }
      </Snackbar>
     );
}
 
export default FeedBack;