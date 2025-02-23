import { TextField, Typography } from "@mui/material";
type DateInputProps = {
  label: string;
  error: boolean;
  defaultValue?: string;
  helperText?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: Date;
};
const DateInput = function ({
  label,
  helperText,
  handleChange,
  value,
  ...attributes
}: DateInputProps) {
  const formatDate = (date: Date): string => {
    const dateVal = date;
    const year = dateVal.getFullYear();
    const month = String(dateVal.getMonth() + 1).padStart(2, "0"); // Ensure 2 digits for month
    const day = String(dateVal.getDate()).padStart(2, "0"); // Ensure 2 digits for day

    return `${year}-${month}-${day}`; // Format as YYYY-MM-DD
  };
  return (
    <div className="w-full h-20">
      <TextField
        type="date"
        size="small"
        fullWidth
        margin="none"
        label={label}
        variant="outlined"
        {...attributes}
        onChange={handleChange}
        value={formatDate(new Date(value))}
      />
      <Typography variant="caption" color="error">
        {helperText}
      </Typography>
    </div>
  );
};
export default DateInput;
