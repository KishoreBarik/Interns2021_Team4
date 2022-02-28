import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { EmployeeContext } from './Context/EmployeeContext'; 
import { useContext,useState } from 'react';




const EditForm =({theEmployee})=>{

    const id = theEmployee.id;
    const [name,setName]=useState(theEmployee.name);
    const [code,setCode]=useState(theEmployee.code);
    

    const {updateEmployee}=useContext(EmployeeContext);
    const updatedEmployee={id,name,code}

    const handleSubmit=(e)=>{
        e.preventDefault();
        updateEmployee(id,updatedEmployee)
    }

    

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control 
                type="text"
                placeholder='Enter Name'
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required/><br/>

                <Form.Control 
                type="number"
                placeholder='code'
                name="code"
                value={code}
                onChange={(e)=>setCode(e.target.value)}
                required/>
            </Form.Group><br/>

            <Button variant='success' type='submit' block>Edit Department</Button>
        </Form>

    )
}
export default EditForm;