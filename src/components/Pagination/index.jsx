import "./styles.css";

import { useEffect, useState } from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Pagination = ({ pagesList, page, handlePageChange }) => {
  const [pagesListArray, setpagesListArray] = useState([]);
  const [currentPageRange, setCurrentPageRange] = useState([1, 5]);

  const maxpagesListToShow = 5;

  useEffect(() => {
    // limitador de páginas para evitar excessos
    if (pagesList > maxpagesListToShow) pagesList = maxpagesListToShow;
    setpagesListArray(Array.from({ length: pagesList }, (_, i) => i + 1));
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
      {pagesListArray.map((number) => (
        <button
          className={number === page ? "active" : ""}
          onClick={() => handlePageChange(number)}
          key={number}
        >
          {number}
        </button>
      ))}
      {pagesList > 1 ? (
        <button onClick={() => handleNextPageRange()}>
          <ArrowForwardIosIcon />
        </button>
      ) : null}
    </div>
  );
};

export default Pagination;
