import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { TaskContext } from '../Context1/TaskContext';
import { useContext,useState } from 'react';





const EditTask =({theTask})=>{

    const id = theTask.id;
    const [name,setName]=useState(theTask.name);
    const [time,setTime]=useState(theTask.time);
    

    const {updateTask}=useContext(TaskContext);
    
    const updatedTask={id,name,time}

    const handleSubmit=(e)=>{
        e.preventDefault();
        updateTask(id,updatedTask)
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
                type="time"
                placeholder='time'
                name="time"
                value={time}
                onChange={(e)=>setTime(e.target.value)}
                required/>
            </Form.Group><br/>

            <Button variant='success' type='submit' block>Edit Time</Button>
        </Form>

    )
}
export default EditTask;