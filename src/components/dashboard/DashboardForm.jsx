import React, { useEffect, useState } from "react";
import styles from "./DashboardForm.module.css";
import BarChart from "./BarChart";
import PriceButton from "./PriceButton";
import { useDispatch, useSelector } from "react-redux";
import { updateAdminPriceThunk } from "../../store/updateAdminPrice";

const DashboardForm = (props) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.loginSlice.data.id);
  const [chargeForSong, setChargeForSong] = useState(null);
  const [enableSaveBtn, setEnableSaveBtn] = useState(false);
  const [saveBtnClicked, setSaveBtnClicked] = useState(false);
  const [CustomValue6, setCustomValue6] = useState(props.amount.category_6);
  const [CustomValue7, setCustomValue7] = useState(props.amount.category_7);
  const [CustomValue8, setCustomValue8] = useState(props.amount.category_8);
  const [CustomValue9, setCustomValue9] = useState(props.amount.category_9);
  const [CustomValue10, setCustomValue10] = useState(props.amount.category_10);

  const onSaveHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateAdminPriceThunk({
        CustomValue6,
        CustomValue7,
        CustomValue8,
        CustomValue9,
        CustomValue10,
        id,
      })
    );
    setSaveBtnClicked(true);
  };

  const customValueInputHandler = (value, id) => {
    switch (id) {
      case 6:
        setCustomValue6(value);
        return;
      case 7:
        setCustomValue7(value);
        return;
      case 8:
        setCustomValue8(value);
        return;
      case 9:
        setCustomValue9(value);
        return;
      case 10:
        setCustomValue10(value);
        return;
    }
  };

  useEffect(() => {
    setChargeForSong(props.chargeCustomers);
    setSaveBtnClicked(false);
  }, [props.chargeCustomers]);

  useEffect(() => {
    if (
      CustomValue6 >= 99 &&
      CustomValue7 >= 79 &&
      CustomValue8 >= 59 &&
      CustomValue9 >= 39 &&
      CustomValue10 >= 19
    ) {
      setEnableSaveBtn(true);
    } else {
      setEnableSaveBtn(false);
    }
  }, [CustomValue6, CustomValue7, CustomValue8, CustomValue9, CustomValue10]);

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
          <PriceButton
            price={CustomValue6}
            chargeForSong={chargeForSong}
            id={6}
            customValueInputHandler={customValueInputHandler}
          />
        </div>
      </div>
      <div className={styles.inputField}>
        <p style={{ color: chargeForSong ? "white" : "#C2C2C2" }}>
          Regular song request amounts, from high to low-
        </p>
        <div className={styles.inputOptions}>
          <PriceButton
            price={CustomValue7}
            chargeForSong={chargeForSong}
            id={7}
            customValueInputHandler={customValueInputHandler}
          />
          <PriceButton
            price={CustomValue8}
            chargeForSong={chargeForSong}
            id={8}
            customValueInputHandler={customValueInputHandler}
          />
          <PriceButton
            price={CustomValue9}
            chargeForSong={chargeForSong}
            id={9}
            customValueInputHandler={customValueInputHandler}
          />
          <PriceButton
            price={CustomValue10}
            chargeForSong={chargeForSong}
            id={10}
            customValueInputHandler={customValueInputHandler}
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
