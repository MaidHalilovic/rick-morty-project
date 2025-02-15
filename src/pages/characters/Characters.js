import React, { useEffect, useState } from "react";
import "./characters.css";
import axios from "axios";
import img from "../../images/PngItem_438051 1.png";
import { IoPlanetOutline } from "react-icons/io5";
import { PiAlien } from "react-icons/pi";
import { SpaceBar } from "@mui/icons-material";
import { Pagination } from "@mui/material";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCards, setTotalCards] = useState(826);
  const [cardsPerPage, setCardsPerPage] = useState(20);

  const fetchCharacters = async () => {
    try {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      console.log(data.results);

      setCharacters(data.results);
    } catch (error) {
      console.error("Error while fething characters", error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    setPage(value);
  };

  return (
    <div className='main-container'>
      <div className='img'>
        <img src={img} alt='img' />
      </div>
      <div className='card'>
        {characters.map((el, index) => (
          <div className='cards' key={index}>
            <img src={el.image} alt='img' />
            <h1>{el.name}</h1>

            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                margin: "4px 0",
              }}
            >
              {" "}
              <PiAlien style={{ marginRight: 8 }} />
              {el.species}
            </p>
            <p>{el.status}</p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                margin: "4px 0",
              }}
            >
              <IoPlanetOutline style={{ marginRight: 8 }} />

              {el.origin.name}
            </p>
          </div>
        ))}
      </div>
      <Pagination
        count={Math.ceil(totalCards / cardsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        style={{
          marginBottom: 100,
          position: "relative",
          top: 30,
          display: "flex",
          justifyContent: "center",
        }}
      />
    </div>
  );
}

export default Characters;
