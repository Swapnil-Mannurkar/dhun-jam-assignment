import React, { useEffect, useState } from "react";
import styles from "./DashboardForm.module.css";
import BarChart from "./BarChart";
import PriceButton from "./PriceButton";

const DashboardForm = (props) => {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [chargeForSong, setChargeForSong] = useState(null);
  const [saveBtnClicked, setSaveBtnClicked] = useState(false);

  const handleButtonClick = (price) => {
    setSelectedPrice(price);
    if (selectedPrice === price) {
      setSelectedPrice(null);
    }
  };

  useEffect(() => {
    setChargeForSong(props.chargeCustomers);
  });

  const onSaveHandler = (e) => {
    e.preventDefault();
    if (chargeForSong) {
      if (selectedPrice === null) {
        setSaveBtnClicked(false);
        alert("Select or enter a custom price");
        return;
      }
    }
    setSaveBtnClicked(true);
  };

  useEffect(() => {
    if (chargeForSong === false) {
      setSelectedPrice(null);
    }
  });

  const saveButtonStyles = {
    border: saveBtnClicked ? "1px solid #f0c3f1" : " ",
    backgroundColor: chargeForSong ? "#6741d9" : "#C2C2C2",
  };

  return (
    <form className={styles.dashboardForm}>
      <div className={styles.inputField}>
        <p>Do you want to charge your customers for requesting songs?</p>
        <div className={styles.inputOptions}>
          <input type="radio" name="charge" checked={chargeForSong === true} />
          <label>Yes</label>
          <input type="radio" name="charge" checked={chargeForSong === false} />
          <label>No</label>
        </div>
      </div>
      <div className={styles.inputField}>
        <p style={{ color: chargeForSong ? "white" : "#C2C2C2" }}>
          Custom song request amount-
        </p>
        <div className={styles.inputOptions}>
          <input
            type="text"
            value={props.amount.category_6}
            className={styles.textInputField}
            disabled={chargeForSong ? false : true}
            style={{
              borderColor: chargeForSong ? "#FFFFFF" : "#C2C2C2",
            }}
          />
        </div>
      </div>
      <div className={styles.inputField}>
        <p style={{ color: chargeForSong ? "white" : "#C2C2C2" }}>
          Regular song request amounts, from high to low-
        </p>
        <div className={styles.inputOptions}>
          <PriceButton
            price={props.amount.category_7}
            selectedPrice={selectedPrice}
            handleButtonClick={handleButtonClick}
            chargeForSong={chargeForSong}
          />
          <PriceButton
            price={props.amount.category_8}
            selectedPrice={selectedPrice}
            handleButtonClick={handleButtonClick}
            chargeForSong={chargeForSong}
          />
          <PriceButton
            price={props.amount.category_9}
            selectedPrice={selectedPrice}
            handleButtonClick={handleButtonClick}
            chargeForSong={chargeForSong}
          />
          <PriceButton
            price={props.amount.category_10}
            selectedPrice={selectedPrice}
            handleButtonClick={handleButtonClick}
            chargeForSong={chargeForSong}
          />
        </div>
      </div>
      {chargeForSong && <BarChart amount={props.amount} />}
      <button
        className={styles.dashboardSaveButton}
        onClick={onSaveHandler}
        style={saveButtonStyles}
        disabled={chargeForSong ? false : true}
      >
        Save
      </button>
    </form>
  );
};

export default DashboardForm;
