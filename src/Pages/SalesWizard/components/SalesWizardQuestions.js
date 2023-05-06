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
	value={salesWizardLogic?.FormData?.store_name}
	onInput={(e) => salesWizardLogic?.handleField(e, 'store_name', 0)} />
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
	value={salesWizardLogic?.FormData?.gift_card_balance}
	onInput={(e) => salesWizardLogic?.handleField(e, 'gift_card_balance', 1)} />
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
	value={salesWizardLogic?.FormData?.price}
	onInput={(e) => salesWizardLogic?.handleField(e, 'price', 2)} />
</div>;
	
const Question4 = ({ styles, salesWizardLogic }) => 
<div className={styles.campaignQuestion}>
	<Typography 
	textAlign={"center"} 
	sx={{ 
		mt: 2, mb: 1,
		maxWidth: "500px",
		lineHeight: "1.0"
	}}>
		What is your Gift Card number?
		We usually use this for confirmation of each product.
	</Typography>
	<TextField 
	InputProps={{
		pattern: '[0-9]*'
	}}
	label="Gift Card Number" 
	variant="outlined"
	sx={{
		width: "400px",
		maxWidth: "500px"
	}}
	value={salesWizardLogic?.FormData?.gift_card_number}
	onInput={(e) => salesWizardLogic?.handleField(e, 'gift_card_number', 3)} />
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

const Question5 = ({ styles, salesWizardLogic }) => 
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
	value={salesWizardLogic?.FormData?.blockchain_network}
	onChange={(e) => salesWizardLogic?.handleField(e, 'blockchain_network', 4)}>
		{AcceptableNetworks.map((i, index) => (
			<MenuItem key={index} value={i.option}>{i.icon} {i.option}</MenuItem>
		))}
	</TextField>
</div>;

const Question6 = ({ styles, salesWizardLogic }) => 
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
	value={salesWizardLogic?.FormData?.wallet_address}
	onInput={(e) => salesWizardLogic?.handleField(e, 'wallet_address', 5)} />
</div>;
	
const Question7 = ({ styles, salesWizardLogic }) => 
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
	value={salesWizardLogic.FormData?.contact_email}
	onInput={(e) => salesWizardLogic?.handleField(e, 'contact_email', 6)} />
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
	salesWizardLogic={salesWizardLogic} />,
	<Question7
	styles={styles}
	salesWizardLogic={salesWizardLogic} />
]
    return (<>{questions[salesWizardLogic.activeStep]}</>);
}
 
export default SalesWizardQuestions;