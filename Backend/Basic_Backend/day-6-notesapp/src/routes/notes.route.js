const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getNoteByIdController,
  updateNoteByIdController,
  deleteNoteByIdController
} = require("../controllers/notes.controller");

const router = express.Router();

//! Create a new note
router.post("/create", (req, res) => {
  createNotesController(req, res);
});

// ! Get all notes
router.get("/allNotes", (req, res) => {
  getAllNotesController(req, res);
});

//! Get a note by ID
router.get("/:id",(req, res) => {
  getNoteByIdController(req, res);
});

//! Update a note by ID
router.put("/:id", (req, res) => {
  updateNoteByIdController(req, res);
});

//! Update via PATCH method (SOON)

//! Delete a note by ID
router.delete("/:id", (req, res) => {
  deleteNoteByIdController(req, res);
});

module.exports = router;
