import { Form, Button } from "react-bootstrap";
import "./Appp.css";
import { EmployeeContext } from "./EmployeeContext";
import { useContext, useState } from "react";

const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
  });

  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const { name, email, phone, project } = newEmployee;

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, email, phone, project);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email *"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group>
        Assign Project:
        <Form.Select
          placeholder="Assign Project"
          name="project"
          value={project}
          onChange={(e) => onInputChange(e)}
        >
          <option eventKey="-">Assign project</option>
          <option eventKey="project-1">Project-1</option>
          <option eventKey="project-2">Project-2</option>
          <option eventKey="project-3">Project-3</option>
        </Form.Select>
      </Form.Group>
      <Button variant="success" type="submit" block>
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddForm;
