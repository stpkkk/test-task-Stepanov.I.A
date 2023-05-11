import React, { useState, useEffect } from "react";
import TableRow from "./TableRow";

const PAGE_SIZE = 5;

const Table = ({ participants }) => {
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedParticipants, setSortedParticipants] = useState([]);

  // Sort the participants array whenever the sortConfig or participants props change
  useEffect(() => {
    const sortedArray = [...participants].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
    setSortedParticipants(sortedArray);
  }, [participants, sortConfig]);

  // Get the current page of data based on the currentPage and PAGE_SIZE constants
  const getPageData = () => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return sortedParticipants.slice(startIndex, endIndex);
  };

  // Handle sorting when a column header is clicked
  const handleSort = key => {
    if (sortConfig.key === key) {
      setSortConfig({
        key: key,
        direction: sortConfig.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSortConfig({ key: key, direction: "asc" });
    }
  };

  // Handle changing the current page when a pagination button is clicked
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  // Generate an array of pagination buttons
  const paginationButtons = () => {
    const pageCount = Math.ceil(sortedParticipants.length / PAGE_SIZE);
    const buttons = [];
    for (let i = 1; i <= pageCount; i++) {
      buttons.push(
        <li className={`page-item${currentPage === i ? "active " : ""}`}>
          <button
            className="page-link"
            key={i}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return buttons;
  };

  return (
    <>
      <table className="table" id="sortTable">
        <thead>
          <tr>
            <th
              scope="col"
              onClick={() => {
                handleSort("id");
              }}
            >
              id
            </th>
            <th
              scope="col"
              onClick={() => {
                handleSort("name");
              }}
            >
              Имя
            </th>
            <th
              scope="col"
              onClick={() => {
                handleSort("points");
              }}
            >
              Очки
            </th>
          </tr>
        </thead>
        <tbody>
          {getPageData().map(({ id, name, points }, index) => (
            <TableRow
              key={id}
              id={(currentPage - 1) * PAGE_SIZE + index + 1}
              name={name}
              points={points}
            />
          ))}
        </tbody>
      </table>
      <ul className="pagination">{paginationButtons()}</ul>
    </>
  );
};

export default Table;
