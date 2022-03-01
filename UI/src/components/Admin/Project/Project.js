import { useContext, useState, useEffect } from "react";
import { ProjectContext } from "./ProjectContext";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "./EditForm";
import "./Appp.css";


const Project = ({ project }) => {
  const { deleteproject } = useContext(ProjectContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [project]);

  return (
    <>
      <td>{project.projectname}</td>
      <td>{project.departmentname}</td>

      <td>{project.projectstatus}</td>
      <td>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
          <Button           
            onClick={handleShow}
            className="btn"
            data-toggle="modal"
          ><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Button>
        </OverlayTrigger>&nbsp;

        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
          <Button
            onClick={() => deleteproject(project.id)}
            className="btn"
            data-toggle="modal"
          ><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></Button>
        </OverlayTrigger>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Project details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theProject={project} />
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

export default Project;