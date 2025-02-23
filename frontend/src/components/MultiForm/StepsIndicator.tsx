import { Step, StepLabel, Stepper } from "@mui/material";
type StepsIndicatorProps = {
  activeStep: number;
  steps: Array<string>;
};
const StepsIndicator = function ({ activeStep, steps }: StepsIndicatorProps) {
  return (
    <Stepper activeStep={activeStep} alternativeLabel className={"w-full"}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepsIndicator;
