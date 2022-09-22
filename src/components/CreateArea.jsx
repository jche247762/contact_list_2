import React, { useState } from "react";

function CreateArea (props) {
  const [note, setNote] = useState({
    // title: "",
    // content: ""
    First_Name: "",
    Last_Name: "",
    Sex: "",
    Age: "",
  });

  function handleChange (event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote (event) {
    alert('add success')
    props.onAdd(note);
    setNote({
      // title: "",
      // content: ""
      First_Name: "",
      Last_Name: "",
      Sex: "",
      Age: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="First_Name"
          onChange={handleChange}
          value={note.First_Name}
          placeholder="First_Name"
        />
        <input
          name="Last_Name"
          onChange={handleChange}
          value={note.Last_Name}
          placeholder="Last_Name"
        />
        <input
          name="Sex"
          onChange={handleChange}
          value={note.Sex}
          placeholder="Sex"
        />
        <input
          name="Age"
          onChange={handleChange}
          value={note.Age}
          placeholder="Age"
        />
        {/* <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        /> */}
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
