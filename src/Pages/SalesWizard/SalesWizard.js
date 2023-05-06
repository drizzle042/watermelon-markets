import { Fragment } from 'react';
import styles from "./styles/styles.module.css";
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomStepper from './components/CustomStepper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SalesWizardQuestions from './components/SalesWizardQuestions';
import SalesWizardLogic from './SalesWizardLogic/SalesWizardLogic';
import FeedBack from '../../Lib/Components/Feedback';


function SalesForm() {

	const { salesWizardLogic } = SalesWizardLogic();
	const { ColorlibConnector, ColorlibStepIcon } = CustomStepper();

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
				<Stack sx={{ width: '100%' }} spacing={4}>
					<Stepper 
					alternativeLabel 
					nonLinear
					activeStep={salesWizardLogic.activeStep} 
					connector={<ColorlibConnector />}>
							{salesWizardLogic?.steps.map((label, index) => (
								<Step key={label} completed={salesWizardLogic.completed[index]}>
									<StepButton color="inherit" onClick={salesWizardLogic.handleStep(index)}>
										<StepLabel
										sx={{
											fontSize: "24px"
										}} 
										StepIconComponent={ColorlibStepIcon}>
											{label}
										</StepLabel>
									</StepButton>
								</Step>
							))}
					</Stepper>
				</Stack>
				<div className={styles.campaignBody}>
					{salesWizardLogic.userIsDone ? (
						<Fragment>
						{salesWizardLogic.unansweredQuestions().length === 0 ? 
							<>
								<FavoriteIcon htmlColor="crimson" />
								<Typography 
								textAlign={"center"} 
								sx={{ 
									mt: 2, mb: 1, 
									maxWidth: "500px",
									lineHeight: "1.0"
								}}>
									Thank you for offering this product. 
									Items are usually bought within 4 days. 
									It could be sooner...
								</Typography>
							</> :
							<Typography 
							textAlign={"center"} 
							sx={{ 
								mt: 2, mb: 1, 
								maxWidth: "500px",
								lineHeight: "1.0"
							}}>
								Thank you for using this wizard. 
								But I have to remind you that without your {salesWizardLogic.unansweredQuestions()[0]},
								This product will not be put on WaterMelon markets.
							</Typography>
						}
							<Box 
							sx={{ 
								width: "80%",
								margin: "auto",
								display: 'flex', 
								flexDirection: 'row',
								pt: 2 
							}}>
								<Button
								variant='outlined'
								color="inherit" 
								onClick={salesWizardLogic.handleReset}
								sx={{ 
									mr: 1,
									fontSize: "24px",
									textTransform: "none"
								}}>
									Clear Entries
								</Button>
								<Box sx={{ flex: '1 1 auto' }} />
								<Button
								onClick={salesWizardLogic.handleSubmitForm}
								variant='outlined'
								sx={{ 
									mr: 1,
									fontSize: "24px",
									textTransform: "none"
								}}>
									Submit
								</Button>
							</Box>
						</Fragment>
					) : (
						<Fragment>
							<SalesWizardQuestions 
							styles={styles} 
							salesWizardLogic={salesWizardLogic} />
							<Box
							sx={{ 
								width: "80%",
								margin: "auto",
								display: 'flex', 
								flexDirection: 'row', 
								pt: 2 
							}}>
								<Button
								color="inherit"
								disabled={salesWizardLogic.isFirstStep()}
								onClick={salesWizardLogic.handleBack}
								variant='outlined'
								sx={{ 
									mr: 1,
									fontSize: "24px",
									textTransform: "none"
								}}>
									Back
								</Button>
								<Box sx={{ flex: '1 1 auto' }} />
								<Button 
								color="inherit"
								disabled={
									(salesWizardLogic.isLastStep()) || 
									(Boolean(salesWizardLogic.stepStatus(salesWizardLogic.activeStep)))
								}
								onClick={salesWizardLogic.handleNext}
								variant='outlined'
								sx={{
									mr: 1,
									fontSize: "24px",
									textTransform: "none"
								}}>
									Skip
								</Button>
								{salesWizardLogic.isLastStep() ?
									<Button 
									disabled={
										Boolean(!salesWizardLogic.stepStatus(salesWizardLogic.activeStep))
									}
									onClick={salesWizardLogic.handleFinish}
									variant='outlined'
									sx={{
										mr: 1,
										fontSize: "24px",
										textTransform: "none"
									}}>
										Finish
									</Button> :
									<Button 
									disabled={
										Boolean(!salesWizardLogic.stepStatus(salesWizardLogic.activeStep))
									}
									onClick={salesWizardLogic.handleComplete}
									variant='outlined'
									sx={{
										mr: 1,
										fontSize: "24px",
										textTransform: "none"
									}}>
										Next
									</Button>
								}
							</Box>
						</Fragment>
					)}
				</div>
			</Paper>
            <FeedBack
            message={salesWizardLogic.CreateSaleMessage}
            setMessage={salesWizardLogic.SetCreateSaleMessage}
            severity={salesWizardLogic.CreateSaleMessageSeverity} />
		</Box>
  );
}

const SalesWizard = () => {
    return (<SalesForm />);
}
 
export default SalesWizard;