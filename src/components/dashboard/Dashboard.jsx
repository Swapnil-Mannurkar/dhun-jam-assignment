import React from "react";
import styles from "./Dashboard.module.css";
import DashboardForm from "./DashboardForm";
import BarChart from "./BarChart";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1>Social, Hebbal on Dhun Jam</h1>
      <DashboardForm />
      <BarChart />
    </div>
  );
};

export default Dashboard;
