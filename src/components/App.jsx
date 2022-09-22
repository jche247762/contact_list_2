import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App () {
  const [notes, setNotes] = useState([
  ]);
  useEffect(() => {
    fetch('/data.json', {
      method: 'GET',
    }).then(response => response.json())
      .then((res) => {
        console.log(res)
        setNotes(res)
      }).catch((err) => {
        console.log(err)
      }); // connection errors
  }, []);
  function addNote (newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote (id) {
    alert('delete success')
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return noteItem._id !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((ele, index) => {
        return (
          <Note
            key={index}
            _id={ele._id}
            // title={noteItem.title}
            // content={noteItem.content}
            First_Name={ele.First_Name}
            Last_Name={ele.Last_Name}
            Sex={ele.Sex}
            Age={ele.Age}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
