import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
export type DropdownOptionType = { label: string; value: string };
type DropdownProps = {
  label: string;
  options: Array<DropdownOptionType>;
  defaultValue: string;
  error: boolean;
  helperText?: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent,
  ) => void;
};

const Dropdown = function ({ label, ...attributes }: DropdownProps) {
  const [dropdownValue, setDropdownValue] = useState(attributes.defaultValue);
  const changeHandler = (event: SelectChangeEvent) => {
    setDropdownValue(event.target.value as string);
    attributes.handleChange(event);
  };
  return (
    <div className="w-full h-20">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dropdownValue}
          {...attributes}
          margin="none"
          label={label}
          size="small"
          onChange={changeHandler}
        >
          {attributes.options.map(({ label, value }) => (
            <MenuItem value={value}>{label}</MenuItem>
          ))}
        </Select>
        <span className="text-red-700 text-xs m-1">
          {attributes.helperText}
        </span>
      </FormControl>
    </div>
  );
};
export default Dropdown;
