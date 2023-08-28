import "./styles.css";

import { useEffect, useState } from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Pagination = ({ pagesList, page, handlePageChange, itemsPerPage }) => {
  const [pagesListArray, setPagesListArray] = useState([]);
  const [currentPageRange, setCurrentPageRange] = useState([1, 5]);
  const [moreThan5Pages, setMoreThan5Pages] = useState(false);

  useEffect(() => {
    if (pagesList > 5) {
      setMoreThan5Pages(true);
      setPagesListArray(Array.from({ length: 5 }, (_, i) => i + 1));
    } else {
      setMoreThan5Pages(false);
    }
  }, []);

  const handlePreviousPageRange = () => {
    setCurrentPageRange((prevState) => prevState.map((el) => el - 1));
  };

  const handleNextPageRange = () => {
    setCurrentPageRange((prevState) => prevState.map((el) => el + 1));
  };

  return (
    <div className="pages">
      {currentPageRange[0] > 1 && (
        <button className="arrow-btn" onClick={() => handlePreviousPageRange()}>
          <ArrowBackIosNewIcon />
        </button>
      )}

      {pagesListArray.map((number) => (
        <button
          className={number === page ? "active" : ""}
          onClick={() => handlePageChange(number)}
          key={number}
        >
          {number}
        </button>
      ))}

      {moreThan5Pages && page < pagesList && (
        <>
          {pagesList > 1 && (
            <button className="arrow-btn" onClick={() => handleNextPageRange()}>
              <ArrowForwardIosIcon />
            </button>
          )}
          <span>&bull;&bull;&bull;</span>
          <button onClick={() => handlePageChange(pagesList)}>
            {pagesList}
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
