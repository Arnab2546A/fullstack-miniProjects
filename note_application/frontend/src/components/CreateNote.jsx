
const CreateNote = ({handleChange,handleSubmit,formValues,formUI}) => {

  return (
        <div className="w-full px-4 lg:h-full">

      <form
        onSubmit={handleSubmit}
        className="w-full bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl lg:flex lg:h-full lg:flex-col"
      >
        <h2 className="text-2xl font-bold text-white mb-2 text-center">
          {formUI.title}
        </h2>

        <p className="text-gray-400 text-sm text-center mb-8">
          {formUI.desc}
        </p>

        <label className="block text-gray-300 text-sm font-medium mb-2">
          Title
        </label>

        <input
          type="text"
          placeholder="Enter note title"
          name="title"
          value={formValues.title}
          onChange={handleChange}
          required
          className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 p-3 rounded-lg mb-5 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
        />

        <label className="block text-gray-300 text-sm font-medium mb-2">
          Description
        </label>

        <textarea
          placeholder="Enter note description..."
       
          rows="5"
          name="description"
          onChange={handleChange}
          value={formValues.description}
          minLength={20}
          required
          className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 p-3 rounded-lg mb-6 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition resize-none lg:flex-1"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          {formUI.button}
        </button>

      </form>
    </div>
  )
}

export default CreateNote