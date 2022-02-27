import React, {useState,useEffect,useContext} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import {v4 as uuid } from "uuid";
import { Form,FormLabel,FormControl,Button, FormGroup } from "react-bootstrap";
import { DepartmentContext } from "./Context/DeptState";
import Table from 'react-bootstrap/Table';
import Admin from "./Admin";


const AdminHead=()=>{
    const {depart}=useContext(DepartmentContext);
    console.log(depart);
    

        const {departmentName}=useContext(DepartmentContext);
        
        const [show, setShow] = useState(false);
    
        const[department,setDepartment]=useState('');
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);


       const onSubmit = () =>{
        const newDept={
            id:uuid(),
            dept:department, 
        }
        departmentName(newDept);
        
    }

    const onChange =(e)=>{
        setDepartment(e.target.value);
    }
   
    return (
        <div>
        <Admin></Admin><br/>
            <div className="Container">
            <div className="row">
                <div className="col">
                </div>
                <div className="col-7">
            <Button variant="primary" onClick={handleShow}>
              Add department
            </Button>
        
        <Table striped bordered hover>
        
             <thead>
                   <tr>
                       <th>ID</th>
                       <th>DEPARTMENT</th>
                    </tr>
            </thead>
             <tbody>
             {depart.map(departs=>(
                   <tr>
                       <td><strong>{departs.id}</strong></td>
                       <td><strong>{departs.dept}</strong></td>
                    </tr>
                    ))}
             </tbody>
             
       </Table>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>ADD DEPARTMENT</Modal.Title>
              </Modal.Header>
              <Modal.Body>
        <div className="container">

        <Form onSubmit={onSubmit}>
            <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Enter department"
                  value={department}
                  onChange={onChange}/>
            </FormGroup>
        <br/>
                <Button type="submit">ADD DEPARTMENT</Button>&nbsp;
        </Form> 
        </div>
        
        </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                
              </Modal.Footer>
            </Modal>
            </div>
            <div className="col"></div>
            </div>
        </div>
        </div>
        );
      }
export default AdminHead;