import React, { useEffect, useState } from "react";
import NotesArea from "../components/NotesArea";
import { Box } from "@mui/material";
import Header from "../components/Header";

const Layout = () => {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <>
      <Box sx={{ width: "100vw" }}>
        <Header setSearchResult={setSearchResult} />
        {/* <Box sx={{ width: "50vw" }}> */}
        <NotesArea searchResult={searchResult} />
        {/* </Box> */}
      </Box>
    </>
  );
};

export default Layout;
