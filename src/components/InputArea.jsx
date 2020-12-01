
import React, { useState } from "react";



function InputArea(props) {
  const [inputTextToDo, setInputTextToDo] = useState(
    {title: "",
    description: "",
  date: ""}
  );
  

  function handleChange(event) {
    const { name, value } = event.target;

    setInputTextToDo(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  
  function submitToDo(event) {
    props.onAddToDo(inputTextToDo);
    setInputTextToDo({
      title: "",
      description: "",
      date: ""
    });
    
    event.preventDefault();
  }

  return (
    <div className="form">
      <input name="title" 
        onChange={handleChange} 
        value={inputTextToDo.title} 
        placeholder="Enter the task.." /><br/>
           <label>Enter due date and time</label><br/>
      <input name="date" 
        type= "date"
        onChange={handleChange}
        value={inputTextToDo.date} />
        <input name="time" 
        type= "time"
        onChange={handleChange}
        value={inputTextToDo.time} /> 
        <textarea
          name="description"
          onChange={handleChange}
          value={inputTextToDo.description}
          placeholder="Describe your task..."
          rows="2"
        />
      <button
        onClick={submitToDo}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
