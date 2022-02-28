import { ModalFooter ,Button} from "react-bootstrap";
import { EmployeeContext } from "./Context/EmployeeContext"; 
import {useContext,useState,useEffect } from 'react';
import { Modal} from "react-bootstrap";
import EditForm from "./EditForm";

const Employee=({employee})=>{
	const {deleteEmployee}=useContext(EmployeeContext);

	const [show,setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
	useEffect(()=>{
        handleClose()
    },[employee])


    return(<>
        <td>{employee.name}</td>
		<td>{employee.code}</td>
		<td>

		<Button
		data-toggle="modal"
		onClick={handleShow}>
		<i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
		</Button>&nbsp;

		<Button  
		
		data-toggle="modal"
		onClick={()=>{deleteEmployee(employee.id)}}>
		<i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
		</Button>
		</td>

		<Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
               <Modal.Title>
                   Add Department
               </Modal.Title>
               </Modal.Header>

               <Modal.Body>
               <EditForm theEmployee={employee}></EditForm>
               </Modal.Body>

               <ModalFooter>
                   <Button onClick={handleClose} variant="secondary"> close</Button>
               </ModalFooter>
           </Modal>
        </>
    )
}

export default Employee;