import { Alert, Snackbar, Typography } from "@mui/material";
import MultiForm from "../components/MultiForm/MultiForm";
import { useCallback, useState } from "react";

const Application = function () {
  const [showSnackBar, setShowSnackBar] = useState<boolean>(false);
  const displayAlert = useCallback(() => {
    setShowSnackBar(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full  mt-11">
      <Typography className="text-center w-full" variant="h6">
        {" "}
        Application Submission
      </Typography>
      <MultiForm displayAlert={displayAlert}></MultiForm>
      {showSnackBar && (
        <Snackbar
          open={showSnackBar}
          autoHideDuration={3000} // Message will hide after 3 seconds
          onClose={() => {
            setShowSnackBar(false);
          }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={() => {
              setShowSnackBar(false);
            }}
            severity="success"
          >
            Form submitted successfully!
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};
export default Application;
