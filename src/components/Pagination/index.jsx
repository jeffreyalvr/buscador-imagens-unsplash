import "./styles.css";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useEffect, useState } from "react";

const Pagination = ({ pagesTotal, page, handlePageChange, itemsPerPage }) => {
  const [pagesArray, setPagesArray] = useState([]);

  useEffect(() => {
    handlePaginationArray(pagesTotal);
  }, [pagesTotal, itemsPerPage]);

  const handlePaginationArray = (totalPaginas) => {
    let startIndex = page;
    let endIndex = startIndex + 4;

    if (page === totalPaginas) endIndex = page;

    let arr = Array.from(
      { length: totalPaginas },
      (_, index) => index + 1
    ).slice(startIndex - 1, endIndex);

    if (!arrayIgual(arr, pagesArray)) setPagesArray(arr);
  };

  const arrayIgual = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
  };

  const handlePreviousPageArray = (lastPageIndex) => {
    let pageIndex = 1;
    if (lastPageIndex - 4 < 1) pageIndex = 1;
    else pageIndex = lastPageIndex - 4;
    handlePageChange(pageIndex);
  };

  const handleNextPageArray = (lastPageIndex) => {
    let pageIndex = 1;
    if (lastPageIndex + 4 > pagesTotal) pageIndex = pagesTotal;
    else pageIndex = lastPageIndex + 4;
    handlePageChange(pageIndex);
  };

  const existePaginasEntrePAPT = (pagesArray, pagesTotal) => {
    return Math.abs(pagesArray[pagesArray.length - 1] - pagesTotal) > 1;
  };

  return (
    <div className="pages">
      {page > 2 && <button onClick={() => handlePageChange(1)}>Início</button>}

      {page >= 2 && (
        <button
          className="arrow-btn"
          onClick={() => handlePreviousPageArray(page)}
        >
          <ArrowBackIosNewIcon />
        </button>
      )}

      {pagesArray.map((number) => {
        return (
          <button
            className={number === page ? "active" : undefined}
            onClick={() => handlePageChange(number)}
            key={number}
          >
            {number.toString()}
          </button>
        );
      })}

      {!pagesArray.includes(pagesTotal) &&
      existePaginasEntrePAPT(pagesArray, pagesTotal) ? (
        <button className="arrow-btn" onClick={() => handleNextPageArray(page)}>
          <ArrowForwardIosIcon />
        </button>
      ) : undefined}

      {existePaginasEntrePAPT(pagesArray, pagesTotal) && (
        <span>&bull;&bull;&bull;</span>
      )}

      {!pagesArray.includes(pagesTotal) && (
        <button
          className={page === pagesTotal ? "active" : undefined}
          onClick={() => handlePageChange(pagesTotal)}
        >
          {pagesTotal}
        </button>
      )}
    </div>
  );
};

export default Pagination;
