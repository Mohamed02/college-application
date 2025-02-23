import { Button } from "@mui/material";

type StepsControllerProps = {
  activeStep: number;
  handleBack: () => void;
  isLastStep: () => boolean;
  validateAndGoNext: () => void;
  saveDraft: () => void;
  completedSteps: () => number;
  totalSteps: () => number;
};
const StepsController = function ({
  activeStep,
  handleBack,
  isLastStep,
  validateAndGoNext,
  saveDraft,
  completedSteps,
  totalSteps,
}: StepsControllerProps) {
  return (
    <div className="flex mt-20 justify-between">
      <Button
        color="secondary"
        variant="outlined"
        disabled={activeStep === 0}
        onClick={handleBack}
        sx={{ mr: 1 }}
      >
        Back
      </Button>
      <div className="flex">
        {!isLastStep() && (
          <Button variant="outlined" onClick={validateAndGoNext} sx={{ mr: 1 }}>
            Next
          </Button>
        )}
        <Button onClick={saveDraft} variant="outlined">
          Save as Draft
        </Button>{" "}
        {activeStep === totalSteps() - 1 &&
          completedSteps() === totalSteps() - 1 && (
            <div className="ml-2">
              <Button type="submit" variant="outlined">
                Submit
              </Button>
            </div>
          )}
      </div>
    </div>
  );
};
export default StepsController;
