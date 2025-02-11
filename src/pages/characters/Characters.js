import React, { useEffect, useState } from "react";
import "./characters.css";
import axios from "axios";

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

  return <div></div>;
}

export default Characters;
