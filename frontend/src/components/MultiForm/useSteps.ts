import { useCallback, useState } from "react";
type StepsType = Array<string>;
const useStep = function (steps: StepsType) {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  // const handleStep = (step: number) => () => {
  //     setActiveStep(step);
  // };
  const handleComplete = useCallback(() => {
    setCompleted({
      ...completed,
      [activeStep]: true,
    });
    handleNext();
  }, [completed, activeStep]);
  const handleReset = useCallback(() => {
    setActiveStep(0);
    setCompleted({});
  }, []);

  const totalSteps = useCallback(() => {
    return steps.length;
  }, [steps.length]);

  const completedSteps = useCallback(() => {
    return Object.keys(completed).length;
  }, [completed]);

  const isLastStep = useCallback(() => {
    return activeStep === totalSteps() - 1;
  }, [activeStep]);
  const allStepsCompleted = useCallback(() => {
    return completedSteps() === totalSteps();
  }, []);
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
  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, []);
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
