import React ,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

//intial state
const intialState={
    users:[
        {id:1,name:"User ",last:"one   ",email:"userone@gmail.com",status:"active"},
        {id:2,name:"User ",last:"two   ",email:"usertwo@gmail.com",status:"active"},
        {id:3,name:"User ",last:"three ",email:"userthree@gmail.com",status:"active"},
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