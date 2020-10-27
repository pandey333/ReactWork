import React, {useState} from "react";
 
function Emp() {

    const [emplist, setEmpList] = useState([{Id:1, Name:"Shivam", Age:21}, {Id:1, Name:"Shivam", Age:21}, {Id:1, Name:"Shivam", Age:21}]),
            [emp, setEmp] = useState({Id:1, Name:"Shivam", Age:21});
        
    return (
        <div>
            <AddEmp emp = {emp} setEmpList = {setEmpList} setEmp = {setEmp} emplist = {emplist} />
            <table>
                <thead>
                    <tr>
                        {Object.keys(emp).map(el => <th>{el}</th>)}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        emplist.map(el => {
                           return (
                               <tr>
                                   <td>{el.Id}</td>
                                   <td>{el.Name}</td>
                                   <td>{el.Age}</td>
                                   <td><Action /></td>
                               </tr>
                           )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Emp;

function Action() {
    return(
        <>
            <button>View</button>
            <button>Update</button>
            <button>Delete</button>
        </>
    )
}

function AddEmp({setEmpList, emplist}) {
    const[name, setName] = useState(""),
            [age, setAge] = useState(18);
    return(
        <>
            Name : <input type="text"
                name = "name"
                value = {name}
                onChange = {e => {
                    setName(e.target.value);
                }}/>

            Age : <input type="text"
                name = "age"
                value = {age}
                onChange = {e => {
                    setAge(e.target.value);
                }}/>
                <button
                    onClick = {() => {
                        const emp = {Id : 1, Name : {name}, Age : {age}};
                        setEmpList([...emplist, emp]);
                    }}
                >Add Employee</button>
        </>
    )
}