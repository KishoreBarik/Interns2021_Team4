import {React} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import DepartmentList from "./DepartmentList";
import Admin from "../Admin";


const Adminhead=()=>{
    return(
      <><Admin></Admin>
      <div className="container-xl">
	    <div className="table-responsive">
		  <div className="table-wrapper">
      <DepartmentList></DepartmentList>
      </div></div></div>
      </>
    );
}

export default Adminhead;