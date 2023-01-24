import "./styles.css";

import Typography from "@mui/material/Typography";

import Pagination from "../Pagination";

const ImageList = ({ results, pagesList, page, handlePageChange }) => {
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

      <Pagination
        page={page}
        pages={pagesList}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default ImageList;
