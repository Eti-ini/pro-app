
import React, { useState } from "react";



function InputDone(props) {
  const [inputTextDone, setInputTextDone] = useState(
    {title: "",
  description: ""}
  );
  

  function handleChange(event) {
    const { name, value } = event.target;

    setInputTextDone(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  

  
  function submitDone(event) {
    props.onAddDone(inputTextDone);
    setInputTextDone({
      title: "",
      description: ""
    });
    
    event.preventDefault();
  }
  return (
    <div className="form">
      <input name="title" 
        onChange={handleChange}
        value={inputTextDone.title}
        placeholder="Enter the task.." /><br/>
      <label>Enter due date and time</label><br/>
      <input name="date" 
        type= "date"
        onChange={handleChange}
        value={inputTextDone.date} />
        <input name="time" 
        type= "time"
        onChange={handleChange}
        value={inputTextDone.time} />
      <textarea
          name="description"
          onChange={handleChange}
          value={inputTextDone.description}
          placeholder="Describe your task..."
          rows="2"
        />
      <button
        onClick={submitDone}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputDone;
