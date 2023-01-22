import Container from "@mui/material/Container";

import { useState } from "react";

import api from "../../services/api";

import Header from "../../components/Header";
import ImageList from "../../components/ImageList";

const Home = () => {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleButtonClick = () => {
    if (!text) return;

    api
      .get(`/photos?query=${text}`)
      .then((response) => setResults(response.data.results))
      .catch((err) => console.error(err));
  };

  return (
    <Container maxWidth="lg">
      <Header
        text={text}
        handleInputChange={handleInputChange}
        handleButtonClick={handleButtonClick}
      />
      <ImageList results={results} />
    </Container>
  );
};

export default Home;
