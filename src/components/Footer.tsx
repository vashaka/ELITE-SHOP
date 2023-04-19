import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 All rights served</p>
      <p className="icons">
        <AiFillInstagram onClick={() => window.open("https://instagram.com")} />
        <AiFillFacebook onClick={() => window.open("https://facebook.com")} />
      </p>
    </div>
  );
};

export default Footer;
