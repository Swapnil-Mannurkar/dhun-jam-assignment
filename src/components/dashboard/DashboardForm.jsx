import React, { useEffect, useState } from "react";
import styles from "./DashboardForm.module.css";
import BarChart from "./BarChart";
import PriceButton from "./PriceButton";
import { useDispatch } from "react-redux";
import { updateAdminPriceThunk } from "../../store/updateAdminPrice";

const DashboardForm = (props) => {
  const dispatch = useDispatch();
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [chargeForSong, setChargeForSong] = useState(null);
  const [enableSaveBtn, setEnableSaveBtn] = useState(false);
  const [saveBtnClicked, setSaveBtnClicked] = useState(false);
  const [customvalue, setCustomValue] = useState(props.amount.category_6);
  let { category_7, category_8, category_9, category_10 } = props.amount;

  const handleButtonClick = (price) => {
    setSelectedPrice(price);
    if (selectedPrice === price) {
      setSelectedPrice(null);
    }
  };

  const onSaveHandler = (e) => {
    e.preventDefault();
    dispatch(updateAdminPriceThunk(customvalue));
    setSaveBtnClicked(true);
  };

  const customValueInputHandler = (e) => {
    setCustomValue(Number(e.target.value));
  };

  useEffect(() => {
    setChargeForSong(props.chargeCustomers);
    setSaveBtnClicked(false);
  }, [props.chargeCustomers]);

  useEffect(() => {
    if (
      customvalue > 99 &&
      category_7 > 79 &&
      category_8 > 59 &&
      category_9 > 39 &&
      category_10 > 19
    ) {
      setEnableSaveBtn(true);
    } else {
      setEnableSaveBtn(false);
    }
  }, [customvalue, category_7, category_8, category_9, category_10]);

  const saveButtonStyles = {
    border: saveBtnClicked ? "1px solid #f0c3f1" : " ",
    backgroundColor: enableSaveBtn && chargeForSong ? "#6741d9" : "#C2C2C2",
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
            type="number"
            placeholder={customvalue}
            className={styles.textInputField}
            disabled={chargeForSong ? false : true}
            style={{
              borderColor: chargeForSong ? "#FFFFFF" : "#C2C2C2",
            }}
            onChange={customValueInputHandler}
          />
        </div>
      </div>
      <div className={styles.inputField}>
        <p style={{ color: chargeForSong ? "white" : "#C2C2C2" }}>
          Regular song request amounts, from high to low-
        </p>
        <div className={styles.inputOptions}>
          <PriceButton
            price={category_7}
            selectedPrice={selectedPrice}
            handleButtonClick={handleButtonClick}
            chargeForSong={chargeForSong}
          />
          <PriceButton
            price={category_8}
            selectedPrice={selectedPrice}
            handleButtonClick={handleButtonClick}
            chargeForSong={chargeForSong}
          />
          <PriceButton
            price={category_9}
            selectedPrice={selectedPrice}
            handleButtonClick={handleButtonClick}
            chargeForSong={chargeForSong}
          />
          <PriceButton
            price={category_10}
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
        disabled={enableSaveBtn && chargeForSong ? false : true}
      >
        Save
      </button>
    </form>
  );
};

export default DashboardForm;
