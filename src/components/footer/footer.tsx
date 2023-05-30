import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Bansal</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/ankit-bansal-65373282/" className="footer__social-icon" target={"__blank"}>
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/bansalankit25/" className="footer__social-icon" target={"__blank"}>
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/ankitbansal25/" className="footer__social-icon" target={"__blank"}>
                        <i className="bx bxl-instagram"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Ankit Bansal. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer;
