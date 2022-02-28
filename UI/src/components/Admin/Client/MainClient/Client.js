import { ModalFooter ,Button} from "react-bootstrap";
import { ClientContext } from "../Context/ClientContext";
import {useContext,useState,useEffect } from 'react';
import { Modal} from "react-bootstrap";
import EditClient from "./EditClient";

const Client=({client})=>{
	const {deleteClient}=useContext(ClientContext);

	const [show,setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
	useEffect(()=>{
        handleClose()
    },[client])


    return(<>
        <td>{client.name}</td>
		<td>{client.code}</td>
		<td>

		<Button
		data-toggle="modal"
		onClick={handleShow}>
		<i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
		</Button>&nbsp;

		<Button  
		
		data-toggle="modal"
		onClick={()=>{deleteClient(client.id)}}>
		<i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
		</Button>
		</td>

		<Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
               <Modal.Title>
                   Add Client
               </Modal.Title>
               </Modal.Header>

               <Modal.Body>
               <EditClient theClient={client}></EditClient>
               </Modal.Body>

               <ModalFooter>
                   <Button onClick={handleClose} variant="secondary"> close</Button>
               </ModalFooter>
           </Modal>
        </>
    )
}

export default Client;