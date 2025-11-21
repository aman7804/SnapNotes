import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

import { CardActionArea, IconButton } from "@mui/material";
import { updateNote } from "../utils/util";

const NoteCard = ({
  handleOpenNoteModal,
  handleOpenComfirmDelete,
  note,
  refreshNotes,
}) => {
  const togglePin = () => {
    const updatedNote = { ...note, pinned: !note.pinned };
    updateNote(updatedNote);
    refreshNotes();
  };

  return (
    <>
      {" "}
      <Card
        sx={{
          minHeight: 90,
          minWidth: 275,
          maxWidth: "auto",
          position: "relative",
        }}
      >
        <CardActionArea onClick={() => handleOpenNoteModal(note)}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ color: "text.secondary" }}
            >
              {note.title}
            </Typography>
            <Typography variant="body2">{note.text}</Typography>
          </CardContent>
        </CardActionArea>
        <IconButton
          size="small"
          sx={{ position: "absolute", bottom: 10, right: 10 }}
          onClick={() => handleOpenComfirmDelete(note)}
        >
          <DeleteIcon />
        </IconButton>
        <Box sx={{ position: "absolute", top: 10, right: 10 }}>
          <IconButton size="small" onClick={togglePin}>
            {note.pinned ? <PushPinIcon /> : <PushPinOutlinedIcon />}
          </IconButton>
        </Box>
      </Card>
    </>
  );
};

export default NoteCard;
