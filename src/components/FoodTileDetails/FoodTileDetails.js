import React from "react";

import styles from "./FoodTileDetails.module.css";

function FoodTileDetails(props) {
  return (
    <div className={`${styles["detail-item"]} flex-align-center`}>
      {props.children}
    </div>
  );
}

export default FoodTileDetails;
