import React from "react";
import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchNote } from "../utils/util";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

const SearchBar = ({ setSearchResult }) => {
  const [searchText, setSearchText] = useState("");
  const handleClear = () => {
    setSearchText("");
    setSearchResult([]);
  };
  return (
    <Box
      sx={{
        width: {
          xs: 200,
          sm: 400,
        },
      }}
    >
      <TextField
        fullWidth
        variant="standard"
        placeholder="Search note..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          return e.target.value.trim() !== ""
            ? setSearchResult(searchNote(e.target.value))
            : setSearchResult(undefined);
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "grey.600" }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClear}>
                <ClearIcon sx={{ color: "grey.600" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
