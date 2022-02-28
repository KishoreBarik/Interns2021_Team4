import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Task from './Task';
import { useContext,useState } from 'react';
import { TaskContext } from '../Context1/TaskContext';




const AddTask=()=>{
    const {addTask}=useContext(TaskContext);

    const [newTask,setNewTask]=useState({
        name:"",time:""
    });


    const onInputChange=(e)=>{
        setNewTask({...newTask,[e.target.name]:e.target.value})
    }

    const {name,time}=newTask;

    const handleSubmit=(e)=>{
        e.preventDefault();
        addTask(name,time);
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
                type="time"
                placeholder='Time'
                name="time"
                value={time}
                onChange={(e)=>onInputChange(e)}
                required/>

            </Form.Group><br/>
            <Button variant='success' type='submit' block>Add Task </Button>
        </Form>

    )
}
export default AddTask;