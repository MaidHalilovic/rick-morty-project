import React, { useEffect, useState } from "react";
import "./episodes.css";
import axios from "axios";
import img from "../../images/rick-and-morty2 1.png";
import { Pagination } from "@mui/material";

function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCards, setTotalCards] = useState(10);
  const [episodesPerPage, setEpisodesPerPage] = useState(4);

  const fetchEpisodes = async () => {
    try {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/episode?page=${page}`
      );
      console.log(data.results);

      setEpisodes(data.results);
    } catch (error) {
      console.error("Error while fething episodes", error);
    }
  };

  useEffect(() => {
    fetchEpisodes();
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    setPage(value);
  };

  return (
    <div className='main-container'>
      <div className='img'>
        <img src={img} alt='rick/morty' />
      </div>
      <div className='card'>
        {episodes.map((el, index) => (
          <div className='cards' key={index}>
            <h1>{el.name}</h1>
            <h2>{el.air_date}</h2>
            <h2 style={{ color: "gray" }}>{el.episode}</h2>
          </div>
        ))}
      </div>
      <Pagination
        count={Math.ceil(totalCards / episodesPerPage)}
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

export default Episodes;
