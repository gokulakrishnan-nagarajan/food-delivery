import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { throttle } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { setSearchText } from "../../store/slices/filters.slice";
import { store } from "../../store/store";

import styles from "./Search.module.css";

function Search() {
  const dispatch = useDispatch();

  const [searchTextLocal, setSearchTextLocal] = useState(
    store.getState().filters.searchText
  );

  const dispatchSearchText = useCallback(
    throttle((value) => {
      dispatch(setSearchText(value));
    }, 1000),
    [dispatch]
  );

  const onSearchTextChange = (event) => {
    const newSearchText = event.target.value;

    setSearchTextLocal(newSearchText);
    dispatchSearchText(newSearchText);
  };

  return (
    <div className={`${styles.container} flex-align-center`}>
      <FontAwesomeIcon
        className={`${styles["search-icon"]}`}
        icon={faMagnifyingGlass}
      />
      <input
        className={`${styles["search-input"]} ml-8`}
        placeholder="Enter food name"
        value={searchTextLocal}
        onChange={onSearchTextChange}
      />
    </div>
  );
}

export default Search;
