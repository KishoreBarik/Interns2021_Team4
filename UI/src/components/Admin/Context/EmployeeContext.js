import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid';
import Employee from "../Employee";

export const EmployeeContext=createContext();


const EmployeeContextProvider = (props) => {
        const [employees,setEmployees] = useState([
            {id:uuidv4(), name: 'HR', code:'4567'},
            {id:uuidv4(), name: 'BACKEND', code:'4567'},
            {id:uuidv4(), name: 'FRONTEND', code:'4567'},
            
    ])


    const sortedEmployees = employees.sort((a,b)=>(a.name < b.name ? -1 : 1));

const addEmployee=(name,code)=>{
    setEmployees([...employees,{id:uuidv4(),
    name,code}])
}

const deleteEmployee=(id)=>{
    setEmployees(employees.filter(employee=>employee.id !== id))
}

const updateEmployee=(id,updatedEmployee)=>{
    setEmployees(employees.map((employee)=>employee.id===id?updatedEmployee:employee))
}



  return (
        <EmployeeContext.Provider value={{sortedEmployees,addEmployee,deleteEmployee,updateEmployee}}>
            {props.children}
        </EmployeeContext.Provider>
        )
}
export default EmployeeContextProvider;