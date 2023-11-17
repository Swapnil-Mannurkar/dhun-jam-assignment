import React from "react";
import "./App.css";
import Login from "./components/login/Login.jsx";
import { useSelector } from "react-redux";
import Dashboard from "./components/dashboard/Dashboard.jsx";

function App() {
  const status = useSelector((state) => state.loginSlice.status);

  return <>{status === "Success" ? <Dashboard /> : <Login />}</>;
}

export default App;
