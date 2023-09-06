import { ThemeProvider, createTheme } from "@mui/material";
import Container from "@mui/material/Container";
import { blue } from "@mui/material/colors";

import "./styles.css";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();

  const theme = createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
    },
  });

  const handleGoBack = () => {
    let path = "/";
    navigate(path);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "200px",
        }}
      >
        <div className="box">
          <Typography variant="h5">
            A página especificada não existe.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              flexGrow: 1,
              background: "linear-gradient(254deg, #00a7cb, #5144fb)",
              ml: { sm: 3 },
              mt: { xs: 1, sm: 0 },
              py: { xs: 2 },
            }}
            onClick={handleGoBack}
          >
            Voltar para a home
          </Button>
        </div>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default NotFound;
