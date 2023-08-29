import "./styles.css";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useEffect, useState } from "react";

const Pagination = ({ pagesTotal, page, handlePageChange, itemsPerPage }) => {
  const [pagesArray, setPagesArray] = useState([]);

  useEffect(() => {
    if (page === pagesTotal) return;

    let array = [];

    for (let current = page; current < page + 5; current++) {
      array.push(current);
    }

    array = array.filter((n) => n < pagesTotal);

    setPagesArray(array);
  }, [page]);

  const handlePreviousPage = () => {
    handlePageChange(page - 1);
  };

  const handleNextPage = () => {
    handlePageChange(page + 1);
  };

  return (
    <div className="pages">
      {page > 5 && (
        <>
          <button onClick={() => handlePageChange(1)}>Início</button>

          <button className="arrow-btn" onClick={() => handlePreviousPage()}>
            <ArrowBackIosNewIcon />
          </button>
        </>
      )}

      {pagesArray.map((number) => {
        return (
          <button
            className={number === page ? "active" : undefined}
            onClick={() => handlePageChange(number)}
            key={number}
          >
            {number}
          </button>
        );
      })}

      {page < pagesTotal && (
        <button className="arrow-btn" onClick={() => handleNextPage()}>
          <ArrowForwardIosIcon />
        </button>
      )}

      {/* exibe que existem mais itens entre o 5 item da lista de páginas e a última página */}
      {pagesArray[pagesArray.length - 1] < pagesTotal - 1 && (
        <span>&bull;&bull;&bull;</span>
      )}

      {/* botão da última página da lista */}
      <button
        className={page === pagesTotal ? "active" : undefined}
        onClick={() => handlePageChange(pagesTotal)}
      >
        {pagesTotal}
      </button>
    </div>
  );
};

export default Pagination;
