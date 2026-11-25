import {useState} from "react"
import axios from "axios";
const App = () => {

  const [formValues, setFormValues] = useState({
    title:"",
    description:""
  })

  const handleChange=(e)=>{
    setFormValues(prev=>({...prev,[e.target.name]:e.target.value}))
  }

const handleSubmit=async (e)=>{
  e.preventDefault()
  console.log(formValues);
  try{
    const response=await axios.post("http://localhost:3000/notes/create",formValues)
    console.log(response.data)
  }
  catch(err){
    console.log(err)
  }
  setFormValues({
    title:"",
    description:""
  });
}

  return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-2xl font-bold text-white mb-2 text-center">
          Create Note
        </h2>

        <p className="text-gray-400 text-sm text-center mb-8">
          Write down your thoughts and ideas.
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
          className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 p-3 rounded-lg mb-6 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition resize-none"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Create Note
        </button>

      </form>
    </div>
  )
}

export default App