import FileInput from "../../FormElements/FileInput";
import { CombinedFormDataType } from "../../../yup/schema";
import { Control, FieldErrors } from "react-hook-form";
import { ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";
import ControlledTextInput from "../../FormElements/ControlledTextInput";
import ControlledDateInput from "../../FormElements/ControlledDateInput";
import ControlledDropdown from "../../FormElements/ControlledDropdown";

type AcademicProps = {
  control: Control<CombinedFormDataType>;
  errors: FieldErrors<CombinedFormDataType>;
  formData: CombinedFormDataType;
  handleChange: (
    event: ChangeEvent<HTMLInputElement> | SelectChangeEvent,
  ) => void;
};
const Academic = function ({
  control,
  errors,
  formData,
  handleChange,
}: AcademicProps) {
  return (
    <div className="flex flex-col">
      <ControlledTextInput
        name="schoolName"
        label="School Name"
        error={!!errors.schoolName}
        helperText={errors.schoolName?.message}
        value={formData.schoolName}
        control={control}
        handleChange={handleChange}
      />
      <ControlledTextInput
        name="qualification"
        label="Qualification"
        error={!!errors.qualification}
        helperText={errors.qualification?.message}
        value={formData.qualification}
        control={control}
        handleChange={handleChange}
      />
      <ControlledDateInput
        name="graduationDate"
        label="Graduation Date"
        control={control}
        error={!!errors.graduationDate}
        helperText={errors.graduationDate?.message}
        handleChange={handleChange}
      />
      {/* <TextInput key="Courses Enrolled" label="Courses Enrolled" /> */}
      {/* <DateInput label="Graduation Date" /> */}
      <ControlledDropdown
        name="grade"
        control={control}
        label="Grade"
        error={!!errors.grade}
        options={[
          { label: "A+", value: "A+" },
          { label: "A", value: "A" },
          { label: "B", value: "B" },
          { label: "C", value: "C" },
          { label: "D", value: "D" },
        ]}
        defaultValue="M"
        helperText={errors.grade?.message}
        handleChange={handleChange}
      />
      <ControlledTextInput
        name="schoolAddress"
        label="School Address"
        multiline={true}
        rows={4}
        error={!!errors.schoolAddress}
        helperText={errors.schoolAddress?.message}
        value={formData.schoolAddress}
        control={control}
        handleChange={handleChange}
      />
      <FileInput label={"Upload Certificate"} />
    </div>
  );
};
export default Academic;
