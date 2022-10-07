import React from "react";

import styles from "./LoadingOverlay.module.css";

function LoadingOverlay() {
  return (
    <div
      className={`${styles["loading-overlay"]} flex-align-center flex-justify-center`}
    >
      Loading...
    </div>
  );
}

export default LoadingOverlay;
