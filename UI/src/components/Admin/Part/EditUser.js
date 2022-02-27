import React, {useContext,useState,useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,FormLabel,FormControl,Button, FormGroup } from "react-bootstrap";
import { Link ,useParams,useLocation} from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";
import { useNavigate} from 'react-router-dom';
import {v4 as uuid } from "uuid";

const EditUser=(props)=>{
   
    const {users,editUser}=useContext(GlobalContext);
    const[selectedUser,setSelectedUser]=useState({
        id:'',
        name:'',
    });
    const  navigate = useNavigate();
    const {id} =useParams();
    const currentUserId=JSON.stringify({id});
    

    useEffect(()=>{
        const userId=currentUserId;

        const selectedUser=users.find(user=>user.id===Number(userId));
        
        setSelectedUser(selectedUser);
        },[currentUserId,users])

    const onSubmit = () =>{
        editUser(selectedUser)
       navigate('/admindashboard')
    }

    const onChange =(e)=>{
        setSelectedUser({...selectedUser,[e.target.name]:e.target.value})
    }

    return(
        <div>
            client-stufff:{id}
             <Form onSubmit={onSubmit}>
            <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Enter Name"
                  onChange={onChange}/>
            </FormGroup>
        <br/>
        <Button type="submit">Edit Name</Button>&nbsp;
        <Link to="homepage" className="btn btn-danger ">Cancel</Link>
        </Form>
        </div>
    );
}

export default EditUser ;