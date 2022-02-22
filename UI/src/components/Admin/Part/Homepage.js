import React, {useState,useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from "./UserList";
import Heading from "./Heading";



const Homepage=()=>{
    return(
        <div>
           <Heading></Heading>
           <UserList></UserList>
        </div>
    );
}

export default Homepage ;