import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import { Box, Grid, Modal, Stack, TextField, Typography } from "@mui/material";
import NoteModal from "../components/NoteModal";
import DeleteModal from "../components/DeleteModal";
import { getAllNotes, getNote } from "../utils/util";
const NotesArea = ({ searchResult = [] }) => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({
    id: null,
    title: "",
    text: "",
    pinned: false,
  });
  const [openConfirmDelete, setOpenConfirmDelete] = React.useState(false);
  const [openNoteModal, setOpenNoteModal] = React.useState(false);

  useEffect(() => {
    refreshNotes();
  }, []);

  const refreshNotes = () => {
    setNotes(getAllNotes());
  };
  const handleOpenNoteModal = (noteObj = null) => {
    if (noteObj) setNote(getNote(noteObj.id));
    else
      setNote({
        id: null,
        title: "",
        text: "",
        pinned: false,
      });
    setOpenNoteModal(true);
  };
  const handleCloseNoteModal = () => {
    setOpenNoteModal(false);
    setNote({
      id: null,
      title: "",
      text: "",
      pinned: false,
    });
    refreshNotes();
  };
  const handleOpenComfirmDelete = (note) => {
    setOpenConfirmDelete(true);
    setNote(note);
  };
  const handleCloseConfirmDelete = () => {
    setOpenConfirmDelete(false);
  };
  const pinnedNotes = notes.filter((n) => n.pinned);
  const regularNotes = notes.filter((n) => !n.pinned);

  return (
    <>
      <Box
        id="rootbox"
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          width: "auto",
          m: 5,
          mt: 2,
        }}
      >
        <Stack spacing={2}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                width: { xs: 200, sm: 500, md: 600 },
              }}
            >
              <TextField
                fullWidth
                label="Outlined"
                variant="outlined"
                onClick={() => handleOpenNoteModal()}
              />
            </Box>
          </Box>
          {searchResult.length != 0 ? (
            <Grid container spacing={2} justifyContent="center">
              {searchResult.map((note) => (
                <Grid item xs={12} sm={6} md={4} key={note.id}>
                  <NoteCard
                    handleOpenNoteModal={handleOpenNoteModal}
                    handleOpenComfirmDelete={handleOpenComfirmDelete}
                    note={note}
                    refreshNotes={refreshNotes}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <>
              {/* pinned notes */}
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {pinnedNotes.map((note) => (
                  <Grid item xs={12} sm={6} md={4} key={note.id}>
                    <NoteCard
                      handleOpenNoteModal={handleOpenNoteModal}
                      handleOpenComfirmDelete={handleOpenComfirmDelete}
                      note={note}
                      refreshNotes={refreshNotes}
                    />
                  </Grid>
                ))}
              </Grid>

              {/* regular notes */}
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {regularNotes.map((note) => (
                  <Grid item xs={12} sm={6} md={4} key={note.id}>
                    <NoteCard
                      handleOpenNoteModal={handleOpenNoteModal}
                      handleOpenComfirmDelete={handleOpenComfirmDelete}
                      note={note}
                      refreshNotes={refreshNotes}
                    />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Stack>
      </Box>
      <NoteModal
        note={note}
        setNote={setNote}
        open={openNoteModal}
        handleClose={handleCloseNoteModal}
      />
      <DeleteModal
        noteId={note.id}
        refreshNotes={refreshNotes}
        open={openConfirmDelete}
        handleClose={handleCloseConfirmDelete}
      />
    </>
  );
};

export default NotesArea;
