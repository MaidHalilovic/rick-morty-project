import React, { useEffect, useState } from "react";
import "./characters.css";
import axios from "axios";
import img from "../../images/PngItem_438051 1.png";

function Characters() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const { data } = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      console.log(data.results);

      setCharacters(characters);
    } catch (error) {
      console.error("Error while fething characters", error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className='main-container'>
      <div className='img'>
        <img src={img} alt='img' />
      </div>
      <div className='card'>
        {characters.map((el, index) => (
          <div className='cards' key={index}>
            <h1>img: {el.name}</h1>
            <img src={el.image} alt='img' />
            <h1>{el.species}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
