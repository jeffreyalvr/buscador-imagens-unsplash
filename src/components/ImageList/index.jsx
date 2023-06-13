import "./styles.css";

import Typography from "@mui/material/Typography";

const ImageList = ({ results }) => {
  return !results.length ? (
    ""
  ) : (
    <div className="image-list-container">
      <Typography
        variant="overline"
        sx={{
          margin: "20px",
          display: "block",
          textAlign: "center",
          color: "#264992",
        }}
      >
        Exibindo até 10 itens por página.
      </Typography>

      <div className="image-list">
        {results.map((result) => (
          <div className="image-item" key={result.id}>
            <img src={result.urls.raw} alt={result.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
