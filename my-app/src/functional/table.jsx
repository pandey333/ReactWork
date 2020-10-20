import React from "react";
import Tablehead from "./table-head.jsx";
import Tablebody from "./table-body.jsx";
const header = {
  id: "id",
  name: "name",
  department: "department",
  salary: "salary",
};
const user = [
  {
    id: 1,
    name: "jais",
    department: "department",
    salary: 30,
  },
  {
    id: 2,
    name: "raj",
    department: "department",
    salary: 50,
  },
  {
    id: 3,
    name: "Shiv",
    department: "department",
    salary: 60,
  },
  {
    id: 4,
    name: "vik",
    department: "department",
    salary: 70,
  },
];
function Table() {
  return (
    <table>
      <Tablehead header={header} />
      <Tablebody user={user} />
    </table>
  );
}
export default Table;
