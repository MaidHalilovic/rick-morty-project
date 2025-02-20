import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useDebounce } from "use-debounce";
import { CardContent, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { IoPlanetOutline } from "react-icons/io5";
import { PiAlien } from "react-icons/pi";
import { Male } from "@mui/icons-material";

export default function DynamicSelect() {
  const [selectedSpecies, setSelectedSpecies] = React.useState("");
  const [selectedGender, setSelectedGender] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState("");
  const [species, setSpecies] = React.useState([]);
  const [genders, setGenders] = React.useState([]);
  const [statuses, setStatuses] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [allCharacters, setAllCharacters] = React.useState([]);
  // const [filteredCharacters, setFilteredCharacters] = React.useState([]);
  const [debouncedSearch] = useDebounce(search, 500);
  const [page, setPage] = React.useState(1);
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        const results = data.results;
        setAllCharacters(results);
        setSpecies([...new Set(results.map((item) => item.species))]);
        setGenders([...new Set(results.map((item) => item.gender))]);
        setStatuses([...new Set(results.map((item) => item.status))]);
      })
      .catch((error) =>
        console.error("Greška prilikom dohvata podataka:", error)
      );
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (character) => {
    setSearch(character.name);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        minWidth: 120,
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <TextField
        label='Search Characters'
        variant='outlined'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {
        <ul className='list'>
          {search.length > 0 &&
            filteredCharacters.map((character) => (
              <li key={character.name} onClick={() => handleSelect(character)}>
                {character.name}
              </li>
            ))}
        </ul>
      }

      <FormControl style={{ width: 150 }}>
        <InputLabel id='demo-simple-select-label'>Species</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          value={selectedSpecies}
          label='Species'
          onChange={(event) => setSelectedSpecies(event.target.value)}
        >
          {species.map((specie, index) => (
            <MenuItem key={index} value={specie}>
              {specie}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl style={{ width: 150 }}>
        <InputLabel id='demo-simple-select-label'>Gender</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          value={selectedGender}
          label='Gender'
          onChange={(event) => setSelectedGender(event.target.value)}
        >
          {genders.map((gender, index) => (
            <MenuItem key={index} value={gender}>
              {gender}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl style={{ width: 150 }}>
        <InputLabel id='demo-simple-select-label'>Status</InputLabel>
        <Select
          labelId='demo-simple-select-label '
          value={selectedStatus}
          label='Status'
          onChange={(event) => setSelectedStatus(event.target.value)}
        >
          {statuses.map((status, index) => (
            <MenuItem key={index} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {(search ? filteredCharacters : characters).map((el) => (
        <div className='cards' key={el.id}>
          <Card sx={{ maxWidth: 200 }}>
            <CardMedia
              sx={{ height: 200, width: 200 }}
              image={el.image}
              title={el.name}
            />
            <CardContent>
              <Typography variant='h5' gutterBottom>
                {el.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {el.species}
                <br />
                {el.status}
                <br />
                <IoPlanetOutline /> {el.origin.name}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </Box>
  );
}
