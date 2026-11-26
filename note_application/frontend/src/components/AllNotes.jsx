
function AllNotes({notes,handleDelete,handleUpdate}) {

  

  return (
    <div className="flex flex-col px-4 py-6 lg:h-full lg:min-h-0">

      

      <div className="hide-scrollbar grid grid-cols-1 gap-6 overflow-y-auto pb-4 lg:min-h-0 lg:flex-1">

        {notes.map((note) => (
          <div
            key={note._id}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-white mb-3">
              {note.title}
            </h2>

            <p className="text-gray-400 text-sm leading-6">
              {note.description}
            </p>

            <div className="flex gap-3 mt-5">
              <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition"
              onClick={()=>handleUpdate(note)}
              >
                Update
              </button>

              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition"
              onClick={()=>handleDelete(note._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default AllNotes;