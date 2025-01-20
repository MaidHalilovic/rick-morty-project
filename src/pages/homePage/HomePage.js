import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          ...response.data.results,
        ]);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
    setLoading(true);
  };

  return (
    <div>
      <div className='character-container'>
        {characters.map((el, index) => (
          <div className='cards' key={index}>
            <h1>{el.name}</h1>
          </div>
        ))}
        <button onClick={handleLoadMore}>Load More</button>
      </div>
    </div>
  );
};

export default App;
