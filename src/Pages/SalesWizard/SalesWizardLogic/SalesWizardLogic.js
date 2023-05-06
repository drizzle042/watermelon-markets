import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import usePost from "../../../Lib/Requests/usePost";
import { Sales } from "../../../Lib/Endpoints/Endpoints";


const SalesWizardLogic = () => {

    /********************Accessories*********************/
    const steps = [
    'Store name', 
    'Gift card balance', 
    'Selling Price', 
    'Gift card number', 
    'Blockchain Network',
    'Network Address',
    'Contact Email'
  ];
  
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [userIsDone, setUserIsDone] = useState(false);

  const totalSteps = () => {
    return steps.length;
  };

  const isFirstStep = () => {
    return activeStep === 0
  }
  
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleFinish = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    setActiveStep(activeStep + 1);
    setUserIsDone(true);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const [FormData, SetFormData] = useState({});
  const formDataKeys = () => {
    return Object.keys(FormData);
  };

  const [answeredQuestions, setAnsweredQuestions] = useState({});

  const unansweredQuestions = () => {
    return steps.filter(i => !Object.values(answeredQuestions).includes(i));
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    setUserIsDone(false); 
    SetFormData({});
    setAnsweredQuestions({});
  };

  const stepStatus = (activeStep) => {
    return answeredQuestions[activeStep];
  };

  const handleField = (e, formField, index) => {
    SetFormData({
      ...FormData,
      [formField]: e?.target?.value
    })
    setAnsweredQuestions({
      ...answeredQuestions,
      [index]: steps[activeStep]
    })
  };

  /******************Network Requests*****************/
  const {
    message: CreateSaleMessage,
    setMessage: SetCreateSaleMessage,
    messageSeverity: CreateSaleMessageSeverity,
    postFunc: CreateSale
  } = usePost(Sales.sales)
  /*****************************************************/
  const navigate = useNavigate()
  const handleSubmitForm = () => {
    CreateSale(
      JSON.stringify(FormData),
      () => setTimeout(navigate('/products'), 750)
    );
  };


  const salesWizardLogic = {
    steps,
    activeStep,
    completed,
    isLastStep,
    isFirstStep,
    allStepsCompleted,
    handleBack,
    handleStep,
    handleComplete,
    handleReset,
    completedSteps,
    totalSteps,
    handleNext,
    userIsDone,
    handleFinish,
    FormData, 
    formDataKeys,
    SetFormData,
    answeredQuestions, 
    setAnsweredQuestions,
    unansweredQuestions,
    stepStatus,
    handleField,
    handleSubmitForm,
    CreateSaleMessage,
    SetCreateSaleMessage,
    CreateSaleMessageSeverity
  }
    
  return ({ salesWizardLogic });
}
 
export default SalesWizardLogic;