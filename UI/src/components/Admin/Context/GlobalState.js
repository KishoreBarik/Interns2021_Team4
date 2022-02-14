import React ,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

//intial state
const intialState={
    users:[
        {id:1,name:"User One"},
        {id:2,name:"User Two"},
        {id:3,name:"User Three"},
    ]
};

//create Context

export const GlobalContext = createContext(intialState);

//provider Component

export const  GlobalProvider=({children}) =>{
    const [state,dispatch]=useReducer(AppReducer,intialState);

//to delete user actions

const removeUser = (id)=> {
    dispatch({
        type:'REMOVE_USER',
        payload:id
    })
}

// to add user actions

const addUser = (user)=> {
    dispatch({
        type:'ADD_USER',
        payload:user
    })
}

// to edit user actions
const editUser =(user)=>{
    dispatch({
        type:'EDIT_USER',
        payload:user
    })
}
    return(
        <GlobalContext.Provider value={{
            users:state.users,
            removeUser:removeUser,
            addUser,
            editUser
            
        }}>
            {children}
        </GlobalContext.Provider>
    )
}