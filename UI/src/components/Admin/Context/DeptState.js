import React ,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

const deptState={
    depart:[
        {id:1,dept:"backend" },
        {id:2,dept:"frontend"},
    ]
};

export const DepartmentContext= createContext(deptState);

export const  DepartmentProvider=({children}) =>{
    const [state,dispatch]=useReducer(AppReducer,deptState);

const departmentName =(departs)=>{
        dispatch({
            type:'DEPARTMENT_NAME',
            payload:departs,
        })
    
    }

    return(
        <DepartmentContext.Provider value={{
            depart:state.depart,
            departmentName
            
        }}>
            {children}
        </DepartmentContext.Provider>
    )
}