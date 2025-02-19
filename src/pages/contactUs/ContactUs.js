import React from "react";
import "./contactUs.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div className='main-container'>
      <div className='contactUs'>
        <h1>Contact Us</h1>
        <p>Any question or remarks? Just write us a message!</p>
      </div>
      <div className='info'>
        <h1>Contact Information</h1>
        <p style={{ color: "lightgray", position: "relative", bottom: 20 }}>
          Say something to start a live chat!
        </p>
        <div className='info-2'>
          <FaPhoneVolume /> <p>0637822540</p>
          <CgMail /> <p>maidhaliloviccc@gmail.com</p>
          <IoLocationSharp /> <p>Novi Pazar</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
