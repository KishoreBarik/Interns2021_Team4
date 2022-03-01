import React from "react";
import Task from "./Task";
import {useContext, useEffect, useState } from 'react';
import { TaskContext } from "../Context1/TaskContext";
import Modal from 'react-bootstrap/Modal'
import { ModalFooter ,Button} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import TaskPagination from "./TaskPagination";
import { MdOutlineTimer } from "react-icons/md";
import AddTask from "./AddTask";

const TaskList=()=>{
      
    const {sortedTasks}=useContext(TaskContext);

    const [show,setShow]=useState(false);
    const [showAlert,setShowAlert]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    //const handleShowAlert=()=>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [tasksPerPage] = useState(2)

    const handleShowAlert=()=>{
        setShowAlert(true);
        setTimeout(()=>{
            setShowAlert(false);
            },1000)
    }
    
    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [sortedTasks])


    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = sortedTasks.slice(indexOfFirstTask, indexOfLastTask);
    const totalPagesNum = Math.ceil(sortedTasks.length / tasksPerPage);


    return(
        
        <React.Fragment>
        <div className="table-title">
				<div className="row">
					<div className="col-sm-3">
                    <h2><MdOutlineTimer size={25}/></h2>
					</div><br/>
					<div className="col-sm-3">
                       
						<Button onClick={handleShow} class="btn btn-success" 
                        data-toggle="modal">
                        <span>Add New Task</span></Button>	<br/>				
					</div>
				</div>
			</div>
            <Alert show={showAlert} variant="success">
                "Task list is updated successfully!"
            </Alert>
            <table className="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Spent</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                  currentTasks.map(task=> (
                      <tr key={task.id}>
                        <Task task={task} />
                    </tr>
                  ))  
                }
                

           </tbody>
           </table>
           <TaskPagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentTasks ={currentTasks}
                sortedTasks = {sortedTasks} />

           <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
               <Modal.Title>
                   Add Tasks
               </Modal.Title>
               </Modal.Header>

               <Modal.Body>
               <AddTask/>
               </Modal.Body><br/>

               <ModalFooter>
                   <Button onClick={handleClose} variant="secondary"> close</Button>
               </ModalFooter>
           </Modal>
           </React.Fragment>
    )
}

export default TaskList;