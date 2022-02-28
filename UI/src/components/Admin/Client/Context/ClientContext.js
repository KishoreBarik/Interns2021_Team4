import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid';

export const ClientContext=createContext();


const ClientContextProvider = (props) => {
        const [clients,setClients] = useState([
            {id:uuidv4(), name: 'HR', code:'4567'},
            {id:uuidv4(), name: 'BACKEND', code:'4567'},
            {id:uuidv4(), name: 'FRONTEND', code:'4567'},
            
    ])


    const sortedClients = clients.sort((a,b)=>(a.name < b.name ? -1 : 1));

const addClient=(name,code)=>{
    setClients([...clients,{id:uuidv4(),
    name,code}])
}

const deleteClient=(id)=>{
    setClients(clients.filter(client=>client.id !== id))
}

const updateClient=(id,updatedClient)=>{
    setClients(clients.map((client)=>client.id===id?updatedClient:client))
}



  return (
        <ClientContext.Provider value={{sortedClients,addClient,deleteClient,updateClient}}>
            {props.children}
        </ClientContext.Provider>
        )
}
export default ClientContextProvider;