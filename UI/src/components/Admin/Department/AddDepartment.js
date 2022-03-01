import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { DepartmentContext } from './Context/DepartmentContext'; 
import { useContext,useState } from 'react';




const AddDepartment=()=>{
    const {addDepartment}=useContext(DepartmentContext);

    const [newDepartment,setNewDepartment]=useState({
        name:"",code:""
    });


    const onInputChange=(e)=>{
        setNewDepartment({...newDepartment,[e.target.name]:e.target.value})
    }

    const {name,code}=newDepartment;

    const handleSubmit=(e)=>{
        e.preventDefault();
        addDepartment(name,code);
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
export default AddDepartment;