import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import Location from "../Location/Location";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="footer-image" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            nostrum iure suscipit maiores non harum incidunt unde magnam
            molestias ipsum qui vel aut natus aspernatur ipsa dignissimos,
            numquam assumenda deserunt.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>

            <li>
              <h2>Get in touch</h2>
            </li>
            <li>+91-9084900522</li>
            <li>contact@sudamapohe.com</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <Location />
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright© 2025 @ sudamapohe.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
