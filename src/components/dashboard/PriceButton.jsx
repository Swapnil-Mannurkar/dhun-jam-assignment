import React from "react";
import styles from "./PriceButton.module.css";

const PriceButton = (props) => {
  const priceClickHandler = (e) => {
    e.preventDefault();
    props.handleButtonClick(props.id);
  };

  return (
    <button
      className={styles.inputButton}
      onClick={priceClickHandler}
      style={{
        backgroundColor:
          props.selectedButton === props.id ? "#F0C3F1" : "#0C0C0C",
        color: props.selectedButton === props.id ? "#000000" : "#FFFFFF",
      }}
    >
      {props.price}
    </button>
  );
};

export default PriceButton;
