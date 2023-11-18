import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import DashboardForm from "./DashboardForm";
import BarChart from "./BarChart";

const Dashboard = () => {
  const [saveBtnClicked, setSaveBtnClicked] = useState(false);

  const onSaveHandler = () => {
    setSaveBtnClicked(true);
  };

  const saveButtonStyles = {
    border: saveBtnClicked ? "1px solid #f0c3f1" : " ",
  };

  return (
    <div className={styles.dashboard}>
      <h1>Social, Hebbal on Dhun Jam</h1>
      <DashboardForm />
      <BarChart />
      <button
        className={styles.dashboardSaveButton}
        onClick={onSaveHandler}
        style={saveButtonStyles}
      >
        Save
      </button>
    </div>
  );
};

export default Dashboard;
