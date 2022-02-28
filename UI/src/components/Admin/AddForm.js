import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { EmployeeContext } from './Context/EmployeeContext'; 
import { useContext,useState } from 'react';




const AddForm =()=>{
    const {addEmployee}=useContext(EmployeeContext);

    const [newEmployee,setNewEmployee]=useState({
        name:"",code:""
    });


    const onInputChange=(e)=>{
        setNewEmployee({...newEmployee,[e.target.name]:e.target.value})
    }

    const {name,code}=newEmployee;

    const handleSubmit=(e)=>{
        e.preventDefault();
        addEmployee(name,code);
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control 
                type="text"
                placeholder='Enter Name'
                name="name"
                value={name}
                onChange={(e)=>onInputChange(e)}
                required/><br/>

                <Form.Control 
                type="number"
                placeholder='Enter code'
                name="code"
                value={code}
                onChange={(e)=>onInputChange(e)}
                required/>

            </Form.Group><br/>
            <Button variant='success' type='submit' block>Add Department </Button>
        </Form>

    )
}
export default AddForm;