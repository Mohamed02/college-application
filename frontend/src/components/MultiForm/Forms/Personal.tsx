import { Control, FieldErrors } from "react-hook-form";
import { ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";
import ControlledTextInput from "../../FormElements/ControlledTextInput";
import { CombinedFormDataType } from "../../../yup/schema";
import ControlledDateInput from "../../FormElements/ControlledDateInput";
import ControlledDropdown from "../../FormElements/ControlledDropdown";

type PersonalProps = {
  control: Control<CombinedFormDataType>;
  errors: FieldErrors<CombinedFormDataType>;
  formData: CombinedFormDataType;
  handleChange: (
    event: ChangeEvent<HTMLInputElement> | SelectChangeEvent,
  ) => void;
};
const Personal = function ({
  control,
  errors,
  handleChange,
  formData,
}: PersonalProps) {
  return (
    <div className="flex flex-col">
      <ControlledTextInput
        name="studentName"
        label="Full Name"
        error={!!errors.studentName}
        helperText={errors.studentName?.message}
        control={control}
        value={formData.studentName}
        handleChange={handleChange}
      />
      <ControlledDateInput
        name="dob"
        label="DOB"
        control={control}
        error={!!errors.dob}
        value={formData.dob}
        helperText={errors.dob?.message}
        handleChange={handleChange}
      />
      <ControlledDropdown
        name="gender"
        control={control}
        label="Gender"
        error={!!errors.gender}
        options={[
          { label: "Male", value: "M" },
          { label: "Female", value: "F" },
          { label: "Others", value: "O" },
        ]}
        defaultValue="M"
        helperText={errors.gender?.message}
        handleChange={handleChange}
      />
      <ControlledTextInput
        name="nationality"
        label="Nationality"
        value={formData.nationality}
        error={!!errors.nationality}
        control={control}
        helperText={errors.nationality?.message}
        handleChange={handleChange}
      />
      <ControlledTextInput
        name="email"
        label="Email"
        error={!!errors.email}
        value={formData.email}
        helperText={errors.email?.message}
        control={control}
        handleChange={handleChange}
      />
      <ControlledTextInput
        name="address"
        label="Address"
        multiline={true}
        rows={4}
        error={!!errors.address}
        value={formData.address}
        helperText={errors.address?.message}
        control={control}
        handleChange={handleChange}
      />
    </div>
  );
};
export default Personal;
