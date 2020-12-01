
import React, { useState } from "react";



function InputDoing(props) {
  const [inputTextDoing, setInputTextDoing] = useState(
    {title: "",
    description: ""}
  );
  

  function handleChange(event) {
    const { name, value } = event.target;

    setInputTextDoing(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  

  
  function submitDoing(event) {
    props.onAddDoing(inputTextDoing);
    setInputTextDoing({
      title: "",
      description: ""
    });
    
    event.preventDefault();
  }

  
  return (
    <div className="form">
      <input name="title" 
        placeholder="Enter the task.." 
       onChange={handleChange} 
        value={inputTextDoing.title} /><br/>
        <label>Enter due date and time</label><br/>
        <input name="date" 
          type= "date"
          onChange={handleChange}
          value={inputTextDoing.date} />
          <input name="time" 
          type= "time"
          onChange={handleChange}
          value={inputTextDoing.time} />
      <textarea
          name="description"
          onChange={handleChange}
          value={inputTextDoing.description}
          placeholder="Describe your task..."
          rows="2"
        />
      <button
        onClick={submitDoing}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputDoing;
