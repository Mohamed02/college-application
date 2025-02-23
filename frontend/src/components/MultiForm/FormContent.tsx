import { Control, FieldErrors } from "react-hook-form";
import Academic from "./Forms/Academic";
import Courses from "./Forms/Courses";
import Personal from "./Forms/Personal";
import Review from "./Forms/Review";
import { ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";
import { CombinedFormDataType } from "../../yup/schema";
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
  // const submitHandler: SubmitHandler<CombinedFormDataType> = async (
  //   data: CombinedFormDataType,
  // ) => {
  //   try {
  //     window.console.log("data submitted succesfully", data);
  //     // const response = await fetch("http://localhost:5000/api/submit", {
  //     //   method: "POST",
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //   },
  //     //   body: JSON.stringify(data), // Send form data as JSON
  //     // });

  //     // if (response.ok) {
  //     //   const result = await response.json();
  //     //   console.log("Server response:", result);
  //     //   // Handle success, e.g., display a success message
  //     // } else {
  //     //   console.error("Form submission failed");
  //     //   // Handle failure, e.g., show an error message to the user
  //     // }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     // Handle network or other errors
  //   }
  // };

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
