import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import Doing from "./Doing";
import Done from "./Done";
import InputArea from "./InputArea";
import InputDoing from "./InputDoing";
import InputDone from "./InputDone";


function App() {

  
  const [items, setItems] = useState([]);


  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }
  
  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  // for Doing list
  
  const [itemsDoing, setItemsDoing] = useState([]);
  function addItemDoing(inputText) {
    setItemsDoing(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItemDoing(id) {
    setItemsDoing(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  // for Done list
  const [itemsDone, setItemsDone] = useState([]);
  function addItemDone(inputText) {
    setItemsDone(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItemDone(id) {
    setItemsDone(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
   <div className="flex-container">
     
      <div className="container">
      <div className="heading">
        <h1>To-Do</h1>
      </div>
      <InputArea onAddToDo={addItem} />
      <div>
        <div>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              title={todoItem.title}
              description={todoItem.description}
              date={todoItem.date}
              time={todoItem.time}
              onChecked={deleteItem}
              
            />
            
          ))}
        </div>
      </div>
    </div>


    <div className="container">
      <div className="heading">
        <h1>Doing</h1>
      </div>
      <InputDoing onAddDoing={addItemDoing} />
      <div>
        <div>
          {itemsDoing.map((todoItem, index) => (
            <Doing
              key={index}
              id={index}
              title={todoItem.title}
              description={todoItem.description}
              date={todoItem.date}
              time={todoItem.time}
              onChecked={deleteItemDoing}
            />
          ))}
        </div>
      </div>
    </div>

    <div className="container">
      <div className="heading">
        <h1>Done</h1>
      </div>
      <InputDone onAddDone={addItemDone} />
      <div>
        <div>
          {itemsDone.map((todoItem, index) => (
            <Done
              key={index}
              id={index}
              title={todoItem.title}
              description={todoItem.description}
              date={todoItem.date}
              time={todoItem.time}
              onChecked={deleteItemDone}
            />
          ))}
        </div>
      </div>
    </div>
   </div>
  );
}

export default App;
