import { Alert, Snackbar } from "@mui/material";
import React from "react";

type AlertBoxType = {
  showAlertBox: boolean;
  handleAlertClose: () => void;
  message: string;
};
const AlertBox = function ({
  showAlertBox,
  handleAlertClose,
  message,
}: AlertBoxType) {
  return (
    <Snackbar
      open={showAlertBox}
      autoHideDuration={3000} // Message will hide after 3 seconds
      onClose={handleAlertClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleAlertClose} severity="info">
        {message}
      </Alert>
    </Snackbar>
  );
};
export default React.memo(AlertBox);
