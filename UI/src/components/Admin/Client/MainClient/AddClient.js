import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { ClientContext} from '../Context/ClientContext';
import { useContext,useState } from 'react';




const AddClient =()=>{
    const {addClient}=useContext(ClientContext);

    const [newClient,setNewClient]=useState({
        name:"",code:""
    });


    const onInputChange=(e)=>{
        setNewClient({...newClient,[e.target.name]:e.target.value})
    }

    const {name,code}=newClient;

    const handleSubmit=(e)=>{
        e.preventDefault();
        addClient(name,code);
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
            <Button variant='success' type='submit' block>Add Client </Button>
        </Form>

    )
}
export default AddClient;