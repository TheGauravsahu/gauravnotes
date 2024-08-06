import HomePage from "./pages/HomePage";
import AddNotes from "./pages/AddNotes";
import EditNotes from "./pages/EditNotes";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar"; 
import NotesDetails from "./pages/NotesDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "./components/Modal";

function App() {
  const [notes, setNotes] = useState([]);
  let [loading, setLoading] = useState(false);
  const [filterText, setFilterText] = useState("")
  const [searchText, setSearchText] = useState("")
  
  const handleFilterText = (val)=>{
    setFilterText(val);
  }

  const handleSearchText = (val)=>{
    setSearchText(val);
  }

  useEffect(() => {
    axios.get(`https://gnotes.pythonanywhere.com/api/notes/?search=${searchText}`)
    .then(function (response) {
      console.log(response.data);
      setNotes(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [searchText])
  

  const filteredNotes = filterText == "BUSINESS" ? notes.filter(note => note.category=="BUSINESS") : filterText == "PERSONAL" ? notes.filter(note => note.category=="PERSONAL") : filterText == "IMPORTANT" ? notes.filter(note => note.category=="IMPORTANT") : notes 

  useEffect(() => {
    setLoading(true);
    axios.get('https://gnotes.pythonanywhere.com/api/notes/')
  .then(function (response) {
    console.log(response);
    setNotes(response.data); 
    setLoading(false);
  })
  .catch(function (error) {
    console.log(error);
  })
  }, [])
  
  const addNote = (data) => {
    axios.post('https://gnotes.pythonanywhere.com/api/notes/', data)
   .then(function (response) {
    setNotes([...notes,data])

    toast.success("New note added");
    console.log(response.data);
   })
   .catch(function (error) {
    console.log(error.message);
  })
  }

  const updateNote = (data,id) => {
    axios.put(`https://gnotes.pythonanywhere.com/api/notes/${id}/`, data)
   .then(function (response) {
    setNotes([...notes,data])
    toast.success("Note updated");
    console.log(response.data);
   })
   .catch(function (error) {
    console.log(error.message);
  })
  }

  const deleteNote = (id) => {
    axios.delete(`https://gnotes.pythonanywhere.com/api/notes/${id}/`)
   .catch(function (error) {
    console.log(error.message);
  })
  }

  return(
    <BrowserRouter>
      <Navbar handleSearchText={handleSearchText}/>
      <ToastContainer className="bg-white" />
      <Routes>
        <Route path="/" element={<HomePage notes={filteredNotes} loading={loading} handleFilterText={handleFilterText} /> } />
        <Route path="/add-notes" element={<AddNotes addNote={addNote} />} />
        <Route path="/edit/:id" element={<EditNotes updateNote={updateNote} />} />
        <Route path="/notes/:id" element={<NotesDetails deleteNote={deleteNote} />} />
        <Route path="/signup" />
        <Route path="/login" />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
