import React from "react";

import Counter from "./functional/counterComponent";
import {Form} from "./classes/form.jsx"
 import "./App.css";
 import Table from "./functional/table.jsx";
// function App() {
//   return <Table />;
// }
function App() {
  return (
  <>
    
      <Form/>
      <Counter/>
      <Table/>
   </>
  );
}

export default App;
