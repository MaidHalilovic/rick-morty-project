import React from "react";
import "./header.css";
import img from "../../images/rick-morty(project).png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className='concert-one-regular'>
      <div className='logo'>
        <img
          src={img}
          alt='img'
          style={{ width: 100, height: 50 }}
          onClick={() => navigate("/")}
        />
      </div>
      <div className='pages'>
        <h1 onClick={() => navigate("/Characters")}>Characters</h1>
        <h1 onClick={() => navigate("/Episodes")}>Episodes</h1>
        <h1 onClick={() => navigate("/Locations")}>Locations</h1>
      </div>
    </div>
  );
}

export default Header;
