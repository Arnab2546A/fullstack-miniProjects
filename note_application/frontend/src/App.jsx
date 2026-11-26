import {useState,useEffect} from "react"
import axios from "axios";
import CreateNote from './components/CreateNote'
import AllNotes from './components/AllNotes'
const App = () => {

  const [formValues, setFormValues] = useState({
    title:"",
    description:""
  })
  const [updateFormID, setUpdateFormID] = useState(null)
  const [formUI, setFormUI] = useState({
    title:"Create Notes",
    desc:"Create your ideas and thoughts",
    button:"Create Note",
  })
const [allNotes, setAllNotes] = useState([])
  const handleChange=(e)=>{
    setFormValues(prev=>({...prev,[e.target.name]:e.target.value}))
  }


  const getAllNotes=async ()=>{
    try{
      const response=await axios.get("http://localhost:3000/notes/getNotes");
  console.log(response.data.getAllNotes)
  setAllNotes(response.data.getAllNotes)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
  getAllNotes()
}, [])
const handleSubmit=async (e)=>{
  e.preventDefault()
  if(updateFormID){
    try{
    const response=await axios.put(`http://localhost:3000/notes/${updateFormID}`,formValues)
    console.log(response.data)
    getAllNotes()
    setFormUI({
     title:"Create Notes",
    desc:"Create your ideas and thoughts",
    button:"Create Note",
  })
  }
  catch(err){
    console.log(err)
  }
  }
  else{
    try{
    const response=await axios.post("http://localhost:3000/notes/create",formValues)
    console.log(response.data)
    getAllNotes()
  }
  catch(err){
    console.log(err)
  }
  }
  setUpdateFormID(null)
  setFormValues({
    title:"",
    description:""
  });
}

const handleUpdate=(note)=>{
  console.log(note)
  setUpdateFormID(note._id)
  setFormUI({
    title:"Update Note",
    desc:"Update your idea and improve",
    button:"Update Note"
  })
  setFormValues({
    title:note.title?note.title:"",
    description:note.description?note.description:""
  });

}

const handleDelete=async (id)=>{
    try{
      const response=await axios.delete(`http://localhost:3000/notes/${id}`)
      console.log(response)
      getAllNotes()
    }
    catch(err){
      console.log(err)
    }
  }

  return (
  <main className="min-h-screen bg-gray-950 px-6 py-10 lg:box-border lg:grid lg:h-screen lg:min-h-0 lg:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)] lg:grid-rows-1 lg:items-start lg:gap-8 lg:overflow-hidden lg:py-6">
    <CreateNote
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formValues={formValues}
      formUI={formUI}
    />

    <AllNotes notes={allNotes}
    handleDelete={handleDelete}
    handleUpdate={handleUpdate}/>
  </main>
)
}

export default App