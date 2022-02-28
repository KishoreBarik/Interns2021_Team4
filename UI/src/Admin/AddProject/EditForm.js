import { Form, Button } from "react-bootstrap";
import "./Appp.css";
import { ProjectContext } from "./ProjectContext";
import { useContext, useState } from "react";

const EditForm = ({ theProject }) => {
  const id = theProject.id;

  const [Projectname, setProjectName] = useState(theProject.Projectname);
  const [departmentname, setdepartmentName] = useState(
    theProject.departmentname
  );

  const [projectstatus, setProjectstatus] = useState(theProject.projectstatus);

  const { updateProject } = useContext(ProjectContext);

  const updatedProject = { id, Projectname, departmentname, projectstatus };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProject(id, updatedProject);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Project Name *"
          name="name"
          value={Projectname}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder=" Department name*"
          name="departmentname"
          value={departmentname}
          onChange={(e) => setdepartmentName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Select
          placeholder=""
          name="projectstatus"
          value={projectstatus}
          onChange={(e) => setProjectstatus(e.target.value)}
        >
          <option eventKey="InActive">InActive</option>
          <option eventKey="Active">Active</option>
        </Form.Select>
      </Form.Group>
      <Button variant="success" type="submit" block>
        Edit Project
      </Button>
    </Form>
  );
};

export default EditForm;
