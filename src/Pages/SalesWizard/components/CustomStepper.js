import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import NumberIcon from '@mui/icons-material/Money';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import DnsIcon from '@mui/icons-material/Dns';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';


const CustomStepper = () => {

    const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
      [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
      },
      [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
          backgroundImage:
            'linear-gradient(136deg, rgb(97 167 255) 0%, rgb(212 55 208) 50%, rgb(64 116 233) 100%)'
        },
      },
      [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
          backgroundImage:
            'linear-gradient( 95deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
        },
      },
      [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
          theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
      },
    }));
    
    const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
      zIndex: 1,
      color: '#fff',
      width: 50,
      height: 50,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      ...(ownerState.active && {
        backgroundImage:
          'linear-gradient(136deg, rgb(97 167 255) 0%, rgb(212 55 208) 50%, rgb(64 116 233) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
      }),
      ...(ownerState.completed && {
        backgroundImage:
          'linear-gradient(136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
      }),
    }));
    
    function ColorlibStepIcon(props) {
      const { active, completed, className } = props;
    
      const icons = {
        1: <StorefrontIcon />,
        2: <AccountBalanceWalletIcon />,
        3: <PriceChangeIcon />,
        4: <NumberIcon />,
        5: <CurrencyBitcoinIcon />,
        6: <DnsIcon />,
        7: <MailOutlineIcon />
      };
    
      return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
          {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
      );
    }
    
    ColorlibStepIcon.propTypes = {
      active: PropTypes.bool,
      completed: PropTypes.bool,
      className: PropTypes.string,
      icon: PropTypes.node,
    };

    return ({ColorlibConnector, ColorlibStepIcon});
}
 
export default CustomStepper;