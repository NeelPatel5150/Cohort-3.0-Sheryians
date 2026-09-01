import React, { useEffect, useState } from "react";
import axios from "axios";
import NotesCard from "./components/NotesCard";
import UpdateNote from "./components/UpdateNote";

const App = () => {
  const [formvalues, setFormvalues] = useState({
    title: "",
    description: "",
  });

  const [allNotes, setAllNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleChange = (e) => {
    setFormvalues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // CREATE NOTE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/notes/create",
        formvalues,
      );

      console.log(response.data);

      setFormvalues({
        title: "",
        description: "",
      });

      getAllNotes();
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  // GET ALL NOTES
  const getAllNotes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/notes/allNotes");

      setAllNotes(response.data.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  // DELETE NOTE
  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/notes/${id}`);

      getAllNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // OPEN UPDATE MODAL
  const handleUpdateClick = (note) => {
    setSelectedNote(note);
  };

  // UPDATE NOTE
  const updateNote = async (id, updatedData) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/notes/${id}`,
        updatedData,
      );

      console.log(response.data);

      // Close modal
      setSelectedNote(null);

      // Refresh notes
      getAllNotes();
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Notes App
        </h1>

        {/* Create Form */}
        <form
          className="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <input
            className="p-3 outline-none text-lg rounded-xl border border-gray-300 focus:border-blue-500"
            type="text"
            name="title"
            value={formvalues.title}
            placeholder="Title"
            onChange={handleChange}
            required
          />

          <textarea
            className="p-3 outline-none text-lg rounded-xl border border-gray-300 focus:border-blue-500 resize-none"
            name="description"
            placeholder="Take a note..."
            onChange={handleChange}
            value={formvalues.description}
            required
            minLength={10}
            rows={4}
          />

          <button
            className="bg-blue-600 text-white rounded-xl py-3 font-medium hover:bg-blue-700 transition cursor-pointer"
            type="submit"
          >
            Add Note
          </button>
        </form>

        {/* Notes */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allNotes.map((note) => (
            <NotesCard
              key={note._id}
              note={note}
              deleteNote={deleteNote}
              onUpdateClick={handleUpdateClick}
            />
          ))}
        </div>
      </div>

      {/* Update Modal */}
      {selectedNote && (
        <UpdateNote
          note={selectedNote}
          onClose={() => setSelectedNote(null)}
          onUpdate={updateNote}
        />
      )}
    </div>
  );
};

export default App;
