import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className='main-Container'>
      <div className='footer'>
        <h1 onClick={() => navigate("Contact Us")}>Contact Us</h1>
        <div className='icons'>
          <a href='https://github.com/MaidHalilovic' target='_blank'>
            <FaGithub size={30} />
          </a>
          <a href='https://mail.google.com/mail/u/0/#inbox' target='_blank'>
            <BiLogoGmail size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
