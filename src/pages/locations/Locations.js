import React, { useEffect, useState } from "react";
import "./locations.css";
import axios from "axios";
import img from "../../images/rick-and-morty 1.png";
import { Pagination } from "@mui/material";

function Locations() {
  const [location, setLocation] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCards, setTotalCards] = useState(126);
  const [cardsPerPage, setCardsPerPage] = useState(20);

  const fetchLocations = async () => {
    try {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/location?page=${page}`
      );
      console.log(data.results);

      setLocation(data.results);
    } catch (error) {
      console.error("Error while fething locations", error);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    setPage(value);
  };

  return (
    <div className='main-Container'>
      <div className='img'>
        <img src={img} alt='img' />
      </div>
      <div className='card'>
        {location.map((el, index) => (
          <div className='cards' key={index}>
            <h1>{el.name}</h1>
            <h3 style={{ color: "gray" }}>{el.type}</h3>
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

export default Locations;
