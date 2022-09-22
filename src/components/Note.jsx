import React from "react";

function Note (props) {
  function handleClick () {
    props.onDelete(props._id);
  }

  return (
    <div className="note">
      <h1>{props.First_Name}-{props.Last_Name}</h1>
      <p>Sex:{props.Sex}&nbsp; &nbsp; Age:{props.Age}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
