import React from "react";
import { Link } from "react-router-dom";
import svglogo from "../../img/logo.svg";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer__content">
              <a href="/" className="footer__logo">
                <img src={svglogo} alt="" />
              </a>

              <span className="footer__copyright">
                © 2021 FetNlix
                <br /> Create by{" "}
                <a href="/" target="_blank">
                  Mohamad Hossein Nazari
                </a>
              </span>

              <nav className="footer__nav">
                <Link to="/about">About Us</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/privacy">Privacy Policy</Link>
              </nav>

              <button className="footer__back" type="button">
                <i className="icon ion-ios-arrow-round-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
