import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import DashboardForm from "./DashboardForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminDetailsThunk } from "../../store/fetchAdminDetails";

const Dashboard = () => {
  const id = useSelector((state) => state.loginSlice.data.id);
  const { name, location, amount, charge_customers } = useSelector(
    (state) => state.fetchAdminDetails.data
  );
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(fetchAdminDetailsThunk(4));
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className={styles.dashboard}>
      <h1>
        {name}, {location} on Dhun Jam
      </h1>
      <DashboardForm chargeCustomers={charge_customers} amount={amount} />
    </div>
  );
};

export default Dashboard;
