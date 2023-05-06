import { useNavigate } from 'react-router-dom'


const SalesWizardBotLogic = () => {
    const navigate = useNavigate()

    const salesWizardBotLogic = {
        navigate
    }
    return ({ salesWizardBotLogic });
}
 
export default SalesWizardBotLogic;