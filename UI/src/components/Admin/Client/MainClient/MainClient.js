import {React} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientList from "./ClientList";
import Admin from "../../Admin";


const MainClient=()=>{
    return(
      <><Admin></Admin>
      <div className="container-xl">
	    <div className="table-responsive">
		  <div className="table-wrapper">
      <ClientList></ClientList>
      </div></div></div>
      </>
    );
}

export default MainClient;