import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { deleteNote } from "../utils/util";

const DeleteModal = ({ noteId, refreshNotes, open, handleClose }) => {
  const yesBtnRef = useRef(null);
  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 200,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
  };
  const onFocusStyle = {
    "&:focus": {
      outline: "2px solud skyblue",
      backgroundColor: "rgba(135, 206, 250, 0.2)",
    },
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        yesBtnRef.current?.focus();
      }, 0);
    }
  }, [open]);

  const handleDeleteNote = () => {
    deleteNote(noteId);
    handleClose();
    refreshNotes();
  };
  const cancelDeleteNote = () => {
    handleClose();
  };

  return (
    <>
      <div>
        <Modal
          open={open}
          disableAutoFocus={false}
          disableEnforceFocus={true}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              ml={2}
              mb={1}
            >
              Are you sure?
            </Typography>

            <Button
              ref={yesBtnRef}
              sx={onFocusStyle}
              size="small"
              onClick={handleDeleteNote}
            >
              Yes
            </Button>
            <Button size="small" sx={onFocusStyle} onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default DeleteModal;
