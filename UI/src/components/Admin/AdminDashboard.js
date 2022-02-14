import {React} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../NavBar";
import Homepage from "./Part/Homepage";


const AdminDashboard=()=>{
    return(
        
        <div>
            <NavBar></NavBar>
           <Homepage></Homepage>
            </div>
        
        
    );
}

export default AdminDashboard;