import {React} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from "./EmployeeList";
import Admin from "./Admin";


const Adminhead=()=>{
    return(
      <><Admin></Admin>
      <div className="container-xl">
	    <div className="table-responsive">
		  <div className="table-wrapper">
      <EmployeeList></EmployeeList>
      </div></div></div>
      </>
    );
}

export default Adminhead;