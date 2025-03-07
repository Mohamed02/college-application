import { Control, Controller } from "react-hook-form";
import { CombinedFormDataType } from "../../yup/schema";
import TextInput from "./TextInput";
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
const ControlledTextInput = function ({
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
          <TextInput {...field} {...attributes} />
        </>
      )}
    />
  );
};
export default ControlledTextInput;
