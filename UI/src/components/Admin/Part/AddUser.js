import React, {useContext,useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,FormLabel,FormControl,Button, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";
import { useNavigate } from 'react-router-dom';
import {v4 as uuid } from "uuid";
import Admin from "../Admin";

    
const AddUser=()=>{
    
    const {addUser}=useContext(GlobalContext);
    const[name,setName]=useState('');
    const[lastname,setLastname]=useState('');
    const[emailid,setEmailId]=useState('');
    const  navigate = useNavigate();

    const onSubmit = () =>{
        const newUser={
            id:uuid(),
            name:name,
            last:lastname,
            email:emailid,
        }
        addUser(newUser);
       navigate('/admindashboard')
    }

    const onChange =(e)=>{
        setName(e.target.value);
    }

    const handlechange=(e)=>{
        setLastname(e.target.value);
    }

    const handleemail=(e)=>{
        setEmailId(e.target.value);
    }   

    


    return(
        <div>
             <Admin></Admin><br/>
        <div className="container">
            <div className="row">
                <div className="col"></div>
            <div className="col-7">
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <FormLabel><strong>ADD USER</strong></FormLabel>
                <FormControl 
                type="text" 
                placeholder="First Name"
                value={name}
                onChange={onChange}/>
            </FormGroup><br/>

            <FormControl 
                type="text" 
                placeholder="Last Name"
                value={lastname}
                onChange={handlechange}/><br/>

            <FormControl 
            type="email"
            placeholder="Enter email id"
            value={emailid}
            onChange={handleemail}/><br/>

           

           

        <br/>
        <Button type="submit">ADD USER</Button>&nbsp;
        <Link to="/Admindashboard" className="btn btn-danger ">Cancel</Link>
        </Form>
        </div>
        <div className="col"></div>
        </div>
        </div>
        </div>
    );
}

export default AddUser ;