import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import DashboardForm from "./DashboardForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminDetailsThunk } from "../../store/fetchAdminDetails";

const Dashboard = () => {
  const [displayDashboard, setDisplayDashboard] = useState(false);
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
    setTimeout(() => {
      setDisplayDashboard(true);
    }, 1000);
  }, [id, amount]);

  return (
    <div className={styles.dashboard}>
      {!displayDashboard && <h1>Loading...</h1>}
      {displayDashboard && (
        <>
          <h1>
            {name}, {location} on Dhun Jam
          </h1>
          <DashboardForm chargeCustomers={charge_customers} amount={amount} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
