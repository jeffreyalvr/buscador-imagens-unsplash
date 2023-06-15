import "./styles.css";

import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

const Toast = ({ showEmptyTextToast, text }) => {
  return (
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
        onClick={() => showEmptyTextToast(false)}
        title="Fechar"
      >
        <CloseIcon />
      </Button>
    </div>
  );
};

export default Toast;
