import Container from "@mui/material/Container";

import { useState } from "react";

import api from "../../services/api";

import Header from "../../components/Header";
import ImageList from "../../components/ImageList";
import Pagination from "../../components/Pagination";

import { ThemeProvider, createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

const Home = () => {
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [pagesList, setPagesList] = useState(1);
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAPICall = (params) => {
    api
      .get(params ? `/photos?query=${text}` + params : `/photos?query=${text}`)
      .then((response) => {
        setPagesList(response.data.total_pages);
        setResults(response.data.results);
      })
      .catch((err) => console.error(err));
  };

  const handleAPICallByPage = (pageNumber) => {
    handleAPICall(`&page=${pageNumber}`);
  };

  const handleButtonClick = () => {
    if (!text) return;
    handleAPICall();
  };

  const handleKeyDown = (e) => {
    if (!text) return;
    if (e.keyCode == 13) handleAPICall();
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    handleAPICallByPage(page);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header
        text={text}
        handleInputChange={handleInputChange}
        handleButtonClick={handleButtonClick}
        handleKeyDown={handleKeyDown}
      />
      <Container maxWidth="xl">
        <ImageList results={results} />
        {pagesList <= 1 ? (
          ""
        ) : (
          <Pagination
            page={page}
            pagesList={pagesList}
            handlePageChange={handlePageChange}
          />
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Home;
