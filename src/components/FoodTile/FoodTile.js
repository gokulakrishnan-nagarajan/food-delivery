import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPercentage,
  faGift,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./FoodTile.module.css";
import FoodTileDetails from "../FoodTileDetails/FoodTileDetails";

function FoodTile(props) {
  const { details } = props;

  const [promotionIcon, setPromotionIcon] = useState(null);
  const [promotionClass, setPromotionClass] = useState("");

  useEffect(() => {
    switch (details.promotion) {
      case "1+1":
        setPromotionIcon("1+1");
        setPromotionClass(styles["one-plus-one"]);
        break;
      case "discount":
        setPromotionIcon(<FontAwesomeIcon icon={faPercentage} />);
        setPromotionClass(styles[details.promotion]);
        break;
      case "gift":
        setPromotionIcon(<FontAwesomeIcon icon={faGift} />);
        setPromotionClass(styles[details.promotion]);
        break;
      default:
    }
  }, [details.promotion]);

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.tile} flex-column`}>
        {promotionIcon && (
          <div
            className={`${styles.promotion} ${promotionClass} flex-align-center flex-justify-center`}
          >
            {promotionIcon}
          </div>
        )}
        <img
          className={`${styles["food-img"]}`}
          src={details.imageUrl}
          alt={details.name}
        />
        <div
          className={`${styles["details-container"]} flex-grow-1 flex-column flex-justify-space-between`}
        >
          <div className={`${styles["food-item-name"]}`}>{details.name}</div>
          <div className={`${styles.details} flex-align-center`}>
            <FoodTileDetails>
              <FontAwesomeIcon
                className={`${styles["rating-icon"]}`}
                icon={faStar}
              />
              <span>{details.rating.toFixed(1)}</span>
            </FoodTileDetails>
            <FoodTileDetails>
              <span>
                {details.minCookTime} - {details.maxCookTime} mins
              </span>
            </FoodTileDetails>
            {details.isNew && (
              <FoodTileDetails>
                <span className={`${styles.new}`}>New</span>
              </FoodTileDetails>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodTile;
