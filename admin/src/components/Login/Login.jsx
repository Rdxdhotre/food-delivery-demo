import axios from "axios";
import PropTypes from "prop-types"; // Import PropTypes for validation
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StoreContext } from "../../context/StoreContext";
import "./Login.css";

const Login = ({ url }) => {
  const navigate = useNavigate();
  const { admin, setAdmin, token, setToken } = useContext(StoreContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(url + "/api/user/login", data);
      if (response.data.success) {
        if (response.data.role === "admin") {
          setToken(response.data.token);
          setAdmin(true);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("admin", true);
          toast.success("Login Successfully");
          navigate("/add"); // Directly navigate after successful login
          setData({ email: "", password: "" }); // Reset form after login
        } else {
          toast.error("You are not an admin");
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Login error:", error);
    }
  };

  // If already logged in, redirect to /add
  useEffect(() => {
    if (admin && token) {
      navigate("/add");
    }
  }, [admin, token, navigate]); // Add dependencies here to re-trigger when either token or admin changes

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>Login</h2>
        </div>
        <div className="login-popup-inputs">
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// Add prop validation for url
Login.propTypes = {
  url: PropTypes.string.isRequired, // Ensure url is a required string
};

export default Login;
