import React from "react";
import Ecommers from "../images/Ecommers.webp";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={Ecommers} alt="" width={100} />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Shop</li>
        <li>Men</li>
        <li>Woman</li>
        <li>kids</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <i class="fa fa-facebook-official" aria-hidden="true"></i>
        </div>
        <div className="footer-icon-container">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </div>
        <div className="footer-icon-container">
          <i class="fa fa-whatsapp" aria-hidden="true"></i>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>copyright @ 2025 - All Right Resevered</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
