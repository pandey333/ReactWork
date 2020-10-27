import React from "react";

function BuildTable(props) {
    return (
            <div><tr>
            <td>{props.userTable[props.index].id}</td>
            <td>{props.userTable[props.index].name}</td>
            <td>{props.userTable[props.index].age}</td>
        </tr>
        </div>
        
    );
}

export default function EmpTable() { 
    let [userTable, setUserTable] = React.useState([]);

    userTable = [
        {id: 1, name: "Rajat", age: 22 },
        {id: 2, name: "Pandey", age:23},
        {id: 2, name: "Pandey", age:23},
        {id: 2, name: "Pandey", age:23},
        {id: 2, name: "Pandey", age:23}
    ];


   
        let newUserTable = [];
        for (let index=0; index<userTable.length; index++){
        newUserTable.push( 
            <BuildTable userTable = {userTable} index={index}/>
        )}
        // setUserTable(newUserTable);
  
   

    return (
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
            {newUserTable}
            
        </table>

    //     <div>
    //         <ol>
    // <li>{userTable[0].id}</li>
    //             <li>{userTable[0].name}</li>
    //             <li>{userTable[0].age}</li>
    //         </ol>
    //     </div>
    );
  }
  
  
  