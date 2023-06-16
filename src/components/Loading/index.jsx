import "./styles.css";

import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => (
  <h1 className="loading-container">
    <CircularProgress />
    Carregando...
  </h1>
);

export default Loading;
