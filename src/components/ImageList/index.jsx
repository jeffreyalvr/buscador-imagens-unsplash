import "./styles.css";

import Typography from "@mui/material/Typography";

import Pagination from "../Pagination";

const ImageList = ({ results, pagesList, handlePageChange }) => {
  return !results.length ? (
    ""
  ) : (
    <>
      <Typography
        variant="overline"
        sx={{
          margin: "20px 0 0 0",
          display: "block",
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

      <Pagination pages={pagesList} handlePageChange={handlePageChange} />
    </>
  );
};

export default ImageList;
