import React, { useRef, useState } from "react";
import styles from "./LoginForm.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { loginThunk } from "../../store/loginSlice";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const username = useRef();
  const password = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const status = useSelector((state) => state.loginSlice.status);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      loginThunk({
        username: username.current.value,
        password: password.current.value,
      })
    );
  };

  const iconClickHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      className={status === "Failed" ? "" : styles.loginForm}
      onSubmit={submitHandler}
    >
      <div className={styles.inputFields}>
        <input type="text" placeholder="Username" ref={username} required />
        <div className={styles.passwordField}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            ref={password}
            required
            minLength="8"
          />
          <div className={styles.eyeIcon} onClick={iconClickHandler}>
            {!showPassword && <FaEye />}
            {showPassword && <FaEyeSlash />}
          </div>
        </div>
        {status === "Failed" && (
          <p style={{ color: "red" }}>Incorrect username or password! </p>
        )}
      </div>

      <div className={styles.loginActionFields}>
        <button type="submit">SIGN IN</button>
        <p>New Registration?</p>
      </div>
    </form>
  );
};

export default LoginForm;
