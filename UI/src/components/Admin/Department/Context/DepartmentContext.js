import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid';
import Department from "../Department";

export const DepartmentContext=createContext();


const DepartmentContextProvider = (props) => {
        const [departments,setDepartments] = useState([
            {id:uuidv4(), name: 'AGENDA', code:'4878787'},
            {id:uuidv4(), name: 'BUXER', code:'4567827'},
            {id:uuidv4(), name: 'CLIENT', code:'45638877'},
            
    ])


    const sortedDepartments = departments.sort((a,b)=>(a.name < b.name ? -1 : 1));

const addDepartment=(name,code)=>{
    setDepartments([...departments,{id:uuidv4(),
    name,code}])
}

const deleteDepartment=(id)=>{
    setDepartments(departments.filter(department=>department.id !== id))
}

const updateDepartment=(id,updatedDepartment)=>{
    setDepartments(departments.map((department)=>department.id===id?updatedDepartment:department))
}



  return (
        <DepartmentContext.Provider value={{sortedDepartments,addDepartment,deleteDepartment,updateDepartment}}>
            {props.children}
        </DepartmentContext.Provider>
        )
}
export default DepartmentContextProvider;