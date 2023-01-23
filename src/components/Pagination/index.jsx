import "./styles.css";

import { useEffect, useState } from "react";

const Pagination = ({ pages, handlePageChange }) => {
  const [pagesArray, setPagesArray] = useState([]);

  useEffect(() => {
    // limitador de páginas para evitar excessos
    if (pages > 10) pages = 10;
    setPagesArray(Array.from({ length: pages }, (_, i) => i + 1));
  }, []);

  return (
    <div className="pages">
      {pagesArray.map((page) => (
        <button
          className={page === 1 ? "active" : ""}
          onClick={() => handlePageChange(page)}
          key={page}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
