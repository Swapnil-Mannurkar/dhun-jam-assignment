import React, { useState } from "react";
import styles from "./DashboardForm.module.css";
import BarChart from "./BarChart";
import PriceButton from "./PriceButton";

const DashboardForm = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [songRequest, setSongRequest] = useState(null);
  const [saveBtnClicked, setSaveBtnClicked] = useState(false);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const onSaveHandler = (e) => {
    e.preventDefault();
    setSaveBtnClicked(true);
  };

  const songRequestHandler = (value) => {
    setSongRequest(value);
  };

  const saveButtonStyles = {
    border: saveBtnClicked ? "1px solid #f0c3f1" : " ",
    backgroundColor:
      songRequest === null ? "#6741d9" : songRequest ? "#6741d9" : "#C2C2C2",
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
              songRequestHandler(true);
            }}
          />
          <label>Yes</label>
          <input
            type="radio"
            name="charge"
            onClick={() => {
              songRequestHandler(false);
            }}
          />
          <label>No</label>
        </div>
      </div>
      <div className={styles.inputField}>
        <p>Custom song request amount-</p>
        <div className={styles.inputOptions}>
          <input
            type="text"
            placeholder="444"
            className={styles.textInputField}
          />
        </div>
      </div>
      <div className={styles.inputField}>
        <p>Regular song request amounts, from high to low-</p>
        <div className={styles.inputOptions}>
          <PriceButton
            price="199"
            id="1"
            selectedButton={selectedButton}
            handleButtonClick={handleButtonClick}
          />
          <PriceButton
            price="149"
            id="2"
            selectedButton={selectedButton}
            handleButtonClick={handleButtonClick}
          />
          <PriceButton
            price="99"
            id="3"
            selectedButton={selectedButton}
            handleButtonClick={handleButtonClick}
          />
          <PriceButton
            price="49"
            id="4"
            selectedButton={selectedButton}
            handleButtonClick={handleButtonClick}
          />
        </div>
      </div>
      <BarChart songRequest={songRequest} />
      <button
        className={styles.dashboardSaveButton}
        onClick={onSaveHandler}
        style={saveButtonStyles}
      >
        Save
      </button>
    </form>
  );
};

export default DashboardForm;
