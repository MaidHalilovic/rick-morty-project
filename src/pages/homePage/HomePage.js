import React, { useState, useEffect } from "react";
import "./homePage.css";
import axios from "axios";
import img1 from "../../images/PngItem_438051 1.png";
import Options from "../../components/options/Options";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Repeat } from "@mui/icons-material";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        console.log(data.data);

        setCharacters((prevCharacters) => [
          ...prevCharacters,
          ...data.data.results,
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
    <div className='main-Container'>
      <div className='img'>
        <img src={img1} alt='img' />
      </div>
      <Options />

      <div className='character-container'>
        {characters.map((el, index) => (
          <div className='cards' key={index}>
            <Card
              sx={{
                maxWidth: 200,
              }}
            >
              <CardMedia
                sx={{
                  height: 200,
                  width: 200,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                image={el.image}
                title={el.name}
              />
              <CardContent>
                <Typography variant='h5' gutterBottom>
                  {el.name}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    gap: 20,
                  }}
                >
                  {el.species}
                  {el.status}
                  {el.origin.name}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
        <button onClick={handleLoadMore}>Load More</button>
      </div>
    </div>
  );
};

export default App;
