import React from "react";
import styles from "./DashboardForm.module.css";

const DashboardForm = () => {
  return (
    <form className={styles.dashboardForm}>
      <div className={styles.inputField}>
        <p>Do you want to charge your customers for requesting songs?</p>
        <div className={styles.inputOptions}>
          <input type="radio" value="Yes" name="charge" />
          <label>Yes</label>
          <input type="radio" name="charge" />
          <label>No</label>
        </div>
      </div>
      <div className={styles.inputField}>
        <p>Custom song request amount-</p>
        <div className={styles.inputOptions}>
          <input type="text" />
        </div>
      </div>
    </form>
  );
};

export default DashboardForm;
