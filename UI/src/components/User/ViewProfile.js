import Tabs from 'react-bootstrap/Tabs';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import NavBar from '../NavBar';
import Dashboard from '../Dashboard';

class ViewProfile extends React.Component
{
    render()
    { return(
        <div><NavBar />
        <div className="container">
        <br/><br/><br/>
        <div className="row">

          <div className="col">
            <p></p>
          </div>
          <div className="col-4">
      <div className="card text-center center p-3  d-flex justify-content-center">

      <div className="matter ">
          <h1>View Profile</h1>
      </div>
      </div>
      </div>
    
     <div className="col"></div>

     </div>
    
     </div>
</div>
    )
}
}
export default ViewProfile;