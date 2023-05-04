import styles from "./styles/styles.module.css";
import robot from "../../Lib/assets/robot.png";
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const SalesWizardBot = () => {
    return (
		<Box
		sx={{
			width: '100%',
			height: '100vh',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center'
		}}>
			<Paper
			className={styles.main}
			elevation={0}
			sx={{
				borderRadius: "15px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center"
			}}>
                <img src={robot} alt='robot' width={200} />
                <Typography
                textAlign={"center"} 
                sx={{ 
                    mt: 2, mb: 1, 
                    maxWidth: "500px",
                    lineHeight: "1.0"
                }}>
                    Hi! Welcome to WaterMelon Markets. 
                    I am your host Canon. 
                    I will take you through the steps to put up a product for sale. 
                    Shall we begin?
                </Typography>
                <Button
                variant="outlined"
                href="/#/form"
                sx={{
                    textTransform: "none"
                }}>
                    Yes Sure
                </Button>
            </Paper>
        </Box>
    );
}
 
export default SalesWizardBot;