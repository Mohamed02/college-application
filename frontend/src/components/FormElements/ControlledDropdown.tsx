import { Control, Controller } from "react-hook-form";
import { CombinedFormDataType } from "../../yup/schema";
import Dropdown, { DropdownOptionType } from "./Dropdown";
import { SelectChangeEvent } from "@mui/material";
type ControlledInputProps = {
  name: keyof CombinedFormDataType;
  label: string;
  control: Control<CombinedFormDataType>;
  error: boolean;
  defaultValue: string;
  helperText?: string;
  options: Array<DropdownOptionType>;
  handleChange: (event: SelectChangeEvent) => void;
};
const ControlledDropdown = function ({
  name,
  control,
  ...attributes
}: ControlledInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Dropdown {...field} {...attributes}></Dropdown>}
    />
  );
};
export default ControlledDropdown;
