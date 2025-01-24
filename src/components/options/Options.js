import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function DynamicSelect() {
  const [selectedSpecies, setSelectedSpecies] = React.useState("");
  const [selectedGender, setSelectedGender] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState("");
  const [species, setSpecies] = React.useState([]);
  const [genders, setGenders] = React.useState([]);
  const [statuses, setStatuses] = React.useState([]);
  const [handleSend, setHandleSend] = React.useState();

  React.useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        const results = data.results;
        setSpecies([...new Set(results.map((item) => item.species))]);
        setGenders([...new Set(results.map((item) => item.gender))]);
        setStatuses([...new Set(results.map((item) => item.status))]);
      })
      .catch((error) =>
        console.error("Greška prilikom dohvata podataka:", error)
      );
  }, []);

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
      <TextField id='outlined-basic' label='Search' variant='outlined' />
      <FormControl style={{ width: 150 }}>
        <InputLabel id='demo-simple-select-label'>Species</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          value={selectedSpecies}
          label='Speices'
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

      <Button
        style={{ borderRadius: "50%", height: 60 }}
        size='medium'
        variant='contained'
        onClick={handleSend}
        onKeyDown={(e) => (e.key === "Enter" ? handleSend : "")}
      >
        <ArrowForwardIcon />
      </Button>
    </Box>
  );
}
