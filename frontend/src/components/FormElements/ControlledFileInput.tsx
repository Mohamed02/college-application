import { Control, Controller } from "react-hook-form";
import { CombinedFormDataType } from "../../yup/schema";
import FileInput from "./FileInput";
type ControlledInputProps = {
  name: keyof CombinedFormDataType;
  label: string;
  control: Control<CombinedFormDataType>;
  error: boolean;
  value: string;
  defaultValue?: string;
  multiline?: boolean;
  rows?: number;
  helperText?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const ControlledFileInput = function ({
  name,
  control,
  ...attributes
}: ControlledInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <FileInput {...field} {...attributes} />
        </>
      )}
    />
  );
};
export default ControlledFileInput;
