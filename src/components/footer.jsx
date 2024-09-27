import React from "react";
import "./footer.css";
import IconFooter from "../components/img/iconFooter.png";
import IconFooter2 from "../components/img/iconFooter2.png";
import Instagram from "../components/img/instagram.png";
import Facebook from "../components/img/facebook.png";
import Twitter from "../components/img/twitter.png";
export default function Footer() {
  return (
    <div class="footer">
      <div>
        <div>
        <div class="footerH">
          <p>Новаківський</p>
          <p class='footerSpace'>Space</p>
        </div>
        <p class="footerText">
          Non Copyrighted © 2022 Upload by rich technologies
        </p>
        </div>
        <div>
        <img src={IconFooter} alt="IconFooter" />
        <img src={IconFooter2} alt="IconFooter2"/>
        <img src={Instagram} alt="Instagram"/>
        <img src={Facebook} alt="Facebook"/>
        <img src={Twitter} alt="Twitter"/>
        </div>
      </div>
    </div>
  );
}
