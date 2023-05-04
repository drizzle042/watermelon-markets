import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DiamondIcon from '@mui/icons-material/Diamond';
import MenuItem from '@mui/material/MenuItem';
import PolylineIcon from '@mui/icons-material/Polyline';


const Question1 = ({ styles, salesWizardLogic }) => 
<div className={styles.campaignQuestion}>
	<Typography textAlign={"center"} sx={{ mt: 2, mb: 1 }}>
		What is the name of your store?
	</Typography>
	<TextField 
	label="Store Name" 
	variant="outlined"
	sx={{
		width: "400px",
		maxWidth: "500px"
	}}
	value={salesWizardLogic?.FormData?.storeName}
	onInput={salesWizardLogic?.handleStoreNameField} />
</div>;

const Question2 = ({ styles, salesWizardLogic }) => 
<div className={styles.campaignQuestion}>
	<Typography textAlign={"center"} sx={{ mt: 2, mb: 1 }}>
		What is the balance left on your Gift Card?
	</Typography>
	<TextField 
	InputProps={{
		startAdornment: (
		<InputAdornment position="start">
			<AttachMoneyIcon />
		</InputAdornment>
		),
		pattern: '[0-9]*'
	}}
	label="Gift Card Balance" 
	variant="outlined"
	sx={{
		width: "400px",
		maxWidth: "500px"
	}}
	value={salesWizardLogic?.FormData?.giftCardBalance}
	onInput={salesWizardLogic?.handleGiftCardBalanceField} />
</div>;	
	
const Question3 = ({ styles, salesWizardLogic }) => 
<div className={styles.campaignQuestion}>
	<Typography textAlign={"center"} sx={{ mt: 2, mb: 1 }}>
		What price are you selling at?
	</Typography>
	<TextField 
	InputProps={{
		startAdornment: (
		<InputAdornment position="start">
			<AttachMoneyIcon />
		</InputAdornment>
		),
		pattern: '[0-9]*'
	}}
	label="Selling Price" 
	variant="outlined"
	sx={{
		width: "400px",
		maxWidth: "500px"
	}}
	value={salesWizardLogic.FormData?.sellingPrice}
	onInput={
		(e) => {
			salesWizardLogic.SetFormData({
				...salesWizardLogic.FormData,
				sellingPrice: e.target.value
			})
			salesWizardLogic.setAnsweredQuestions({
				...salesWizardLogic.answeredQuestions,
				2: salesWizardLogic.steps[salesWizardLogic.activeStep]
			})
		}
	} />
</div>;

const AcceptableNetworks = [
	{
		icon: <PolylineIcon />,
		option: "Polygon"
	},
	{
		icon: <DiamondIcon />,
		option: "Ethereum"
	}
]

const Question4 = ({ styles, salesWizardLogic }) => 
<div className={styles.campaignQuestion}>
	<Typography textAlign={"center"} sx={{ mt: 2, mb: 1 }}>
		Which network would you like to receive funds at?
	</Typography>
	<TextField 
	select
	label="Blockchain Network" 
	variant="outlined"
	sx={{
		width: "400px",
		maxWidth: "500px"
	}}
	value={salesWizardLogic.FormData?.userNetwork}
	onChange={
		(e) => {
			salesWizardLogic.SetFormData({
				...salesWizardLogic.FormData,
				userNetwork: e.target.value
			})
			salesWizardLogic.setAnsweredQuestions({
				...salesWizardLogic.answeredQuestions,
				3: salesWizardLogic.steps[salesWizardLogic.activeStep]
			})
		}
	}>
		{AcceptableNetworks.map((i, index) => (
			<MenuItem key={index} value={i.option}>{i.icon} {i.option}</MenuItem>
		))}
	</TextField>
</div>;

const Question5 = ({ styles, salesWizardLogic }) => 
<div className={styles.campaignQuestion}>
	<Typography textAlign={"center"} sx={{ mt: 2, mb: 1 }}>
		What address do you want to receive funds at?
	</Typography>
	<TextField 
	label="Network Address" 
	variant="outlined"
	sx={{
		width: "400px",
		maxWidth: "500px"
	}}
	value={salesWizardLogic.FormData?.networkAddress}
	onInput={
		(e) => {
			salesWizardLogic.SetFormData({
				...salesWizardLogic.FormData,
				networkAddress: e.target.value
			})
			salesWizardLogic.setAnsweredQuestions({
				...salesWizardLogic.answeredQuestions,
				4: salesWizardLogic.steps[salesWizardLogic.activeStep]
			})
		}
	} />
</div>;
	
const Question6 = ({ styles, salesWizardLogic }) => 
<div className={styles.campaignQuestion}>
	<Typography textAlign={"center"} sx={{ mt: 2, mb: 1 }}>
		Please provide an email address for contact purposes.
	</Typography>
	<TextField 
	label="Contact mail" 
	type="email"
	variant="outlined"
	sx={{
		width: "400px",
		maxWidth: "500px"
	}}
	value={salesWizardLogic.FormData?.userEmail}
	onInput={
		(e) => {
			salesWizardLogic.SetFormData({
				...salesWizardLogic.FormData,
				userEmail: e.target.value
			})
			salesWizardLogic.setAnsweredQuestions({
				...salesWizardLogic.answeredQuestions,
				5: salesWizardLogic.steps[salesWizardLogic.activeStep]
			})
		}
	} />
</div>;

	
const SalesWizardQuestions = ({ styles, salesWizardLogic }) => {
const questions = [
	<Question1
	styles={styles}
	salesWizardLogic={salesWizardLogic} />,
	<Question2
	styles={styles}
	salesWizardLogic={salesWizardLogic} />,
	<Question3
	styles={styles}
	salesWizardLogic={salesWizardLogic} />,
	<Question4
	styles={styles}
	salesWizardLogic={salesWizardLogic} />,
	<Question5
	styles={styles}
	salesWizardLogic={salesWizardLogic} />,
	<Question6
	styles={styles}
	salesWizardLogic={salesWizardLogic} />
]
    return (<>{questions[salesWizardLogic.activeStep]}</>);
}
 
export default SalesWizardQuestions;