import { Control, Controller } from "react-hook-form";
import { CombinedFormDataType } from "../../yup/schema";
import DateInput from "./DateInput";
type ControlledInputProps = {
  name: keyof CombinedFormDataType;
  label: string;
  control: Control<CombinedFormDataType>;
  error: boolean;
  helperText?: string;
  value: Date;
  defaultValue?: string;
  multiline?: boolean;
  rows?: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const ControlledDateInput = function ({
  name,
  control,
  ...attributes
}: ControlledInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <DateInput {...field} {...attributes} />}
    />
  );
};
export default ControlledDateInput;
