import "./styles.css";

import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

const Toast = ({ handleShowToast, text, toastVisibility }) =>
  toastVisibility ? (
    <div className="toast">
      <p>{text}</p>
      <Button
        variant="contained"
        size="medium"
        sx={{
          background: "#fb4a44",
          ":hover": {
            bgcolor: "#ff5953",
          },
        }}
        onClick={() => handleShowToast(false)}
        title="Fechar"
      >
        <CloseIcon />
      </Button>
    </div>
  ) : null;

export default Toast;
