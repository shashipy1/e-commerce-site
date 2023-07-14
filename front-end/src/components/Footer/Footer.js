import React from "react";
import playStore from "../images/playstore.png";
import appStore from "../images/Appstore.png";
import "./footer.css";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={playStore} alt="playstore" />
                <img src={appStore} alt="Appstore" />
            </div>

            <div className="midFooter">
                <h1>ECOMMERCE</h1>
                <p>High Quality is our first priority</p>

                <p>Copyrights 2022 &copy; shashikant-sde</p>
            </div>

            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="https://www.linkedin.com/in/shashi-kant-sde-08b4a0226/">Linkedin</a>
                <a href="https://instagram.com/sk.sde__227?igshid=ZDc4ODBmNjlmNQ==">Instagram</a>
                <a href="">Youtube</a>
                <a href="https://www.facebook.com/profile.php?id=100015181350174&mibextid=ZbWKwL">Facebook</a>
            </div>
        </footer>
    );
};

export default Footer;
