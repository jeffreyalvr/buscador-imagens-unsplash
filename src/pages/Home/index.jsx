import { useState, useEffect } from "react";

import api from "../../services/api";

import { ThemeProvider, createTheme } from "@mui/material";
import Container from "@mui/material/Container";
import { blue } from "@mui/material/colors";

import Header from "../../components/Header";
import ImageList from "../../components/ImageList";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import Toast from "../../components/Toast";

import Footer from "../../components/Footer";

const Home = () => {
  const [text, setText] = useState("");
  const [searchedText, setSearchedText] = useState("");
  const [page, setPage] = useState(1);
  const [pagesTotal, setPagesTotal] = useState(1);
  const [results, setResults] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toastVisibility, setToastVisibility] = useState(false);
  const [toastText, setToastText] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [imgOrientation, setImgOrientation] = useState("both");
  const [imgSort, setImgSort] = useState("popular");
  const [imgSafe, setImgSafe] = useState("high");

  useEffect(() => {
    handleAPICall();
  }, [searchActive]);

  useEffect(() => {
    handleAPICall(true);
  }, [page, itemsPerPage]);

  useEffect(() => {
    setPage(1);
  }, [itemsPerPage]);

  useEffect(() => {
    handleAPICall(true);
    handlePageChange(1);
  }, [imgOrientation, imgSort, imgSafe]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAPICall = (isSameTopic) => {
    if (!searchActive) return;

    setLoading(true);

    const url =
      `/photos?query=${isSameTopic ? searchedText : text}` +
      `&per_page=${itemsPerPage}` +
      `&page=${page}` +
      `&order_by=${imgSort}` +
      `&content_filter=${imgSafe}`;
    api
      .get(
        imgOrientation !== "both" ? url + `&orientation=${imgOrientation}` : url
      )
      .then((response) => {
        setLoading(false);
        if (response.data.total <= 0) handleNoResults();

        setPagesTotal(response.data.total_pages);
        setResults(response.data.results);
      })
      .catch((err) => console.error(err));
  };

  const handleKeyDown = (e) => {
    if (e.keyCode == 13) handleSearch();
  };

  const handleSearch = () => {
    if (isTextInputInvalid()) {
      changeToastText(
        "O campo de busca não pode ficar vazio ou conter apenas números."
      );
      handleShowToast(true);
      return;
    }

    setSearchedText(text);
    handleSearchStatus(true);
    handleShowToast(false);
    handlePageChange(1);
    handleAPICall();
  };

  const handleSearchStatus = (state) => {
    setSearchActive(state);
  };

  const handleNoResults = () => {
    changeToastText(
      `Nenhum resultado encontrado para a busca "${text || searchedText}".`
    );
    handleShowToast(true);
  };

  const isTextInputInvalid = () => {
    return !text || /^[\d\s]+$/.test(text);
  };

  const changeToastText = (text) => {
    setToastText(text);
  };

  const handleShowToast = (status) => {
    setToastVisibility(status);
  };

  const handleClearSearch = () => {
    handleSearchStatus(false);
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleItemsPerPage = (e) => {
    const perPage = e.target.value;
    setItemsPerPage(perPage);
  };

  const handleImageOrientation = (e) => {
    const orientation = e.target.value;
    setImgOrientation(orientation);
  };

  const handleImageSort = (e) => {
    const sort_by = e.target.value;
    setImgSort(sort_by);
  };

  const handleImageSafe = (e) => {
    const status = e.target.value;
    setImgSafe(status);
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
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown}
        handleClearSearch={handleClearSearch}
        searchActive={searchActive}
        searchedText={searchedText}
        text={text}
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
              img_orientation={imgOrientation}
              img_sort={imgSort}
              img_safe={imgSafe}
              handleImageOrientation={handleImageOrientation}
              handleImageSort={handleImageSort}
              handleImageSafe={handleImageSafe}
            />
            {pagesTotal > 1 && (
              <Pagination
                page={page}
                pagesTotal={pagesTotal}
                handlePageChange={handlePageChange}
                itemsPerPage={itemsPerPage}
              />
            )}
          </>
        )}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Home;
