import React, { useState } from "react";
function Todo() {
  
  const [itemList, setItemList] = useState([]);
  const [item, setItem] = useState("");
  
  const itemEvent = (e) => {
    setItem(e.target.value);
  };

  const listOfItems = () => {
    setItemList([...itemList, item]);
    setItem("");
  };

  const deleteItem = (i) => {
      
        itemList.splice(i, 1);
        setItemList([...itemList]);
  }


  return (
    <div>
      <input type="text" 
      placeholder="add todos"
     value={item}
     onChange={itemEvent}
      />
      <button onClick={listOfItems}>+</button> 

      <ol>
         {itemList.map((e,i)=>{
            return (
            <li>{e}
            <button
                onClick={() => deleteItem(i)}
            > <br/>X</button>
            </li>
            )
        })}  
      </ol>
    </div>
  );
}

export default Todo;
