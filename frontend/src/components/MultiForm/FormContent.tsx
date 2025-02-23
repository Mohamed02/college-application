import { Control, FieldErrors } from "react-hook-form";
import Personal from "./Forms/Personal";
import { ChangeEvent, lazy } from "react";
import { SelectChangeEvent } from "@mui/material";
import { CombinedFormDataType } from "../../yup/schema";
const Academic = lazy(() => import("./Forms/Academic"));
const Courses = lazy(() => import("./Forms/Courses"));
const Review = lazy(() => import("./Forms/Review"));
type FormsContainerProps = {
  activeStep: number;
  control: Control<CombinedFormDataType>;
  errors: FieldErrors<CombinedFormDataType>;
  formData: CombinedFormDataType;
  handleChange: (
    event: ChangeEvent<HTMLInputElement> | SelectChangeEvent,
  ) => void;
};

const FormContent = ({
  activeStep,
  control,
  errors,
  handleChange,
  formData,
}: FormsContainerProps) => {
  return (
    <>
      {activeStep === 0 && (
        <Personal
          control={control}
          errors={errors}
          formData={formData}
          handleChange={handleChange}
        />
      )}
      {activeStep === 1 && (
        <Academic
          control={control}
          errors={errors}
          formData={formData}
          handleChange={handleChange}
        />
      )}
      {activeStep === 2 && (
        <Courses
          control={control}
          errors={errors}
          formData={formData}
          handleChange={handleChange}
        />
      )}
      {activeStep === 3 && <Review formState={formData} />}
    </>
  );
};
export default FormContent;
