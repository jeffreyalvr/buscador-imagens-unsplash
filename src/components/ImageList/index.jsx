import "./styles.css";

import img_likes from "../../assets/images/likes.png";

import ViewIcon from "@mui/icons-material/OpenInNew";
import ExpandIcon from "@mui/icons-material/Visibility";
import InfoIcon from "@mui/icons-material/HelpOutline";

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
  handleImageSafe,
  img_orientation,
  img_sort,
  img_safe,
}) => {
  return (
    !!results.length && (
      <div className="image-list-container">
        <div className="items-per-page-container">
          <div className="item">
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
            <Select
              value={img_sort}
              onChange={handleImageSort}
              sx={{ maxHeight: "50px" }}
            >
              <MenuItem value="popular">relevância</MenuItem>
              <MenuItem value="latest">mais recente</MenuItem>
            </Select>
          </div>
          <div className="item">
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
            <Select
              value={img_orientation}
              onChange={handleImageOrientation}
              sx={{ maxHeight: "50px" }}
            >
              <MenuItem value="both">ambas</MenuItem>
              <MenuItem value="portrait">retrato</MenuItem>
              <MenuItem value="landscape">paisagem</MenuItem>
            </Select>
          </div>
          <div className="item">
            <Typography
              variant="overline"
              sx={{
                margin: "20px",
                display: "block",
                textAlign: "center",
                color: "#264992",
              }}
            >
              Itens por página
            </Typography>
            <Select
              value={itemsPerPage}
              onChange={handleItemsPerPage}
              sx={{ maxHeight: "50px" }}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
            </Select>
          </div>
          <div className="item">
            <Typography
              variant="overline"
              sx={{
                margin: "20px",
                display: "block",
                textAlign: "center",
                color: "#264992",
              }}
              title="Reduz as chances de conteúdo impróprio ser listado nos resultados"
            >
              Filtragem NSFW <InfoIcon />
            </Typography>
            <Select
              value={img_safe}
              onChange={handleImageSafe}
              sx={{ maxHeight: "50px" }}
            >
              <MenuItem value="high">alta</MenuItem>
              <MenuItem value="low">baixa</MenuItem>
            </Select>
          </div>
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
                  <div className="buttons-list">
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<ExpandIcon />}
                      sx={{
                        flexGrow: 1,
                        background: "linear-gradient(254deg, #00a7cb, #5144fb)",
                      }}
                      onClick={() => window.open(result.urls.full)}
                    >
                      Expandir
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<ViewIcon />}
                      sx={{
                        flexGrow: 1,
                        background:
                          "linear-gradient(254deg, #bba434 , #db8062)",
                      }}
                      onClick={() => window.open(result.links.html)}
                    >
                      Ver no Unsplash
                    </Button>
                  </div>
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
