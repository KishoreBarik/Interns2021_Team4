import React, {useContext,useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,FormLabel,FormControl,Button, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";
import { useNavigate } from 'react-router-dom';
import {v4 as uuid } from "uuid";
    
const AddUser=()=>{
    
    const {addUser}=useContext(GlobalContext);
    const[name,setName]=useState('');
    const  navigate = useNavigate();

    const onSubmit = () =>{
        const newUser={
            id:uuid(),
            name:name
        }
        addUser(newUser);
       navigate('/admindashboard')
    }

    const onChange =(e)=>{
        setName(e.target.value);
    }

    return(
        <div>
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormControl 
                type="text" 
                placeholder="Enter Name"
                value={name}
                onChange={onChange}/>
            </FormGroup>
        <br/>
        <Button type="submit">ADD USER</Button>&nbsp;
        <Link to="homepage" className="btn btn-danger ">Cancel</Link>
        </Form>
        </div>
    );
}

export default AddUser ;