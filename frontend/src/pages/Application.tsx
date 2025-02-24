import { Typography } from "@mui/material";
import MultiForm from "../components/MultiForm/MultiForm";

const Application = function () {
  return (
    <div className="flex flex-col items-center justify-center w-full  mt-11">
      <Typography className="text-center w-full" variant="h6">
        {" "}
        Application Submission
      </Typography>
      <MultiForm></MultiForm>
    </div>
  );
};
export default Application;
