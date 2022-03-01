import { Form, Button } from "react-bootstrap";
import "./Appp.css";
import { ProjectContext } from "./ProjectContext";
import { useContext, useState } from "react";

const AddForm = () => {
  const { addProject } = useContext(ProjectContext);

  const [newProject, setNewProject] = useState({
    projectname: "",
    departmentname: "",

    projectstatus: "",
  });

  const onInputChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const { projectname, departmentname, projectstatus } = newProject;

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(projectname, departmentname, projectstatus);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Projectname *"
          name="projectname"
          value={projectname}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="departmentname *"
          name="departmentname"
          value={departmentname}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Select
          placeholder=""
          name="projectstatus"
          value={projectstatus}
          onChange={(e) => onInputChange(e)}
        >
          <option eventKey="PROJECTSTATUS">projectstatus</option>

          <option eventKey="Active">Active</option>
          <option eventKey="InActive">InActive</option>
        </Form.Select>
      </Form.Group>
      <br />
      <Button variant="success" type="submit" block>
        Add New Project
      </Button>
    </Form>
  );
};

export default AddForm;