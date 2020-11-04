import React, { useState } from "react";
function Todo() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    setItems([...items, inputList]);
    setInputList("");
  };

  const deleteItem = (i) => {
      debugger;
        items.splice(i, 1);
        setItems([...items]);
  }

  
  


  return (
    <div>
      <input type="text" 
      placeholder="add todos"
     value={inputList}
     onChange={itemEvent}
      />
      <button onClick={listOfItems}>+</button> 

      <ol>
         {items.map((e,i)=>{
            return (
            <li>{e}
            <button
                onClick={() => deleteItem(i)}
            >Delete</button>
            </li>
            )
        })}  
      </ol>
    </div>
  );
}

export default Todo;
