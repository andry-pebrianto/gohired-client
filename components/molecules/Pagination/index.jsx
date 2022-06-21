import React from "react";

function Pagination({ pagination, applyFilter }) {
  const tmp = [];
  for (let i = 0; i < pagination.totalPage; i += 1) {
    tmp.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="pagination">
        <li
          className={`page-item ${pagination.currentPage <= 1 && "disabled"}`}
        >
          <button
            className="page-link"
            type="button"
            onClick={() => applyFilter(pagination.currentPage - 1)}
            style={{color: "#5E50A1"}}
          >
            Previous
          </button>
        </li>
        {tmp.map((item, index) => (
          <li
            className={`page-item ${
              index + 1 === pagination.currentPage && "active"
            }`}
            key={Math.random(100)}
          >
            <button
              onClick={() => applyFilter(index + 1)}
              type="button"
              className="page-link"
              style={
                index + 1 === pagination.currentPage
                  ? { backgroundColor: "#5E50A1", borderColor: "#5E50A1" }
                  : { backgroundColor: "#fff", color: "#5E50A1" }
              }
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            pagination.currentPage >= pagination.totalPage && "disabled"
          }`}
        >
          <button
            className="page-link"
            type="button"
            onClick={() => applyFilter(pagination.currentPage + 1)}
            style={{color: "#5E50A1"}}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
