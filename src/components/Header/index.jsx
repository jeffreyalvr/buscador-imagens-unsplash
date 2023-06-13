import "./styles.css";

import logo from "../../assets/images/icon.png";

import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";

const Header = ({
  text,
  handleInputChange,
  handleSearchButton,
  handleClearSearchButton,
  handleKeyDown,
  searchActive,
}) => {
  return (
    <header>
      <Container maxWidth="xl" className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <Typography variant="h5">Buscador Unsplash</Typography>
        </div>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: {
              xxs: "column",
              xs: "column",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "row",
            },
            py: { xs: 4 },
          }}
        >
          <TextField
            type="text"
            placeholder="Procure por uma imagem no Unsplash..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ImageSearchIcon style={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
            inputProps={{
              sx: {
                color: "#fff",
              },
            }}
            sx={{
              flexGrow: 4,
              backgroundColor: "transparent",
              border: "1px solid #6767674d",
            }}
            value={text}
            onChange={(e) => handleInputChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <Button
            variant="contained"
            size="large"
            startIcon={<SearchIcon />}
            sx={{
              flexGrow: 1,
              background: "linear-gradient(254deg, #00a7cb, #5144fb)",
              ml: { sm: 3 },
              mt: { xs: 1, sm: 0 },
              py: { xs: 2 },
            }}
            onClick={handleSearchButton}
          >
            Procurar
          </Button>
        </Box>

        {searchActive ? (
          <div className="search-container">
            <label>Você pesquisou por:</label>
            <Button
              variant="contained"
              size="medium"
              endIcon={<CloseIcon />}
              sx={{
                flexGrow: 1,
                background: "#5244fb",
              }}
              title="Remover o item da busca"
              onClick={handleClearSearchButton}
            >
              {text}
            </Button>
          </div>
        ) : (
          ""
        )}
      </Container>
    </header>
  );
};

export default Header;
