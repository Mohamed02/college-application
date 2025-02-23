import { TextField } from "@mui/material";
type TextInputProps = {
  inputType?: "text" | "email" | "date" | "address";
  error: boolean;
  label: string;
  defaultValue?: string;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const TextInput = function ({
  inputType = "text",
  handleChange,
  ...attributes
}: TextInputProps) {
  return (
    <div className={`w-full ${attributes.multiline ? "h-30" : "h-20"}`}>
      <TextField
        fullWidth
        type={inputType}
        {...attributes}
        size="small"
        onChange={handleChange}
        // value={field.name}
        // id={`document-field-${field.id}`}
        variant="outlined"
        margin="none"
      />
    </div>
  );
};
export default TextInput;
