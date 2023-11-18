import React, { useState } from "react";
import styles from "./DashboardForm.module.css";

const DashboardForm = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <form className={styles.dashboardForm}>
      <div className={styles.inputField}>
        <p>Do you want to charge your customers for requesting songs?</p>
        <div className={styles.inputOptions}>
          <input type="radio" name="charge" />
          <label>Yes</label>
          <input type="radio" name="charge" />
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
          <button
            className={styles.inputButton}
            onClick={(e) => {
              e.preventDefault();
              handleButtonClick(1);
            }}
            style={{
              backgroundColor: selectedButton === 1 ? "#F0C3F1" : "#0C0C0C",
              color: selectedButton === 1 ? "black" : "white",
            }}
          >
            199
          </button>
          <button
            className={styles.inputButton}
            onClick={(e) => {
              e.preventDefault();
              handleButtonClick(2);
            }}
            style={{
              backgroundColor: selectedButton === 2 ? "#F0C3F1" : "#0C0C0C",
              color: selectedButton === 2 ? "black" : "white",
            }}
          >
            149
          </button>
          <button
            className={styles.inputButton}
            onClick={(e) => {
              e.preventDefault();
              handleButtonClick(3);
            }}
            style={{
              backgroundColor: selectedButton === 3 ? "#F0C3F1" : "#0C0C0C",
              color: selectedButton === 3 ? "black" : "white",
            }}
          >
            99
          </button>
          <button
            className={styles.inputButton}
            onClick={(e) => {
              e.preventDefault();
              handleButtonClick(4);
            }}
            style={{
              backgroundColor: selectedButton === 4 ? "#F0C3F1" : "#0C0C0C",
              color: selectedButton === 4 ? "black" : "white",
            }}
          >
            49
          </button>
        </div>
      </div>
    </form>
  );
};

export default DashboardForm;
