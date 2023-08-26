import "./styles.css";

import img_likes from "../../assets/images/likes.png";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const ImageList = ({
  results,
  itemsPerPage,
  handleItemsPerPage,
  handleImageOrientation,
  handleImageSort,
  img_orientation,
  img_sort,
}) => {
  return (
    !!results.length && (
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
            Ordenar por
          </Typography>
          <Select value={img_sort} onChange={handleImageSort}>
            <MenuItem value="popular">relevância</MenuItem>
            <MenuItem value="latest">mais recente</MenuItem>
          </Select>
          <Typography
            variant="overline"
            sx={{
              margin: "20px",
              display: "block",
              textAlign: "center",
              color: "#264992",
            }}
          >
            Orientação
          </Typography>
          <Select value={img_orientation} onChange={handleImageOrientation}>
            <MenuItem value="both">ambas</MenuItem>
            <MenuItem value="portrait">retrato</MenuItem>
            <MenuItem value="landscape">paisagem</MenuItem>
          </Select>
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
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
          </Select>
        </div>
        <div className="image-list">
          {results.map((result) => (
            <div className="image-item" key={result.id}>
              <img
                src={result.urls.regular}
                alt={result.description}
                loading="lazy"
              />
              <div className="overlay">
                <div className="overlay-container">
                  <p>@{result.user.username}</p>
                  <span>
                    {result.height}x{result.width}
                  </span>
                  <span>
                    <img
                      className="likes-icon"
                      src={img_likes}
                      alt="Curtidas"
                    />
                    {result.likes}
                  </span>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      flexGrow: 1,
                      background: "linear-gradient(254deg, #00a7cb, #5144fb)",
                    }}
                    onClick={() => window.open(result.urls.full)}
                  >
                    Ver imagem
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default ImageList;
