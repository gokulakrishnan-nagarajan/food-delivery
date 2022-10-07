import React from "react";

import styles from "./Pagination.module.css";

function PageNumber(props) {
  const { number, isCurrentPage, setCurrentPage } = props;

  const onPageNumberClick = () => {
    setCurrentPage(number);
  };

  return (
    <div
      className={`${styles["page-number"]} ${
        isCurrentPage ? styles["active"] : ""
      } flex-align-center flex-justify-center`}
      onClick={onPageNumberClick}
    >
      {number}
    </div>
  );
}

export default PageNumber;
