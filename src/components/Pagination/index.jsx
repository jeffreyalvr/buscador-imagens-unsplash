import "./styles.css";

import { useEffect, useState } from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Pagination = ({ pages, page, handlePageChange }) => {
  const [pagesArray, setPagesArray] = useState([]);
  const [currentPageRange, setCurrentPageRange] = useState([1, 5]);

  const maxPagesToShow = 5;

  useEffect(() => {
    // limitador de páginas para evitar excessos
    if (pages > maxPagesToShow) pages = maxPagesToShow;
    setPagesArray(Array.from({ length: pages }, (_, i) => i + 1));
    console.log(currentPageRange);
  }, []);

  const handlePreviousPageRange = () => {
    setCurrentPageRange((prevState) => prevState.map((el) => el - 1));
  };

  const handleNextPageRange = () => {
    setCurrentPageRange((prevState) => prevState.map((el) => el + 1));
  };

  return (
    <div className="pages">
      {currentPageRange[0] > 1 ? (
        <button onClick={() => handlePreviousPageRange()}>
          <ArrowBackIosNewIcon />
        </button>
      ) : null}
      {pagesArray.map((number) => (
        <button
          className={number === page ? "active" : ""}
          onClick={() => handlePageChange(number)}
          key={number}
        >
          {number}
        </button>
      ))}
      {pages > 1 ? (
        <button onClick={() => handleNextPageRange()}>
          <ArrowForwardIosIcon />
        </button>
      ) : null}
    </div>
  );
};

export default Pagination;
