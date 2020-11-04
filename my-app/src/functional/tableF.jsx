import React, { useState } from "react";

function Emp() {
  const [employee, setEmployee] = useState([]);

  function addEmployee(empdata) {
    setEmployee([...employee, empdata]);
  }

  return (
    <div className="rajat" >
      <AddEmployee addEmployee={addEmployee} />
      <table>
        <thead>
          <tr>
            <th >ID</th>
            <th >Name</th>
            <th >Age</th>
           
          </tr>
        </thead>
        <tbody className="rajat">
          {employee.map((el, i) => {
            return (
              <tr>
                <th >{i + 1}</th>
                <td>{el.name}</td>
                <td>{el.age}</td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Emp;

function AddEmployee({ addEmployee }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  return (
    <div>
      Name:
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      Age:
      <input
        type="text"
        name="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button
        onClick={() => {
          const empdata = { name, age };
          if (name !== "" && age !== "") addEmployee(empdata);
        }}
      >
        Add
      </button>
    </div>
  );
}
