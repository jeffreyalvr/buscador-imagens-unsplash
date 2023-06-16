import "./styles.css";

import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ImageList = ({ results, itemsPerPage, handleItemsPerPage }) => {
  return !results.length ? (
    ""
  ) : (
    <div className="image-list-container">
      <div className="items-per-page-container">
        <Typography
          variant="overline"
          sx={{
            margin: "20px",
            display: "block",
            textAlign: "center",
            color: "#264992",
          }}
        >
          Quantidade de itens por página
        </Typography>
        <Select value={itemsPerPage} onChange={handleItemsPerPage}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </div>
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
