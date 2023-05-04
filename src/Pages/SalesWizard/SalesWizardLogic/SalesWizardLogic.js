import { useState } from "react";

const SalesWizardLogic = () => {

    const steps = [
    'Store name', 
    'Gift card balance', 
    'Selling Price', 
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

  const handleSubmitForm = () => {
    console.log("Form submitted");
    return ;
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

  function handleStoreNameField(e){
    SetFormData({
      ...FormData,
      storeName: e?.target?.value
    })
    setAnsweredQuestions({
      ...answeredQuestions,
      0: steps[activeStep]
    })
  };

  function handleGiftCardBalanceField(e){
    SetFormData({
      ...FormData,
      giftCardBalance: e?.target?.value
    })
    setAnsweredQuestions({
      ...answeredQuestions,
      1: steps[activeStep]
    })
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
    handleStoreNameField,
    handleGiftCardBalanceField,
    handleSubmitForm
  }
    
  return ({ salesWizardLogic });
}
 
export default SalesWizardLogic;