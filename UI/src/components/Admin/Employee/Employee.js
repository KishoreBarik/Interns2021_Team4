import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "./EmployeeContext";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "./EditForm";
import "./Appp.css";


const Employee = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [employee]);

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.phone}</td>
      <td>{employee.project}</td>
      <td>
        
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>

          <Button
            onClick={handleShow}
            className="btn"
            data-toggle="modal"
          ><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Button>
          
        </OverlayTrigger>&nbsp;
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
          <Button
            onClick={() => deleteEmployee(employee.id)}
            className="btn"
            data-toggle="modal"
          ><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></Button>
           </OverlayTrigger>
        
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theEmployee={employee} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Employee;