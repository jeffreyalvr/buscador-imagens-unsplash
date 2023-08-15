import { useState } from "react";

import api from "../../services/api";

import { ThemeProvider, createTheme } from "@mui/material";
import Container from "@mui/material/Container";
import { blue } from "@mui/material/colors";

import Header from "../../components/Header";
import ImageList from "../../components/ImageList";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import Toast from "../../components/Toast";

const Home = () => {
  const [text, setText] = useState("");
  const [searchedText, setSearchedText] = useState("");
  const [page, setPage] = useState(1);
  const [pagesList, setPagesList] = useState(1);
  const [results, setResults] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toastVisibility, setToastVisibility] = useState(false);
  const [toastText, setToastText] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAPICall = (params) => {
    setLoading(true);

    api
      .get(
        params
          ? `/photos?query=${text || searchedText}` + params
          : `/photos?query=${text || searchedText}` +
              `&per_page=${itemsPerPage}`
      )
      .then((response) => {
        setLoading(false);
        if (response.data.total <= 0) handleNoResults();

        setSearchActive(true);
        setPagesList(response.data.total_pages);
        setResults(response.data.results);
        setSearchedText(text || searchedText);
      })
      .catch((err) => console.error(err));
  };

  const handleKeyDown = (e) => {
    if (e.keyCode == 13) handleSearch();
  };

  const handleSearch = () => {
    if (isTextInputValid()) {
      handleShowToast(false);
      handleAPICall();
      resetPageNumber();
    } else {
      changeToastText("O campo de busca não pode ficar vazio.");
      handleShowToast(true);
    }
  };

  const handleNoResults = () => {
    changeToastText(
      `Nenhum resultado encontrado para a busca "${text || searchedText}".`
    );
    handleShowToast(true);
  };

  const isTextInputValid = () => {
    return !text || !/\S/.test(text);
  };

  const changeToastText = (text) => {
    setToastText(text);
  };

  const handleShowToast = (status) => {
    setToastVisibility(status);
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    handleAPICall(`&page=${pageNumber}`);
  };

  const resetPageNumber = () => {
    setPage(1);
  };

  const handleClearSearch = () => {
    setText("");
    setSearchActive(false);
  };

  const handleItemsPerPage = (e) => {
    const perPage = e.target.value;
    setItemsPerPage(perPage);
    handleAPICall(`&per_page=${perPage}`);
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
        {loading ? (
          <Loading />
        ) : (
          <>
            <Toast
              toastVisibility={toastVisibility}
              text={toastText}
              handleShowToast={handleShowToast}
            />
            <ImageList
              results={results}
              itemsPerPage={itemsPerPage}
              handleItemsPerPage={handleItemsPerPage}
              img_author={1}
              img_dimensions={2}
            />
            {pagesList > 1 && (
              <Pagination
                page={page}
                pagesList={pagesList}
                handlePageChange={handlePageChange}
              />
            )}
          </>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Home;
