import React from "react";

 import Counter from "./classes/counterComponent";
 import  Stopwatch from "./functional/StopWatch";

// import Todo from "./classes/todoList";
 import Emp from "./functional/tableF";
 import Todo from "./functional/todoList";
 import {Form} from "./classes/form"
 import "./App.css"; import Table from "./functional/table";

function App() {
  return (
    <div className="App-header">
      <Form />
      <Counter />
      <Stopwatch />
      <Table />
      <Todo />
      <Emp />
    </div>
  );
}

export default App;
