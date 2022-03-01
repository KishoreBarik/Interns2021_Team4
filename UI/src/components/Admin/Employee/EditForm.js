import { Form, Button } from "react-bootstrap";
import "./Appp.css";
import { EmployeeContext } from "./EmployeeContext";
import { useContext, useState } from "react";

const EditForm = ({ theEmployee }) => {
  const id = theEmployee.id;

  const [name, setName] = useState(theEmployee.name);
  const [email, setEmail] = useState(theEmployee.email);

  const [phone, setPhone] = useState(theEmployee.phone);
  const [project, setProject] = useState(theEmployee.project);

  const { updateEmployee } = useContext(EmployeeContext);

  const updatedEmployee = { id, name, email, phone, project };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, updatedEmployee);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email *"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Select
          placeholder="Assign Project"
          name="project"
          value={project}
          onChange={(e) => setProject(e.target.value)}
        >
          <option eventKey="-">Assign project</option>
          <option eventKey="project-1">Project-1</option>
          <option eventKey="project-2">Project-2</option>
          <option eventKey="project-3">Project-3</option>
        </Form.Select>
      </Form.Group>
      <Button variant="success" type="submit" block>
        Edit Employee
      </Button>
    </Form>
  );
};

export default EditForm;