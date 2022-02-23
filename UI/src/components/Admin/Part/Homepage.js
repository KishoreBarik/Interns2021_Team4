import React, {useState,useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from "./UserList";
import Admin from "../Admin";



const Homepage=()=>{
    return(
        <div>
           <Admin></Admin>
           <UserList></UserList>
        </div>
    );
}

export default Homepage ;