import { createContext,useState,useEffect } from "react";
import {v4 as uuidv4} from 'uuid';

export const ClientContext=createContext();


const ClientContextProvider = (props) => {
        const [clients,setClients] = useState([
            {id:uuidv4(), name: 'AGENDA', code:'4878787'},
            {id:uuidv4(), name: 'BUXER', code:'4567827'},
            {id:uuidv4(), name: 'CLIENT', code:'45638877'},
            
    ])
useEffect(()=>{
        setClients(JSON.parse(localStorage.getItem('clients')))
    },[])

useEffect(()=>{
    localStorage.setItem('clients',JSON.stringify(clients));
})

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