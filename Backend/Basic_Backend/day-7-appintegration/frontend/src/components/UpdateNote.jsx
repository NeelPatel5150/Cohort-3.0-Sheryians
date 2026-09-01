import { useState } from "react";

const UpdateNote = ({ note, onClose, onUpdate }) => {
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdate(note._id, {
      title,
      description,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Update Note</h2>

            <p className="text-sm text-gray-500 mt-1">Edit your note</p>
          </div>

          <button
            onClick={onClose}
            className="text-2xl text-gray-400 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500 resize-none"
              required
              minLength={10}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
            >
              Update Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateNote;
