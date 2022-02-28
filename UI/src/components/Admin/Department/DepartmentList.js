import React from "react";
import Department from "./Department";
import {useContext, useEffect, useState } from 'react';
import { DepartmentContext } from "./Context/DepartmentContext";
import Modal from 'react-bootstrap/Modal'
import { ModalFooter ,Button} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import Pagination from "./DepartmentPagination";
import {AiFillPlusCircle} from "react-icons/ai";
import AddDepartment from "./AddDepartment";

const DepartmentList=()=>{
      
    const {sortedDepartments}=useContext(DepartmentContext);

    const [show,setShow]=useState(false);
    const [showAlert,setShowAlert]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    //const handleShowAlert=()=>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [departmentsPerPage] = useState(2)

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
    }, [sortedDepartments])


    const indexOfLastDepartment = currentPage * departmentsPerPage;
    const indexOfFirstDepartment = indexOfLastDepartment - departmentsPerPage;
    const currentDepartments = sortedDepartments.slice(indexOfFirstDepartment, indexOfLastDepartment);
    const totalPagesNum = Math.ceil(sortedDepartments.length / departmentsPerPage);


    return(
        
        <React.Fragment>
        <div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						
					</div><br/>
					<div className="">
						<Button onClick={handleShow} class="btn btn-success" 
                        data-toggle="modal"><AiFillPlusCircle size={25}/>&nbsp;
                        <span>Add New Department</span></Button>	<br/>				
					</div>
				</div>
			</div>
            <Alert show={showAlert} variant="success">
                "Department list is updated successfully!"
            </Alert>
            <table className="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>code</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                  currentDepartments.map(department => (
                      <tr key={department.id}>
                        <Department department={department} />
                    </tr>
                  ))  
                }
                

           </tbody>
           </table>
           <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentDepartments ={currentDepartments}
                sortedDepartments = {sortedDepartments} />

           <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
               <Modal.Title>
                   Add Department
               </Modal.Title>
               </Modal.Header>

               <Modal.Body>
               <AddDepartment/>
               </Modal.Body><br/>

               <ModalFooter>
                   <Button onClick={handleClose} variant="secondary"> close</Button>
               </ModalFooter>
           </Modal>
           </React.Fragment>
    )
}

export default DepartmentList;