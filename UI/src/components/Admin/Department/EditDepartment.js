import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { DepartmentContext } from './Context/DepartmentContext'; 
import { useContext,useState } from 'react';





const EditDepartment =({theDepartment})=>{

    const id = theDepartment.id;
    const [name,setName]=useState(theDepartment.name);
    const [code,setCode]=useState(theDepartment.code);
    

    const {updateDepartment}=useContext(DepartmentContext);
    const updatedDepartment={id,name,code}

    const handleSubmit=(e)=>{
        e.preventDefault();
        updateDepartment(id,updatedDepartment)
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
export default EditDepartment;