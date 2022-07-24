import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';
import { useState } from 'react';
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes] = useState([])
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };
  const onDeleteNote = (idToDelete)=>{
    setNotes(notes.filter((note)=> note.id !== idToDelete));
  };
  return (
    <div className="App">idToDelete
      <Sidebar notes={notes} onAddNote={onAddNote} onDeleteNote = {onDeleteNote}/>
      <Main/>
      
    </div>
  );
}

export default App;
