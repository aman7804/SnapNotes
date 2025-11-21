import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Container } from "@mui/material";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import SearchBar from "./SearchBar";

function Header({ setSearchResult }) {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "skyblue",
        color: "#fff",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Left Logo */}
          <NoteAltIcon sx={{ mr: 1, fontSize: 28 }} />

          <Typography
            variant="h6"
            noWrap
            sx={{
              fontWeight: 700,
              letterSpacing: ".05em",
              color: "#fff",
              userSelect: "none",
            }}
          >
            SnapNotes
          </Typography>

          {/* Center Search */}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <SearchBar setSearchResult={setSearchResult} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
