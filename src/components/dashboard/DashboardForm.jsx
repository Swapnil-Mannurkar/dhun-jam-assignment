import React, { useEffect, useState } from "react";
import styles from "./DashboardForm.module.css";
import BarChart from "./BarChart";
import PriceButton from "./PriceButton";

const DashboardForm = () => {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [chargeForSong, setChargeForSong] = useState(null);
  const [saveBtnClicked, setSaveBtnClicked] = useState(false);

  const handleButtonClick = (price) => {
    setSelectedPrice(price);
    if (selectedPrice === price) {
      setSelectedPrice(null);
    }
  };

  const chargeForSongHandler = (value) => {
    setChargeForSong(value);
  };

  const onSaveHandler = (e) => {
    e.preventDefault();
    if (chargeForSong) {
      if (selectedPrice === null) {
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
          <input
            type="radio"
            name="charge"
            onClick={() => {
              chargeForSongHandler(true);
            }}
          />
          <label>Yes</label>
          <input
            type="radio"
            name="charge"
            onClick={() => {
              chargeForSongHandler(false);
            }}
          />
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
            placeholder="444"
            className={styles.textInputField}
            disabled={chargeForSong ? false : true}
            style={{
              borderColor:
                chargeForSong === null
                  ? "#C2C2C2"
                  : chargeForSong === false
                  ? "#C2C2C2"
                  : "#fff",
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
            price="199"
            selectedPrice={selectedPrice}
            handleButtonClick={handleButtonClick}
            chargeForSong={chargeForSong}
          />
          <PriceButton
            price="149"
            selectedPrice={selectedPrice}
            handleButtonClick={handleButtonClick}
            chargeForSong={chargeForSong}
          />
          <PriceButton
            price="99"
            selectedPrice={selectedPrice}
            handleButtonClick={handleButtonClick}
            chargeForSong={chargeForSong}
          />
          <PriceButton
            price="49"
            selectedPrice={selectedPrice}
            handleButtonClick={handleButtonClick}
            chargeForSong={chargeForSong}
          />
        </div>
      </div>
      <BarChart chargeForSong={chargeForSong} />
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
