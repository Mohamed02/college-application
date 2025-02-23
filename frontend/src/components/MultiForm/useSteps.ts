import { useState } from "react";
type StepsType = Array<string>;
const useStep = function (steps: StepsType) {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  // const handleStep = (step: number) => () => {
  //     setActiveStep(step);
  // };
  const handleComplete = () => {
    setCompleted({
      ...completed,
      [activeStep]: true,
    });
    handleNext();
  };
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  const totalSteps = () => {
    return steps.length;
  };
  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((_, i) => !(i in completed))
        : activeStep + 1;
    console.log("newActiveStep", newActiveStep);
    setActiveStep(newActiveStep);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return {
    activeStep,
    completed,
    completedSteps,
    totalSteps,
    handleNext,
    handleBack,
    handleReset,
    handleComplete,
    allStepsCompleted,
    isLastStep,
  };
};
export default useStep;
