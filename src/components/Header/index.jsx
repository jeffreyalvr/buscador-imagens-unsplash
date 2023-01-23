import "./styles.css";

import logo from "../../assets/images/icon.png";

import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import SearchIcon from "@mui/icons-material/Search";

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
        }}
      >
        <TextField
          type="text"
          placeholder="Procure por uma imagem no Unsplash..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ImageSearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ flexGrow: 4 }}
          value={text}
          onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <Button
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          sx={{ flexGrow: 1 }}
          onClick={handleButtonClick}
        >
          Procurar
        </Button>
      </Box>
    </header>
  );
};

export default Header;
