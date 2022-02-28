import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { ClientContext } from '../Context/ClientContext';
import { useContext,useState } from 'react';




const EditClient =({theClient})=>{

    const id = theClient.id;
    const [name,setName]=useState(theClient.name);
    const [code,setCode]=useState(theClient.code);
    

    const {updateClient}=useContext(ClientContext);
    const updatedClient={id,name,code}

    const handleSubmit=(e)=>{
        e.preventDefault();
        updateClient(id,updatedClient)
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
export default EditClient;