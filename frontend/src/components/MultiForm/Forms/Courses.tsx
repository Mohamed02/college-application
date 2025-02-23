import { CombinedFormDataType } from "../../../yup/schema";
import { Control, FieldErrors } from "react-hook-form";
import { ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";
import ControlledTextInput from "../../FormElements/ControlledTextInput";
type CoursesProps = {
  control: Control<CombinedFormDataType>;
  errors: FieldErrors<CombinedFormDataType>;
  formData: CombinedFormDataType;
  handleChange: (
    event: ChangeEvent<HTMLInputElement> | SelectChangeEvent,
  ) => void;
};
const Courses = function ({
  control,
  errors,
  handleChange,
  formData,
}: CoursesProps) {
  return (
    <div className="flex flex-col">
      <ControlledTextInput
        name="firstCoursePreference"
        label="Course Preference -1"
        error={!!errors.firstCoursePreference}
        value={formData.firstCoursePreference}
        helperText={errors.firstCoursePreference?.message}
        control={control}
        handleChange={handleChange}
      />
      <ControlledTextInput
        name="secondCoursePreference"
        label="Course Preference -2"
        error={!!errors.secondCoursePreference}
        value={formData.secondCoursePreference}
        helperText={errors.secondCoursePreference?.message}
        control={control}
        handleChange={handleChange}
      />
      <ControlledTextInput
        name="thirdCoursePreference"
        label="Course Preference -3"
        error={!!errors.thirdCoursePreference}
        value={formData.thirdCoursePreference}
        helperText={errors.thirdCoursePreference?.message}
        control={control}
        handleChange={handleChange}
      />
      <ControlledTextInput
        name="fourthCoursePreference"
        label="Course Preference -4"
        error={!!errors.fourthCoursePreference}
        value={formData.fourthCoursePreference}
        helperText={errors.fourthCoursePreference?.message}
        control={control}
        handleChange={handleChange}
      />
    </div>
  );
};
export default Courses;
