import Container from "@mui/material/Container";

import { useState } from "react";

import api from "../../services/api";

import Header from "../../components/Header";
import ImageList from "../../components/ImageList";
import Pagination from "../../components/Pagination";

import Typography from "@mui/material/Typography";

const Home = () => {
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [pagesList, setPagesList] = useState(1);
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAPICall = () => {
    api
      .get(`/photos?query=${text}`)
      .then((response) => {
        setPagesList(response.data.total_pages);
        setResults(response.data.results);
      })
      .catch((err) => console.error(err));
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
  };

  return (
    <Container maxWidth="lg">
      <Header
        text={text}
        handleInputChange={handleInputChange}
        handleButtonClick={handleButtonClick}
        handleKeyDown={handleKeyDown}
      />
      <Typography
        variant="overline"
        sx={{
          margin: "20px 0 0 0",
          display: "block",
        }}
      >
        Exibindo 10 itens por página.
      </Typography>
      <ImageList results={results} page={page} />
      <Pagination pages={pagesList} handlePageChange={handlePageChange} />
    </Container>
  );
};

export default Home;
