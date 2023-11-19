import React from "react";
import styles from "./PriceButton.module.css";

const PriceButton = (props) => {
  const priceClickHandler = (e) => {
    e.preventDefault();
    props.handleButtonClick(props.price);
  };

  return (
    <button
      className={styles.inputButton}
      onClick={priceClickHandler}
      style={{
        backgroundColor:
          props.selectedPrice === props.price ? "#F0C3F1" : "#0C0C0C",
        color:
          props.chargeForSong === null
            ? "#C2C2C2"
            : props.chargeForSong === false
            ? "#C2C2C2"
            : props.selectedPrice === props.price
            ? "#000000"
            : "#FFFFFF",
        borderColor:
          props.chargeForSong === null
            ? "#C2C2C2"
            : props.chargeForSong === false
            ? "#C2C2C2"
            : props.selectedPrice === props.price
            ? "#000000"
            : "#FFFFFF",
      }}
      disabled={props.chargeForSong ? false : true}
    >
      {props.price}
    </button>
  );
};

export default PriceButton;
