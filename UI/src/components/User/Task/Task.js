import { ModalFooter ,Button} from "react-bootstrap";
import { TaskContext } from "../Context1/TaskContext";
import {useContext,useState,useEffect } from 'react';
import { Modal} from "react-bootstrap";
import EditTask from "./EditTask";

const Task=({task})=>{
	const {deleteTask}=useContext(TaskContext);

	const [show,setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
	useEffect(()=>{
        handleClose()
    },[task])


    return(<>
        <td>{task.name}</td>
		<td>{task.time}</td>
		<td>

		<Button
		data-toggle="modal"
		onClick={handleShow}>
		<i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
		</Button>&nbsp;

		<Button  
		
		data-toggle="modal"
		onClick={()=>{deleteTask(task.id)}}>
		<i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
		</Button>
		</td>

		<Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
               <Modal.Title>
                   Add Task
               </Modal.Title>
               </Modal.Header>

               <Modal.Body>
               <EditTask  theTask={task}></EditTask>
               </Modal.Body>

               <ModalFooter>
                   <Button onClick={handleClose} variant="secondary"> close</Button>
               </ModalFooter>
           </Modal>
        </>
    )
}

export default Task;