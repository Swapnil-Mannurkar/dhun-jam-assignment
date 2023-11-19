import React from "react";
import styles from "./PriceButton.module.css";

const PriceButton = (props) => {
  return (
    <div
      className={styles.inputButton}
      style={{
        color: props.chargeForSong ? "#FFFFFF" : "#C2C2C2",
        borderColor: props.chargeForSong ? "#FFFFFF" : "#C2C2C2",
      }}
    >
      {props.price}
    </div>
  );
};

export default PriceButton;
