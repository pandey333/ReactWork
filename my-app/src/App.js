import React from "react";

 import Counter from "./classes/counterComponent";
 import  Stopwatch from "./functional/StopWatch";

 //import Todo from "./classes/todoList";

 import Todo from "./functional/todoList";

import {Form} from "./classes/form.jsx"
 import "./App.css";
 import Table from "./functional/table.jsx";



function App() {
  return (
  <div className = "App-header">
      <Form/>
      <Counter/>
      <Stopwatch/>
      <Table/>
      <Todo/>
   
 
  </div>
  );
}

export default App;
