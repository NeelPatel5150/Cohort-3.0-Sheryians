const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minlength: [10, "Description should be at least 10 characters long"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const NotesModel = mongoose.model('Note', notesSchema);
module.exports = NotesModel;
