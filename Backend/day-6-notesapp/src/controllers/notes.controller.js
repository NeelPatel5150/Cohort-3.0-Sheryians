const NotesModel = require("../models/notes.model");

const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;

    let newNote = await new NotesModel({
      title,
      description,
    });

    await newNote.save();

    return res.status(201).json({
      message: "Note created Successfully",
      data: newNote,
    });
  } catch (error) {
    console.log("Error In Creation: ", error);
    return res.status(500).json({ message: "Error creating note" });
  }
};

const getAllNotesController = async (req, res) => {
  try {
    const allnotes = await NotesModel.find();

    res.status(200).json({
      message: 'All notes fetched successfully',
      data: allnotes,
    });

  } catch (error) {
    console.error('Error fetching notes:', error);
    res.status(500).json({ message: 'Error fetching notes' });
  }
};

const getNoteByIdController = async (req, res) => {
  try {
    const noteId = req.params.id;
    

    const note = await NotesModel.findById(noteId);

    res.status(200).json({
      message: "Note fetched successfully",
      data: note,
    });
    
  } catch (error) {
    console.log("Error In fetching Notes: ",error);
  }
};

const updateNoteByIdController = async (req, res) => {
  try {
    const noteId = req.params.id;
    const { title, description } = req.body;

    const updatedNote = await NotesModel.findByIdAndUpdate(
      noteId,
      { title, description },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
      message: "Note updated successfully",
      data: updatedNote,
    });
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ message: "Error updating note" });
  }
};

const deleteNoteByIdController = async (req, res) => {
  try {
    const noteId = req.params.id;

    const deletedNote = await NotesModel.findByIdAndDelete(noteId);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    return res.status(200).json({
      message: "Note deleted successfully",
      data: deletedNote,
    });
  }
  catch (error) {
    console.error("Error deleting note:", error);
    return res.status(500).json({ message: "Error deleting note" });
  }
};

module.exports = { createNotesController, getAllNotesController, getNoteByIdController, updateNoteByIdController, deleteNoteByIdController };


