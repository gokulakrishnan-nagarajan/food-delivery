import React, { useState, useMemo, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleDoubleLeft,
  faAngleRight,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

import { getStartAndEndPageNumbers } from "../../helpers/calculations";
import PageNumber from "./PageNumber";

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
    const tempStartIndex = (currentPage - 1) * pageSize;
    const tempEndIndex = currentPage * pageSize - 1;

    setStartIndex(tempStartIndex);
    setEndIndex(tempEndIndex < items.length ? tempEndIndex : items.length - 1);
  }, [currentPage, pageSize, items.length]);

  const totalNumberOfPages = useMemo(() => {
    return Math.ceil(items.length / pageSize);
  }, [items.length, pageSize]);

  const pageNumberList = useMemo(() => {
    const { startPageNumber, endPageNumber } = getStartAndEndPageNumbers(
      currentPage,
      totalNumberOfPages
    );

    const pageNumberItems = [];

    for (let number = startPageNumber; number <= endPageNumber; number++) {
      pageNumberItems.push(
        <PageNumber
          key={number}
          number={number}
          isCurrentPage={number === currentPage}
          setCurrentPage={setCurrentPage}
        />
      );
    }

    return pageNumberItems;
  }, [currentPage, totalNumberOfPages]);

  const pageItems = useMemo(() => {
    if (items.length === 0) {
      return (
        <div className={`flex-grow-1 flex-justify-center`}>No item found</div>
      );
    }

    return items.slice(startIndex, startIndex + pageSize);
  }, [items, startIndex, pageSize]);

  const onGotoStartClick = () => {
    setCurrentPage(1);
  };

  const onGotoEndClick = () => {
    setCurrentPage(totalNumberOfPages);
  };

  const onPrevClick = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
  };

  const onNextClick = () => {
    setCurrentPage(
      currentPage < totalNumberOfPages ? currentPage + 1 : totalNumberOfPages
    );
  };

  return (
    <div className={`${styles.container} flex-column`}>
      <div className={`${styles.content} flex-wrap flex-grow-1`}>
        {pageItems}
      </div>
      <div
        className={`${styles["actions-container"]} flex-column flex-align-center`}
      >
        <div className={`flex-align-center flex-justify-center`}>
          <FontAwesomeIcon
            className={`${styles["action-icon"]}`}
            icon={faAngleDoubleLeft}
            onClick={onGotoStartClick}
          />
          <FontAwesomeIcon
            className={`${styles["action-icon"]}`}
            icon={faAngleLeft}
            onClick={onPrevClick}
          />
          {pageNumberList}
          <FontAwesomeIcon
            className={`${styles["action-icon"]}`}
            icon={faAngleRight}
            onClick={onNextClick}
          />
          <FontAwesomeIcon
            className={`${styles["action-icon"]}`}
            icon={faAngleDoubleRight}
            onClick={onGotoEndClick}
          />
        </div>
        <span className={`${styles["sequence-info"]}`}>
          {startIndex + 1} - {endIndex + 1} of {items.length}
        </span>
      </div>
    </div>
  );
}

export default Pagination;
