import { Button } from "@mui/material";
import { useState } from "react";

type FileType = File | null;
type FileInputProps = {
  label: string;
  name: string;
};
const FileInput = function ({ label, name }: FileInputProps) {
  const [file, setFile] = useState<FileType>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files ? event.target.files[0] : null);
  };
  const handleClick = () => {
    document?.getElementById("file-input")?.click();
  };
  return (
    <div className="mt-5">
      <input
        name={name}
        type="file"
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
    </div>
  );
};

export default FileInput;
