import React, { useState } from "react";
import { Input } from "@mui/material";

const Options = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className='options'>
        <select id='animals' name='animals'>
          <option value='' disabled selected>
            Species
          </option>
          {/* <option value='dog'>Pas</option>
          <option value='cat'>Mačka</option>
          <option value='bird'>Ptica</option> */}
        </select>

        <div style={{ margin: "30px auto", width: "max-content" }}>
          <Input
            style={{ width: "350px" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Options;
