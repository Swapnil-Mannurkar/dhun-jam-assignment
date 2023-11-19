import React from "react";
import styles from "./PriceButton.module.css";

const PriceButton = (props) => {
  const changeHandler = (e) => {
    props.customValueInputHandler(e.target.value, props.id);
  };

  return (
    <input
      type="number"
      placeholder={props.price}
      className={styles.inputButton}
      disabled={props.chargeForSong ? false : true}
      style={{
        borderColor: props.chargeForSong ? "#FFFFFF" : "#C2C2C2",
      }}
      onChange={changeHandler}
    />
  );
};

export default PriceButton;
