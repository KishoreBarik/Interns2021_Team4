import React from "react";
import Client from "./Client";
import {useContext, useEffect, useState } from 'react';
import { ClientContext } from "../Context/ClientContext";
import Modal from 'react-bootstrap/Modal'
import { ModalFooter ,Button} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import ClientPagination from "./ClientPagination";
import AddClient from "./AddClient";

const ClientList=()=>{
      
    const {sortedClients}=useContext(ClientContext);

    const [show,setShow]=useState(false);
    const [showAlert,setShowAlert]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    //const handleShowAlert=()=>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [clientsPerPage] = useState(2)

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
    }, [sortedClients])


    const indexOfLastClient = currentPage * clientsPerPage;
    const indexOfFirstClient = indexOfLastClient - clientsPerPage;
    const currentClients = sortedClients.slice(indexOfFirstClient, indexOfLastClient);
    const totalPagesNum = Math.ceil(sortedClients.length / clientsPerPage);


    return(
        
        <React.Fragment>
        <div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						
					</div><br/>
					<div className="">
						<Button onClick={handleShow} class="btn btn-success" 
                        data-toggle="modal"><i class="material-icons">&#xE147;</i> 
                        <span>Add New Client</span></Button>	<br/>				
					</div>
				</div>
			</div>
            <Alert show={showAlert} variant="success">
                "Client list is updated successfully!"
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
                  currentClients.map(client => (
                      <tr key={client.id}>
                        <Client client={client} />
                    </tr>
                  ))  
                }
                

           </tbody>
           </table>
           <ClientPagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentClients ={currentClients}
                sortedClients = {sortedClients} />

           <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
               <Modal.Title>
                   Add Client
               </Modal.Title>
               </Modal.Header>

               <Modal.Body>
               <AddClient/>
               </Modal.Body><br/>

               <ModalFooter>
                   <Button onClick={handleClose} variant="secondary"> close</Button>
               </ModalFooter>
           </Modal>
           </React.Fragment>
    )
}

export default ClientList;