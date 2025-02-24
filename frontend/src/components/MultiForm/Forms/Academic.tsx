import { CombinedFormDataType } from "../../../yup/schema";
import { Control, FieldErrors } from "react-hook-form";
import { ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";
import ControlledTextInput from "../../FormElements/ControlledTextInput";
import ControlledDateInput from "../../FormElements/ControlledDateInput";
import ControlledDropdown from "../../FormElements/ControlledDropdown";
import FileInput from "../../FormElements/FileInput";

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
        value={formData.graduationDate}
        helperText={errors.graduationDate?.message}
        handleChange={handleChange}
      />
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
      <FileInput name="markSheet" label={"Upload MarkSheet"} />
    </div>
  );
};
export default Academic;
