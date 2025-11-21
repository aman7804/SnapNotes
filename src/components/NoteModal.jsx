import { Box, IconButton, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import PushPinIcon from "@mui/icons-material/PushPin";
import { addNote, getNote, updateNote } from "../utils/util";

const NoteModal = ({ note, setNote, open, handleClose }) => {
  const titleRef = useRef(null);
  const noteRef = useRef(null);
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        titleRef.current?.focus();
      }, 0);
    }
  }, [open]);

  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: 150, sm: 250, md: 400 },
    bgcolor: "background.paper",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 4,
    // p: 4,
  };
  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          let prevNote = getNote(note.id ?? null);
          if (prevNote) {
            if (
              note.title != prevNote.title ||
              note.text != prevNote.text ||
              note.pinned != prevNote.pinned
            )
              updateNote(note);
          } else {
            if (note.title || note.text) addNote({ ...note, id: Date.now() });
          }
          handleClose();
        }}
        onEntered={() => titleRef.current.focus()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <Box sx={{ width: "100%", maxWidth: 600 }}>
            <TextField
              fullWidth
              inputRef={titleRef}
              autoFocus
              multiline
              variant="standard"
              placeholder="Title"
              value={note.title}
              onChange={(e) =>
                setNote((prev) => ({ ...prev, title: e.target.value }))
              }
              InputProps={{
                style: { fontSize: 25 },
                disableUnderline: true,
                onKeyDown: (e) => {
                  if (e.key === "Enter") {
                    titleRef.current.blur();
                    noteRef.current.focus();
                    e.preventDefault();
                  }
                },
              }}
            />
          </Box>
          <Box sx={{ width: "100%", maxWidth: 600 }}>
            <TextField
              fullWidth
              multiline
              inputRef={noteRef}
              value={note.text}
              variant="standard"
              placeholder="Take a note..."
              onChange={(e) =>
                setNote((prev) => ({ ...prev, text: e.target.value }))
              }
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default NoteModal;
