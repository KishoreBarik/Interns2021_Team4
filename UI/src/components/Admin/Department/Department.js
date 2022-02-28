import { ModalFooter ,Button} from "react-bootstrap";
import { DepartmentContext } from "./Context/DepartmentContext";
import {useContext,useState,useEffect } from 'react';
import { Modal} from "react-bootstrap";
import EditDepartment from "./EditDepartment";

const Department=({department})=>{
	const {deleteDepartment}=useContext(DepartmentContext);

	const [show,setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
	useEffect(()=>{
        handleClose()
    },[department])


    return(<>
        <td>{department.name}</td>
		<td>{department.code}</td>
		<td>

		<Button
		data-toggle="modal"
		onClick={handleShow}>
		<i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
		</Button>&nbsp;

		<Button  
		
		data-toggle="modal"
		onClick={()=>{deleteDepartment(department.id)}}>
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
               <EditDepartment  theDepartment={department}></EditDepartment>
               </Modal.Body>

               <ModalFooter>
                   <Button onClick={handleClose} variant="secondary"> close</Button>
               </ModalFooter>
           </Modal>
        </>
    )
}

export default Department;