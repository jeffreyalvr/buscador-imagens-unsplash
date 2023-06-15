import Container from "@mui/material/Container";

import { useState } from "react";

import api from "../../services/api";

import Header from "../../components/Header";
import ImageList from "../../components/ImageList";
import Pagination from "../../components/Pagination";
import Toast from "../../components/Toast";

import { ThemeProvider, createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

const Home = () => {
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [pagesList, setPagesList] = useState(1);
  const [results, setResults] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAPICall = (params) => {
    api
      .get(params ? `/photos?query=${text}` + params : `/photos?query=${text}`)
      .then((response) => {
        setPagesList(response.data.total_pages);
        setResults(response.data.results);
        setSearchActive(true);
        setSearchedText(text);
      })
      .catch((err) => console.error(err));
  };

  const handleAPICallByPage = (pageNumber) => {
    handleAPICall(`&page=${pageNumber}`);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode == 13) handleSearch();
  };

  const handleSearch = () => {
    resetPageNumber();

    if (isTextInputValid()) {
      showEmptyTextToast(false);
      handleAPICall();
    } else showEmptyTextToast(true);
  };

  const isTextInputValid = () => {
    if (!text || !/\S/.test(text)) return false;
    return true;
  };

  const showEmptyTextToast = (status) => {
    setShowToast(status);
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    handleAPICallByPage(page);
  };

  const resetPageNumber = () => {
    setPage(1);
  };

  const handleClearSearch = () => {
    setText("");
    setSearchActive(false);
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
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown}
        handleClearSearch={handleClearSearch}
        searchActive={searchActive}
        searchedText={searchedText}
      />
      <Container maxWidth="xl">
        {showToast ? (
          <Toast
            text="O campo de busca não pode ficar vazio."
            showEmptyTextToast={showEmptyTextToast}
          />
        ) : (
          ""
        )}
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
