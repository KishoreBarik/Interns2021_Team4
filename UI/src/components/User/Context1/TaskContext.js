import { createContext,useState,useEffect } from "react";
import {v4 as uuidv4} from 'uuid';


export const TaskContext=createContext();


const TaskContextProvider = (props) => {
        const [tasks,setTasks] = useState([
            {id:uuidv4(), name: 'Add Task1', time:'05:30'},
            {id:uuidv4(), name: 'Add Task2', time:'02:06'},
            
    ])
useEffect(()=>{
        setTasks(JSON.parse(localStorage.getItem('tasks')))
    },[])

useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
})


    const sortedTasks = tasks.sort((a,b)=>(a.name < b.name ? -1 : 1));

const addTask=(name,time)=>{
    setTasks([...tasks,{id:uuidv4(),
    name,time}])
}

const deleteTask=(id)=>{
    setTasks(tasks.filter(task=>task.id !== id))
}

const updateTask=(id,updatedTask)=>{
    setTasks(tasks.map((task)=>task.id===id?updatedTask:task))
}



  return (
        <TaskContext.Provider value={{sortedTasks,addTask,deleteTask,updateTask}}>
            {props.children}
        </TaskContext.Provider>
        )
}
export default TaskContextProvider;