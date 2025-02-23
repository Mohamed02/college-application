import { SelectChangeEvent } from "@mui/material";
import useStep from "./useSteps";
import StepsIndicator from "./StepsIndicator";
import FormContent from "./FormContent";
import { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { combinedDataSchema, CombinedFormDataType } from "../../yup/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultStudentDetails, stepsDetails } from "../../config";
import StepsController from "./StepsController";
const steps = ["Personal", "Academic ", "Course", "Review"];

type MultiFormProps = {
  displayAlert: (message: string) => void;
};
const apiUrl = import.meta.env.VITE_API_URL;
const MultiForm = function ({ displayAlert }: MultiFormProps) {
  const [formData, setFormData] = useState<CombinedFormDataType>(
    defaultStudentDetails,
  );

  const {
    activeStep,
    handleReset,
    handleNext,
    handleBack,
    handleComplete,
    completedSteps,
    totalSteps,
    isLastStep,
  } = useStep(steps);

  const saveDraft = () => {
    localStorage.setItem("studentDetails", JSON.stringify(formData));
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
    trigger,
    reset,
    setValue,
  } = useForm<CombinedFormDataType>({
    resolver: yupResolver(combinedDataSchema),
    defaultValues: formData,
  });

  useEffect(() => {
    const draftedDetails = localStorage.getItem("studentDetails");
    if (draftedDetails) {
      const parsedData = JSON.parse(draftedDetails);
      setFormData(parsedData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key as keyof CombinedFormDataType, parsedData[key]);
      });
    }
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent) => {
      const name = e.target.name as keyof CombinedFormDataType;
      const value = e.target.value;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setValue(name, value);
    },
    [],
  );

  const processFormSubmission: SubmitHandler<CombinedFormDataType> = async (
    data,
  ) => {
    try {
      const response = await fetch(`${apiUrl}/application`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send form data as JSON
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Server response:", result);

        displayAlert("Application Submitted Succssfully");
        setFormData(defaultStudentDetails);
        handleReset();
        reset();
        localStorage.removeItem("studentDetails");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      displayAlert("Application Submission Failed !");
      console.error("Error submitting form:", error);
    }
  };
  const validateAndGoNext = useCallback(async () => {
    const currentStep = stepsDetails.find((step) => step.id === activeStep);
    const fieldsToBeValidated = currentStep?.fields;
    const isValid = await trigger(
      fieldsToBeValidated as Array<keyof CombinedFormDataType>,
    );
    if (isValid) {
      handleComplete();
      handleNext();
    }
  }, [activeStep, handleComplete, handleNext, trigger]);
  return (
    <div className="w-full ">
      <StepsIndicator activeStep={activeStep} steps={steps} />
      <div className={"w-full lg:w-4/7 mt-10 m-auto"}>
        <form onSubmit={handleSubmit(processFormSubmission)}>
          <FormContent
            formData={formData}
            activeStep={activeStep}
            control={control}
            errors={errors}
            handleChange={handleChange}
          />
          <StepsController
            activeStep={activeStep}
            handleBack={handleBack}
            isLastStep={isLastStep}
            validateAndGoNext={validateAndGoNext}
            saveDraft={saveDraft}
            completedSteps={completedSteps}
            totalSteps={totalSteps}
          />
        </form>
      </div>
    </div>
  );
};

export default MultiForm;
