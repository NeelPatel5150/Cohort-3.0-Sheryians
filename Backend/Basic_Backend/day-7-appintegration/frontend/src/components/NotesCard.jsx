const NotesCard = ({ note, deleteNote, onUpdateClick }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-900">{note.title}</h2>

        <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-2 shrink-0"></span>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-600 leading-7 line-clamp-3">
        {note.description}
      </p>

      {/* Line */}
      <hr className="my-5 border-gray-200" />

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          onClick={() => onUpdateClick(note)}
          className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition"
        >
          Update
        </button>

        <button
          onClick={() => deleteNote(note._id)}
          className="px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NotesCard;
