import { Button } from "@mui/material";
import { useState } from "react";

type FileType = File | null;
type FileInputProps = {
  label: string;
  name: string;
  value: string;
  error: boolean;
  helperText?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const FileInput = function ({
  label,
  name,
  helperText,
  handleChange,
  ...attributes
}: FileInputProps) {
  const [file, setFile] = useState<FileType>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files ? event.target.files[0] : null);
    handleChange(event);
  };
  const handleClick = () => {
    document?.getElementById("file-input")?.click();
  };
  return (
    <div className="mt-5">
      <input
        name={name}
        type="file"
        {...attributes}
        id="file-input"
        className="hidden"
        onChange={handleFileChange}
      />
      <Button variant="contained" color="primary" onClick={handleClick}>
        {label}
      </Button>
      {file && (
        <>
          <strong className="ml-3">Selected File: </strong>
          {file.name}
        </>
      )}
      <p>{helperText}</p>
    </div>
  );
};

export default FileInput;
