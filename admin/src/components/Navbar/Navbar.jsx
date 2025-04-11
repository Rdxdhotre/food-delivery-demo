import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, admin, setAdmin, setToken } = useContext(StoreContext);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    setToken("");
    setAdmin(false);
    toast.success("Logout Successfully");
    navigate("/");
  };
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      {token && admin ? (
        <p className="login-conditon" onClick={logout}>
          Admin Logout
        </p>
      ) : (
        <p className="login-conditon" onClick={() => navigate("/")}>
          Admin Login
        </p>
      )}
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
