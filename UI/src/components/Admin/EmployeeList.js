import React from "react";
import Employee from "./Employee";
import {useContext, useEffect, useState } from 'react';
import { EmployeeContext } from "./Context/EmployeeContext"; 
import Modal from 'react-bootstrap/Modal'
import AddForm from "./AddForm";
import { ModalFooter ,Button} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import Pagination from "./Pagination";

const EmployeeList=()=>{
      
    const {sortedEmployees}=useContext(EmployeeContext);

    const [show,setShow]=useState(false);
    const [showAlert,setShowAlert]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    //const handleShowAlert=()=>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(2)

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
    }, [sortedEmployees])


    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage);


    return(
        
        <React.Fragment>
        <div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						
					</div><br/>
					<div className="">
						<Button onClick={handleShow} class="btn btn-success" 
                        data-toggle="modal"><i class="material-icons">&#xE147;</i> 
                        <span>Add New Department</span></Button>	<br/>				
					</div>
				</div>
			</div>
            <Alert show={showAlert} variant="success">
                "Department list is updated successfully!"
            </Alert>
            <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>code</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                  currentEmployees.map(employee => (
                      <tr key={employee.id}>
                        <Employee employee={employee} />
                    </tr>
                  ))  
                }
                

           </tbody>
           </table>
           <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentEmployees ={currentEmployees}
                sortedEmployees = {sortedEmployees} />

           <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
               <Modal.Title>
                   Add Department
               </Modal.Title>
               </Modal.Header>

               <Modal.Body>
               <AddForm/>
               </Modal.Body><br/>

               <ModalFooter>
                   <Button onClick={handleClose} variant="secondary"> close</Button>
               </ModalFooter>
           </Modal>
           </React.Fragment>
    )
}

export default EmployeeList;