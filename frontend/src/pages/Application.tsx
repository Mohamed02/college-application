import { Typography } from "@mui/material";
import MultiForm from "../components/MultiForm/MultiForm";
import { useCallback, useState } from "react";
import AlertBox from "./AlertBox";

const Application = function () {
  const [showAlertBox, setShowAlertBox] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const displayAlert = useCallback((message: string) => {
    setShowAlertBox(true);
    setAlertMessage(message);
  }, []);
  const handleAlertClose = useCallback(() => {
    setShowAlertBox(false);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full  mt-11">
      <Typography className="text-center w-full" variant="h6">
        {" "}
        Application Submission
      </Typography>
      <MultiForm displayAlert={displayAlert}></MultiForm>
      {showAlertBox && (
        <AlertBox
          handleAlertClose={handleAlertClose}
          showAlertBox={showAlertBox}
          message={alertMessage}
        />
      )}
    </div>
  );
};
export default Application;
