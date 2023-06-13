import "./styles.css";

import logo from "../../assets/images/icon.png";

import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import SearchIcon from "@mui/icons-material/Search";

import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";

const Header = ({
  text,
  handleInputChange,
  handleButtonClick,
  handleKeyDown,
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
            py: { xs: 2 },
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
            onClick={handleButtonClick}
          >
            Procurar
          </Button>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
