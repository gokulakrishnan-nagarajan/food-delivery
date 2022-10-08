import React, { useMemo } from "react";
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

function PaginationAction(props) {
  const { pageSize, items, currentPage, setCurrentPage } = props;

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
  }, [currentPage, totalNumberOfPages, setCurrentPage]);

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
  );
}

export default PaginationAction;
