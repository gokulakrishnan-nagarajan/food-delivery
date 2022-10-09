import React, { useState, useMemo, useEffect } from "react";

import PaginationAction from "./PaginationActions";

import styles from "./Pagination.module.css";

function Pagination(props) {
  const { items, pageSize } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [items]);

  useEffect(() => {
    if (!items.length) {
      setStartIndex(-1);
      setEndIndex(-1);
      return;
    }

    const newStartIndex = (currentPage - 1) * pageSize;
    const newEndIndex = currentPage * pageSize - 1;

    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex < items.length ? newEndIndex : items.length - 1);
  }, [currentPage, pageSize, items.length]);

  const pageItems = useMemo(() => {
    if (items.length === 0) {
      return (
        <div className={`flex-grow-1 flex-justify-center`}>No item found</div>
      );
    }

    return items.slice(startIndex, startIndex + pageSize);
  }, [items, startIndex, pageSize]);

  return (
    <div className={`${styles.container} flex-column`}>
      <div className={`${styles.content} flex-wrap flex-grow-1`}>
        {pageItems}
      </div>
      <div
        className={`${styles["actions-container"]} flex-column flex-align-center`}
      >
        <PaginationAction
          items={items}
          pageSize={pageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <span className={`${styles["sequence-info"]}`}>
          {startIndex + 1} - {endIndex + 1} of {items.length}
        </span>
      </div>
    </div>
  );
}

export default Pagination;
