import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "./EmployeeContext";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "./EditForm";
import "./Appp.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
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
      <td>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
          <EditOutlined onClick={handleShow} className="" data-toggle="modal" />
        </OverlayTrigger>{" "}
        &nbsp;
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
          <DeleteOutlined
            onClick={() => deleteEmployee(employee.id)}
            className=""
            data-toggle="modal"
          />
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
